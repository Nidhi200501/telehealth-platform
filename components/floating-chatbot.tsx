"use client"

import { useState, useRef, useEffect } from "react"
import { X, Send, Download, Mic } from "lucide-react"
import jsPDF from "jspdf"

interface ChatMessage {
  id: number
  text: string
  sender: "user" | "bot"
}

interface UserData {
  name: string
  age: string
  gender: string
}

export function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([])
  const [chatStep, setChatStep] = useState<"name" | "age" | "gender" | "symptoms">("name")
  const [userData, setUserData] = useState<UserData>({ name: "", age: "", gender: "" })
  const [currentInput, setCurrentInput] = useState("")
  const [severity, setSeverity] = useState<"mild" | "moderate" | "severe">("mild")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [isListening, setIsListening] = useState(false)
  const recognitionRef = useRef<any>(null)

  const initializeChatbot = () => {
    setChatMessages([
      {
        id: 1,
        text: "Hello! Welcome to TeleHealth AI Assistant. To help you better, I need some information. What is your name?",
        sender: "bot",
      },
    ])
    setChatStep("name")
    setUserData({ name: "", age: "", gender: "" })
    setCurrentInput("")
    setIsOpen(true)
  }

  const handleChatSubmit = () => {
    if (isListening && recognitionRef.current) {
    recognitionRef.current.stop()
    setIsListening(false)
  }
    if (!currentInput.trim()) return

    const newMessage = {
      id: chatMessages.length + 1,
      text: currentInput,
      sender: "user" as const,
    }

    const updatedMessages = [...chatMessages, newMessage]
    setChatMessages(updatedMessages)
    setCurrentInput("")

    let botResponse = ""
    let nextStep: "name" | "age" | "gender" | "symptoms" = chatStep

    if (chatStep === "name") {
      setUserData((prev) => ({ ...prev, name: currentInput }))
      botResponse = `Nice to meet you, ${currentInput}! How old are you?`
      nextStep = "age"
    } else if (chatStep === "age") {
      setUserData((prev) => ({ ...prev, age: currentInput }))
      botResponse = "Thank you! Are you Male, Female, or Prefer not to say?"
      nextStep = "gender"
    } else if (chatStep === "gender") {
      setUserData((prev) => ({ ...prev, gender: currentInput }))
      botResponse = `Got it, ${userData.name}. Now, what symptoms are you experiencing or what happened to you? Please describe in detail.`
      nextStep = "symptoms"
    } else if (chatStep === "symptoms") {

  setTimeout(async () => {
    try {
      const res = await fetch("/api/medical-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
  name: userData.name,
  age: userData.age,
  gender: userData.gender,
  messages: updatedMessages.map(m => ({
    role: m.sender === "user" ? "user" : "assistant",
    content: m.text
  }))
}),
      })

      const data = await res.json()
      if (["mild", "moderate", "severe"].includes(data.severity)) {
  setSeverity(data.severity)
}
      setChatMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          sender: "bot",
          text: Array.isArray(data.reply)
        ? data.reply.map((p: string) => `• ${p}`).join("\n")
        : String(data.reply),
      
        },
      ])
    } catch (err) {
      setChatMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          sender: "bot",
          text:
            "Sorry, I couldn’t fetch real-time medical data right now. Please try again later.",
        },
      ])
    }
  }, 700)

  nextStep = "symptoms"
}

    setChatStep(nextStep)

