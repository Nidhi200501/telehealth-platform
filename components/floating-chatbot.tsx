"use client"

import { useState, useRef, useEffect } from "react"
import { X, Send, Download } from "lucide-react"
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
  const messagesEndRef = useRef<HTMLDivElement>(null)

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
          symptoms: currentInput,
        }),
      })

      const data = await res.json()

      setChatMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          sender: "bot",
          text: data.reply,
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

  const exportChatToPDF = () => {
    const doc = new jsPDF()
    const pageHeight = doc.internal.pageSize.height
    const pageWidth = doc.internal.pageSize.width
    let yPosition = 20

    // Title and metadata
    doc.setFont("helvetica", "bold")
    doc.setFontSize(16)
    doc.text("TeleHealth - Chat History", 20, yPosition)

    yPosition += 10
    doc.setFontSize(10)
    doc.setFont("helvetica", "normal")
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, yPosition)
    yPosition += 5
    doc.text(`Time: ${new Date().toLocaleTimeString()}`, 20, yPosition)

    yPosition += 10
    doc.setFont("helvetica", "bold")
    doc.setFontSize(11)
    doc.text("User Information:", 20, yPosition)

    yPosition += 6
    doc.setFont("helvetica", "normal")
    doc.setFontSize(10)
    doc.text(`Name: ${userData.name}`, 20, yPosition)
    yPosition += 5
    doc.text(`Age: ${userData.age}`, 20, yPosition)
    yPosition += 5
    doc.text(`Gender: ${userData.gender}`, 20, yPosition)

    yPosition += 10
    doc.setFont("helvetica", "bold")
    doc.setFontSize(11)
    doc.text("Conversation:", 20, yPosition)

    yPosition += 8
    doc.setFont("helvetica", "normal")
    doc.setFontSize(10)

    // Add chat messages
    chatMessages.forEach((message) => {
      const sender = message.sender === "bot" ? "Assistant" : "You"
      const label = `${sender}:`

      // Check if we need a new page
      if (yPosition > pageHeight - 20) {
        doc.addPage()
        yPosition = 20
      }

      doc.setFont("helvetica", "bold")
      doc.text(label, 20, yPosition)
      yPosition += 5

      doc.setFont("helvetica", "normal")
      const lines = doc.splitTextToSize(message.text, pageWidth - 40)
      doc.text(lines, 25, yPosition)
      yPosition += lines.length * 5 + 5
    })

    // Footer
    yPosition += 5
    doc.setFont("helvetica", "italic")
    doc.setFontSize(9)
    doc.text("This chat has been exported from TeleHealth AI Assistant.", 20, yPosition)
    yPosition += 4
    doc.text("For medical emergencies, please contact emergency services immediately.", 20, yPosition)

    // Save the PDF
    doc.save(`TeleHealth-Chat-${Date.now()}.pdf`)
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
            {chatStep === "symptoms" && (
              <button
                onClick={exportChatToPDF}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-secondary/20 text-secondary border border-secondary/30 hover:bg-secondary/30 transition-all duration-300 font-medium text-sm"
              >
                <Download size={16} />
                Export Chat to PDF
              </button>
            )}
            <div className="flex gap-2">
              <input
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleChatSubmit()}
                placeholder="Type your response..."
                className="flex-1 px-4 py-2 border border-primary/20 rounded-xl bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground text-sm"
              />
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