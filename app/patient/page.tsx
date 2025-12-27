"use client"

import { Navbar } from "@/components/navbar"
import { Card } from "@/components/ui/card"
import { Calendar, FileText, Zap } from "lucide-react"

export default function PatientDashboard() {
  const appointments = [
    { id: 1, doctor: "Dr. Tanya", date: "Dec 29, 2024", time: "2:00 PM", status: "Confirmed" },
    { id: 2, doctor: "Dr. Ramesh", date: "Jan 5, 2025", time: "10:30 AM", status: "Pending" },
  ]

  return (
    <main className="min-h-screen pt-16 bg-muted/30">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="mb-2">Welcome, John</h1>
        <p className="text-muted-foreground mb-12">Manage your health from one place</p>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Calendar, title: "Book Appointment", desc: "Schedule a consultation" },
            { icon: FileText, title: "My Appointments", desc: "View upcoming appointments" },
            { icon: FileText, title: "Medical Records", desc: "Access your health history" },
            { icon: Zap, title: "AI Symptom Checker", desc: "Check your symptoms" },
          ].map((item, i) => (
            <Card key={i} className="p-6 cursor-pointer hover:border-primary/50 hover:shadow-lg transition-all">
              <item.icon className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </Card>
          ))}
        </div>

        <h2 className="mb-6">Your Appointments</h2>
        <div className="space-y-4">
          {appointments.map((apt) => (
            <Card key={apt.id} className="p-6 border border-border">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold mb-2">{apt.doctor}</h3>
                  <p className="text-sm text-muted-foreground">
                    {apt.date} at {apt.time}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${apt.status === "Confirmed" ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400" : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400"}`}
                >
                  {apt.status}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