if (chatStep !== "symptoms") {
  setTimeout(() => {
    setChatMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        text: botResponse,
        sender: "bot",
      },
    ])
  }, 500)
}
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [chatMessages])
  useEffect(() => {
  if (typeof window === "undefined") return

  const SpeechRecognition =
    (window as any).SpeechRecognition ||
    (window as any).webkitSpeechRecognition

  if (!SpeechRecognition) {
  console.warn("Speech recognition not supported in this browser")
  return
}

  const recognition = new SpeechRecognition()
  recognition.lang = "en-US"
  recognition.interimResults = false
  recognition.continuous = false

  recognition.onresult = (event: any) => {
    const transcript = event.results[0][0].transcript
    setCurrentInput(prev => (prev ? prev + " " + transcript : transcript))
  }

  recognition.onend = () => {
    setIsListening(false)
  }

  recognitionRef.current = recognition
}, [])

  function cleanForPDF(text: unknown): string {
  if (Array.isArray(text)) {
    return text.map(t => `• ${t}`).join("\n")
  }

  if (typeof text !== "string") {
    return ""
  }

  return text
    .replace(/[^\x20-\x7E\n]/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
}

const handleMicClick = () => {
  if (!recognitionRef.current) {
    alert("Speech recognition is not supported in this browser.")
    return
  }

  if (isListening) {
    recognitionRef.current.stop()
    setIsListening(false)
  } else {
    recognitionRef.current.start()
    setIsListening(true)
  }
}

const exportChatToPDF = () => {
  const doc = new jsPDF()
  // ===== SEVERITY BADGE =====
let badgeColor: [number, number, number] = [0, 160, 0]
let badgeText = "MILD"

if (severity === "moderate") {
  badgeColor = [255, 165, 0]
  badgeText = "MODERATE"
}

if (severity === "severe") {
  badgeColor = [220, 20, 60]
  badgeText = "SEVERE"
}

doc.setFillColor(...badgeColor)
doc.rect(doc.internal.pageSize.width - 55, 10, 40, 10, "F")

doc.setTextColor(255, 255, 255)
doc.setFontSize(9)
doc.text(badgeText, doc.internal.pageSize.width - 35, 17, { align: "center" })

doc.setTextColor(0, 0, 0) // reset color
  // ===== Header Background =====
doc.setFillColor(180, 205, 235)
doc.rect(0, 0, doc.internal.pageSize.width, 26, "F")
  const pageHeight = doc.internal.pageSize.height
  const pageWidth = doc.internal.pageSize.width
  const marginX = 20
  const bottomMargin = 30
  let yPosition = 19
  // ===== Title =====
  doc.setTextColor(20, 60, 120)
  doc.setFont("helvetica", "bold")
  doc.setFontSize(16)
doc.text("TeleHealth – Medical Consultation Summary", marginX, yPosition)

yPosition += 6
doc.setFontSize(11)
doc.setFont("helvetica", "bold")
doc.setTextColor(...badgeColor)
doc.text(`Severity: ${badgeText}`, marginX, yPosition)
doc.setTextColor(0, 0, 0)
doc.setFont("helvetica", "normal")
yPosition += 8   
doc.setFontSize(10)
doc.text(`Date: ${new Date().toLocaleDateString()}`, marginX, yPosition)
  yPosition += 5
  doc.text(`Time: ${new Date().toLocaleTimeString()}`, marginX, yPosition)

  // ===== Patient Info =====
  yPosition += 10
  doc.setFont("helvetica", "bold")
  doc.setFontSize(11)
  doc.text("Patient Information", marginX, yPosition)

  yPosition += 6
  doc.setFont("helvetica", "normal")
  doc.setFontSize(10)
  doc.text(`Name: ${userData.name}`, marginX, yPosition)
  yPosition += 5
  doc.text(`Age: ${userData.age}`, marginX, yPosition)
  yPosition += 5
  doc.text(`Gender: ${userData.gender}`, marginX, yPosition)

  // ===== Conversation =====
  yPosition += 10
  doc.setFont("helvetica", "bold")
  doc.text("Consultation Notes", marginX, yPosition)
  yPosition += 8
doc.setFont("helvetica", "bold")
doc.text("Symptoms Reported", marginX, yPosition)

yPosition += 6
doc.setFont("helvetica", "normal")
const symptomIndex = chatMessages.findIndex(
  (m, i) =>
    m.sender === "user" &&
    chatMessages.slice(0, i).some(
      prev => prev.sender === "bot" && prev.text.includes("what symptoms")
    )
)

const symptomMessage =
  symptomIndex === -1 ? null : chatMessages[symptomIndex]

if (symptomMessage) {
  doc.text(`• ${symptomMessage.text}`, marginX, yPosition)
}

yPosition += 10

  yPosition += 8
  doc.setFont("helvetica", "normal")

const medicalMessages =
  symptomIndex === -1
    ? []
    : chatMessages.slice(symptomIndex + 1).filter(m => m.sender === "bot")
doc.setFont("helvetica", "bold")
doc.text("AI Guidance", marginX, yPosition)
yPosition += 6

doc.setFont("helvetica", "normal")

medicalMessages.forEach((message) => {
  const cleanText = cleanForPDF(message.text)

  const lines = doc.splitTextToSize(
    cleanText,
    pageWidth - marginX * 2
  )

  if (yPosition + lines.length * 6 > pageHeight - bottomMargin) {
    doc.addPage()
    yPosition = 20
  }

  doc.text(lines, marginX, yPosition)
  yPosition += lines.length * 6 + 6
})

  // ===== DISCLAIMER (FIXED) =====
  const disclaimerText =
    "Disclaimer: This document contains AI-generated health guidance for informational purposes only and is not a medical diagnosis. Please consult a licensed healthcare professional for medical advice. For medical emergencies, contact local emergency services immediately."

  const disclaimerLines = doc.splitTextToSize(
    disclaimerText,
    pageWidth - marginX * 2
  )

  // force new page if disclaimer won't fit fully
  if (yPosition + disclaimerLines.length * 5 > pageHeight - bottomMargin) {
    doc.addPage()
    yPosition = 20
  }

  doc.setFont("helvetica", "italic")
  doc.setFontSize(9)
  doc.text(disclaimerLines, marginX, yPosition)
// ===== FOOTER WITH PAGE NUMBER =====
const pageCount = doc.getNumberOfPages()

for (let i = 1; i <= pageCount; i++) {
  doc.setPage(i)
  doc.setFontSize(8)
  doc.setTextColor(120)
  doc.text(
    `Generated by TeleHealth AI • Page ${i} of ${pageCount}`,
    pageWidth / 2,
    pageHeight - 10,
    { align: "center" }
  )
}
  doc.save(`TeleHealth-Consultation-${Date.now()}.pdf`)
}
  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={initializeChatbot}
          className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-16 h-16 rounded-full gradient-primary shadow-2xl shadow-primary/50 hover:shadow-xl hover:shadow-primary/60 transition-all duration-300 hover:scale-110 group"
        >
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='35' r='18' fill='%23fff'/%3E%3Ccircle cx='38' cy='28' r='3' fill='%23000'/%3E%3Ccircle cx='62' cy='28' r='3' fill='%23000'/%3E%3Cpath d='M 35 50 Q 50 65 65 50' stroke='%23000' strokeWidth='2' fill='none'/%3E%3Crect x='30' y='55' width='40' height='30' rx='5' fill='%23e0e0e0'/%3E%3Crect x='35' y='65' width='8' height='12' fill='%23999'/%3E%3Crect x='57' y='65' width='8' height='12' fill='%23999'/%3E%3C/svg%3E"
            alt="AI Robot"
            className="w-8 h-8"
          />
        </button>
      )}

      {/* Chatbot Modal */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px] flex flex-col rounded-2xl shadow-2xl shadow-primary/30 border border-primary/20 bg-background animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-primary/10 gradient-primary text-white rounded-t-2xl">
            <div className="flex items-center gap-2">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='35' r='18' fill='%23fff'/%3E%3Ccircle cx='38' cy='28' r='3' fill='%23000'/%3E%3Ccircle cx='62' cy='28' r='3' fill='%23000'/%3E%3Cpath d='M 35 50 Q 50 65 65 50' stroke='%23000' strokeWidth='2' fill='none'/%3E%3Crect x='30' y='55' width='40' height='30' rx='5' fill='%23999'/%3E%3Crect x='35' y='65' width='8' height='12' fill='%23666'/%3E%3Crect x='57' y='65' width='8' height='12' fill='%23666'/%3E%3C/svg%3E"
                alt="AI Robot"
                className="w-6 h-6"
              />
              <h2 className="text-lg font-bold">TeleHealth AI Assistant</h2>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/20 rounded-lg transition-colors">
              <X size={20} className="text-white" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {chatMessages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs px-4 py-2 rounded-xl ${
                    message.sender === "user"
                      ? "gradient-primary text-white rounded-br-none"
                      : "bg-muted text-foreground rounded-bl-none border border-primary/20"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-primary/10 space-y-3">
            {chatStep === "symptoms" && chatMessages.some(m => m.sender === "bot") && (
              <button
                onClick={exportChatToPDF}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-secondary/20 text-secondary border border-secondary/30 hover:bg-secondary/30 transition-all duration-300 font-medium text-sm"
              >
                <Download size={16} />
                Export Chat to PDF
              </button>
            )}
            <div className="flex gap-2 items-center">
              <input
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleChatSubmit()}
                placeholder="Type your response..."
                className="flex-1 px-4 py-2 border border-primary/20 rounded-xl bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground text-sm"
              />
              {/* 🎤 MIC BUTTON — INSERTED HERE */}
              <button
              type="button"
              onClick={handleMicClick}
              className={`px-3 py-2 rounded-xl border ${
              isListening
            ? "bg-red-500 text-white animate-pulse"
            : "bg-muted text-foreground"
           }`}
           >
          <Mic size={16} />
           </button>
              <button
                onClick={handleChatSubmit}
                disabled={!currentInput.trim()}
                className="px-4 py-2 gradient-primary text-white rounded-xl hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}