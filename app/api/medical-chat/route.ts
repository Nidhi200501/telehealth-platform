import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { name, age, gender, symptoms } = await req.json()

  if (!symptoms || symptoms.trim().length < 3) {
    return NextResponse.json({
      reply:
        "Please describe your health concern in a bit more detail so I can help you.",
    })
  }

  const systemPrompt = `
You are a medical and mental-health triage assistant.

STRICT RULES (must follow):
- You ONLY respond to health-related, medical, or mental health concerns.
- This INCLUDES physical health, mental health, emotional symptoms, mood issues, stress, anxiety, and behavioral changes.
- If the user asks about maths, coding, general knowledge, temperature conversion, jokes, or anything non-medical, you MUST politely refuse.
- You MUST NOT provide diagnoses.
- You MUST provide general guidance only.
- You MUST include a medical disclaimer.
- Use calm, supportive language.
`

  const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: systemPrompt },
        {
          role: "user",
          content: `
Patient Details:
Name: ${name}
Age: ${age}
Gender: ${gender}

User Concern:
${symptoms}
`,
        },
      ],
      temperature: 0.2,
    }),
  })

  const data = await groqRes.json()
  const reply = data?.choices?.[0]?.message?.content

  // HARD SAFETY NET — if Groq still drifts (rare)
  if (
    !reply ||
    reply.toLowerCase().includes("equation") ||
    reply.toLowerCase().includes("calculate") ||
    reply.toLowerCase().includes("formula")
  ) {
    return NextResponse.json({
      reply:
        "I can only help with medical or health-related concerns. Please describe a symptom or health issue.",
    })
  }

  return NextResponse.json({
    reply:
      reply +
      "\n\n⚠️ This information is for general guidance only and is not a medical diagnosis. Please consult a licensed healthcare professional if symptoms persist or worsen.",
  })
}