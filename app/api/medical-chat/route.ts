import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { name, age, gender, messages } = await req.json()

  // ---- BASIC VALIDATION ----
  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({
      severity: "mild",
      reply:
        "Please describe what you are experiencing so I can better understand your concern."
    })
  }

  // Get last user message for validation
  const lastUserMessage = [...messages]
    .reverse()
    .find(m => m.role === "user")?.content

  if (!lastUserMessage || lastUserMessage.trim().length < 3) {
    return NextResponse.json({
      severity: "mild",
      reply:
        "Please describe your symptoms in more detail, including when they started, how intense they feel, and whether anything makes them better or worse."
    })
  }

  const systemPrompt = `
You are a medical triage assistant speaking directly to a patient.

MANDATORY RULES:
1. Classify severity as exactly one of: mild, moderate, severe.
2. Start your response with this exact line:
   SEVERITY: mild | moderate | severe

WRITING STYLE:
- Write in clear, natural paragraphs (not bullet points).
- Be calm, reassuring, and professional.
- Avoid repetition and filler.
- Do NOT diagnose or name diseases.
- Do NOT use emojis or markdown.

LENGTH CONTROL (STRICT):
- mild → 2 to 3 concise paragraphs
- moderate → 3 to 4 concise paragraphs
- severe → 4 to 5 concise paragraphs

CONTENT TO COVER:
- What the symptom usually means in simple terms
- What the patient should do now
- Warning signs to watch for
- When to seek medical care

IMPORTANT:
Chest pain, breathing difficulty, neurological symptoms, or severe pain must be at least MODERATE unless clearly harmless.
Mental health symptoms ARE medical and must be addressed respectfully.
`

  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      temperature: 0.3,
      messages: [
        { role: "system", content: systemPrompt },
        ...messages
      ]
    })
  })

  const data = await res.json()
  const content: string = data?.choices?.[0]?.message?.content || ""

  // ---- SAFE SEVERITY EXTRACTION ----
  const severityMatch = content.match(/SEVERITY:\s*(mild|moderate|severe)/i)

  const severity =
    severityMatch?.[1]?.toLowerCase() === "severe"
      ? "severe"
      : severityMatch?.[1]?.toLowerCase() === "moderate"
      ? "moderate"
      : "mild"

  // ---- CLEAN MEDICAL TEXT ----
  const reply = content
    .replace(/SEVERITY:\s*(mild|moderate|severe)/i, "")
    .trim()

  return NextResponse.json({
    severity,
    reply:
      reply ||
      "Please monitor your symptoms closely and seek medical care if they worsen or feel concerning."
  })
}