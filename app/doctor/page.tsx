"use client"

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Clock, Users } from "lucide-react"
import { useState } from "react"

export default function DoctorDashboard() {
  const [prescription, setPrescription] = useState("")

  const appointments = [
    { id: 1, patient: "John Doe", time: "2:00 PM", status: "In Progress" },
    { id: 2, patient: "Emma Wilson", time: "3:30 PM", status: "Upcoming" },
    { id: 3, patient: "Michael Chen", time: "4:00 PM", status: "Upcoming" },
  ]

  return (
    <main className="min-h-screen pt-16 bg-muted/30">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="mb-2">Welcome, Dr. Miller</h1>
        <p className="text-muted-foreground mb-12">Manage your patients and consultations</p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="p-6">
            <Clock className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold mb-1">Today's Appointments</h3>
            <p className="text-2xl font-bold">{appointments.length}</p>
          </Card>
          <Card className="p-6">
            <Users className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold mb-1">Active Patients</h3>
            <p className="text-2xl font-bold">24</p>
          </Card>
        </div>

        <h2 className="mb-6">Today's Schedule</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {appointments.map((apt) => (
              <Card key={apt.id} className="p-4 border border-border">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{apt.patient}</h3>
                    <p className="text-sm text-muted-foreground">{apt.time}</p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${apt.status === "In Progress" ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400" : "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"}`}
                  >
                    {apt.status}
                  </span>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-6 border border-border">
            <h3 className="font-semibold mb-4">Write Prescription</h3>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Medicine name"
                className="w-full px-3 py-2 rounded-lg border border-input bg-card"
              />
              <input
                type="text"
                placeholder="Dosage"
                className="w-full px-3 py-2 rounded-lg border border-input bg-card"
              />
              <textarea
                placeholder="Instructions..."
                value={prescription}
                onChange={(e) => setPrescription(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-input bg-card h-24 resize-none"
              />
              <Button className="w-full gradient-primary text-white border-0">Save Prescription</Button>
            </div>
          </Card>
        </div>
      </div>
    </main>
  )
}
