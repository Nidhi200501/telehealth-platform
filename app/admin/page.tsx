"use client"

import { Navbar } from "@/components/navbar"
import { Card } from "@/components/ui/card"
import { Users, CheckCircle, Calendar, TrendingUp } from "lucide-react"

export default function AdminDashboard() {
  const stats = [
    { icon: Users, label: "Total Users", value: "2,543", trend: "+12% this month" },
    { icon: CheckCircle, label: "Doctors Verified", value: "384", trend: "+8 this week" },
    { icon: Calendar, label: "Appointments Today", value: "127", trend: "+23% vs yesterday" },
    { icon: TrendingUp, label: "Platform Revenue", value: "$45.2K", trend: "+18% this month" },
  ]

  return (
    <main className="min-h-screen pt-16 bg-muted/30">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground mb-12">Platform analytics and management</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <Card key={i} className="p-6 border border-border slide-up" style={{ animationDelay: `${i * 50}ms` }}>
              <stat.icon className="w-8 h-8 text-primary mb-3" />
              <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
              <p className="text-2xl font-bold mb-2">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.trend}</p>
            </Card>
          ))}
        </div>

        <h2 className="mt-16 mb-6">Recent Activity</h2>
        <Card className="p-6 border border-border">
          <div className="space-y-4">
            {[
              { action: "New user registration", details: "Sarah Johnson", time: "2 minutes ago" },
              { action: "Doctor verification", details: "Dr. Michael Chen", time: "15 minutes ago" },
              { action: "Appointment completed", details: "John Doe → Dr. Miller", time: "1 hour ago" },
              { action: "Prescription issued", details: "To Emma Wilson", time: "2 hours ago" },
            ].map((activity, i) => (
              <div key={i} className="flex justify-between items-start pb-4 border-b border-border last:border-b-0">
                <div>
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">{activity.details}</p>
                </div>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </main>
  )
}
