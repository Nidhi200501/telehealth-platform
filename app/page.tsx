"use client"

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Video, Pill, BookOpen, Zap, Lock, Stethoscope } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4">
        <div className="absolute inset-0 gradient-primary opacity-10 blur-3xl -z-10"></div>
        <div className="max-w-6xl mx-auto text-center slide-up">
          <h1 className="mb-6">Quality Healthcare at Your Fingertips</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect with licensed doctors, get prescriptions, and manage your health all in one secure platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white border-0">
              Book Consultation
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: "10K+", desc: "Licensed Doctors" },
              { label: "50K+", desc: "Consultations" },
              { label: "24/7", desc: "Support" },
              { label: "99.9%", desc: "Uptime" },
            ].map((stat, i) => (
              <div key={i} className="text-center slide-up py-6" style={{ animationDelay: `${i * 100}ms` }}>
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.label}</p>
                <p className="text-sm md:text-base text-muted-foreground">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-16">Core Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Video, title: "Video Consultation", desc: "Talk to doctors via secure video calls" },
              { icon: Pill, title: "Digital Prescriptions", desc: "Get prescriptions instantly, send to pharmacy" },
              { icon: BookOpen, title: "Medical Records", desc: "Keep all your health history organized" },
              { icon: Stethoscope, title: "Easy Booking", desc: "Schedule appointments in seconds" },
              { icon: Zap, title: "AI Symptom Checker", desc: "Get instant symptom analysis" },
              { icon: Lock, title: "Secure Platform", desc: "HIPAA compliant & encrypted" },
            ].map((feature, i) => (
              <Card
                key={i}
                className="p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 slide-up"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6 relative">
            {[
              { step: "1", title: "Register", desc: "Create your account in 2 minutes" },
              { step: "2", title: "Find Doctor", desc: "Browse our network of doctors" },
              { step: "3", title: "Book Appointment", desc: "Choose time that works for you" },
              { step: "4", title: "Consult Online", desc: "Get quality healthcare at home" },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
                {i < 3 && <div className="hidden md:block absolute top-1/3 -right-3 w-6 h-0.5 gradient-primary"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-16">AI-Powered Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Symptom Checker",
                desc: "Describe your symptoms and get instant analysis powered by advanced AI",
              },
              { title: "Doctor AI Assistant", desc: "Get AI-assisted recommendations before talking to a doctor" },
              { title: "Smart Health Alerts", desc: "Receive personalized health tips and medication reminders" },
            ].map((item, i) => (
              <Card key={i} className="glass p-8 text-center slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center text-white mx-auto mb-4">
                  <Zap size={24} />
                </div>
                <h3 className="mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-16">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Shubham Patel",
                role: "Patient",
                text: "TeleHealth made it so easy to get a consultation without leaving my home!",
              },
              {
                name: "Dr. Maya Singh",
                role: "Doctor",
                text: "The platform is intuitive and secure. My patients love it.",
              },
              { name: "Pratham Singh", role: "Patient", text: "Excellent service and support. Highly recommended!" },
            ].map((testimonial, i) => (
              <Card key={i} className="p-6 border border-border slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Heart key={j} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">{testimonial.text}</p>
                <p className="font-semibold text-sm">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-20 blur-3xl -z-10"></div>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6">Ready to Transform Your Healthcare?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of patients already using TeleHealth for better health outcomes.
          </p>
          <Button size="lg" className="gradient-primary text-white border-0">
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="font-bold text-lg mb-2">TeleHealth</p>
              <p className="text-sm text-muted-foreground">Healthcare Made Simple</p>
            </div>
            {[
              { title: "Product", links: ["Features", "Pricing", "Security"] },
              { title: "Company", links: ["About", "Blog", "Careers"] },
              { title: "Resources", links: ["Docs", "Help", "Contact"] },
            ].map((col, i) => (
              <div key={i}>
                <p className="font-semibold mb-3 text-sm">{col.title}</p>
                <ul className="space-y-2">
                  {col.links.map((link, j) => (
                    <li key={j} className="text-sm text-muted-foreground hover:text-primary transition cursor-pointer">
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </main>
  )
}
