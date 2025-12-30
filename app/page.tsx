"use client"

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Heart,
  Video,
  Pill,
  BookOpen,
  Zap,
  Lock,
  Stethoscope,
  CheckCircle2,
  Users,
  Clock,
  Shield,
  ArrowRight,
} from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-20 px-4 md:pt-32 md:pb-24">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/15 blur-3xl -z-10 rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/20 blur-3xl -z-10 rounded-full"></div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-up">
              <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
                <p className="text-sm font-semibold text-primary">Trusted by Healthcare Professionals</p>
              </div>
              <h1 className="mb-6 leading-tight">
                Healthcare at Your <span className="gradient-primary bg-clip-text text-transparent">Fingertips</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
                Connect with world-class female doctors, get expert prescriptions, and manage your health with precision
                in one secure, professional platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  size="lg"
                  className="gradient-primary text-white border-0 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 group"
                >
                  Book Consultation
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="hover:border-primary hover:bg-primary/5 transition-all duration-300 bg-transparent"
                >
                  Explore Platform
                </Button>
              </div>
              <div className="flex items-center gap-8">
                <div className="lift-hover rounded-lg p-3">
                  <p className="text-2xl font-bold text-primary">10K+</p>
                  <p className="text-sm text-muted-foreground">Female Doctors</p>
                </div>
                <div className="lift-hover rounded-lg p-3">
                  <p className="text-2xl font-bold text-primary">50K+</p>
                  <p className="text-sm text-muted-foreground">Consultations</p>
                </div>
                <div className="lift-hover rounded-lg p-3">
                  <p className="text-2xl font-bold text-primary">99.9%</p>
                  <p className="text-sm text-muted-foreground">Uptime</p>
                </div>
              </div>
            </div>

            {/* Hero Image with Premium Female Doctor */}
            <div className="slide-up-delay-1 relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-primary/20">
                <img
                  src="/professional-female-doctor-healthcare-consultation.jpg"
                  alt="Female doctor consultation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 rounded-3xl border-2 border-white/10 dark:border-white/20"></div>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 gradient-primary rounded-full opacity-20 blur-3xl -z-10"></div>
              <div className="absolute top-10 -left-10 w-32 h-32 bg-secondary/15 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-primary/5 to-secondary/5 border-y border-primary/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Users, label: "10K+", desc: "Female Doctors" },
              { icon: Heart, label: "50K+", desc: "Happy Patients" },
              { icon: Clock, label: "24/7", desc: "Expert Support" },
              { icon: Shield, label: "99.9%", desc: "Uptime Guaranteed" },
            ].map((stat, i) => (
              <div key={i} className="scale-in lift-hover p-6 rounded-xl" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-foreground mb-1 text-center">{stat.label}</p>
                <p className="text-xs md:text-sm text-muted-foreground font-medium text-center">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 scroll-mt-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 blur-3xl -z-10 rounded-full opacity-50"></div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 slide-up">
            <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-sm font-semibold text-primary mb-4 border border-primary/20">
              Core Features
            </span>
            <h2 className="mb-4">Comprehensive Healthcare Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need for seamless healthcare management with world-class female healthcare professionals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Video,
                title: "HD Video Consultation",
                desc: "Crystal clear video calls with licensed female healthcare professionals in your area",
                color: "from-primary/20 to-primary/5",
              },
              {
                icon: Pill,
                title: "Digital Prescriptions",
                desc: "Instant e-prescriptions sent directly to your trusted pharmacy partners",
                color: "from-secondary/20 to-secondary/5",
              },
              {
                icon: BookOpen,
                title: "Medical Records",
                desc: "Secure access to complete health history with encryption and privacy controls",
                color: "from-accent/20 to-accent/5",
              },
              {
                icon: Stethoscope,
                title: "Easy Booking",
                desc: "Schedule appointments with female specialists with just a few clicks",
                color: "from-primary/20 to-primary/5",
              },
              {
                icon: Zap,
                title: "AI Symptom Checker",
                desc: "Advanced AI analysis provides intelligent guidance before doctor consultation",
                color: "from-secondary/20 to-secondary/5",
              },
              {
                icon: Lock,
                title: "HIPAA Compliant",
                desc: "Military-grade encryption ensures your data stays private and secure",
                color: "from-accent/20 to-accent/5",
              },
            ].map((feature, i) => (
              <Card
                key={i}
                className={`p-8 border border-primary/10 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 group slide-up lift-hover bg-gradient-to-br ${feature.color} backdrop-blur-sm`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/30">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="mb-3 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="py-24 px-4 bg-gradient-to-b from-secondary/5 to-transparent scroll-mt-20 relative overflow-hidden"
      >
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 blur-3xl -z-10 rounded-full opacity-50"></div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 slide-up">
            <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-sm font-semibold text-primary mb-4 border border-primary/20">
              Process
            </span>
            <h2 className="mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, secure, and straightforward process to connect with healthcare experts
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {[
              {
                step: "01",
                title: "Create Account",
                desc: "Sign up in 2 minutes with secure authentication and verification",
              },
              { step: "02", title: "Find Your Doctor", desc: "Browse and select from verified female specialists" },
              { step: "03", title: "Book Appointment", desc: "Choose your preferred time slot and consultation type" },
              {
                step: "04",
                title: "Get Consultation",
                desc: "Receive expert healthcare from the comfort of your home",
              },
            ].map((item, i) => (
              <div key={i} className="relative slide-up lift-hover" style={{ animationDelay: `${i * 100}ms` }}>
                <Card className="p-8 text-center border-primary/20 bg-gradient-to-br from-white/50 dark:from-primary/5 to-primary/0 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6 shadow-lg shadow-primary/40">
                    {item.step}
                  </div>
                  <h3 className="mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </Card>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/3 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary via-secondary to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section id="ai-features" className="py-24 px-4 scroll-mt-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 blur-3xl -z-10 rounded-full opacity-50"></div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 slide-up">
            <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-sm font-semibold text-primary mb-4 border border-primary/20">
              Innovation
            </span>
            <h2 className="mb-4">AI-Powered Healthcare Intelligence</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced AI technology enhancing your healthcare experience with smart insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="slide-up-delay-1 relative group">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 h-96">
                <img
                  src="/female-doctor-ai-medical-analysis-healthcare-techn.jpg"
                  alt="AI healthcare analysis"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 rounded-3xl border-2 border-white/10 dark:border-white/20"></div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 gradient-primary rounded-full opacity-20 blur-3xl -z-10"></div>
            </div>

            <div className="space-y-6 slide-up-delay-2">
              <div className="space-y-3">
                <div className="flex gap-3 items-start lift-hover p-4 rounded-xl hover:bg-primary/5 transition-all">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="mb-1 font-semibold">Smart Symptom Analysis</h3>
                    <p className="text-muted-foreground text-sm">
                      AI-powered analysis provides instant preliminary guidance before specialist consultation
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start lift-hover p-4 rounded-xl hover:bg-primary/5 transition-all">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="mb-1 font-semibold">Doctor Recommendations</h3>
                    <p className="text-muted-foreground text-sm">
                      Intelligent matching with female specialists based on your unique health profile
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start lift-hover p-4 rounded-xl hover:bg-primary/5 transition-all">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="mb-1 font-semibold">Smart Health Alerts</h3>
                    <p className="text-muted-foreground text-sm">
                      Personalized notifications and medication reminders at optimal times
                    </p>
                  </div>
                </div>
              </div>
              <Button
                size="lg"
                className="gradient-primary text-white border-0 w-full sm:w-auto group hover:shadow-lg hover:shadow-primary/50"
              >
                Explore AI Features
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Smart Symptom Checker",
                desc: "Advanced AI analyzes your symptoms and provides initial guidance before specialist consultation",
                icon: Zap,
              },
              {
                title: "Personalized Health Insights",
                desc: "Intelligent recommendations based on medical history and health patterns",
                icon: CheckCircle2,
              },
              {
                title: "Medicine AI Assistant",
                desc: "Smart drug interaction checker and comprehensive medication management",
                icon: Pill,
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="p-8 glass border border-primary/20 hover:border-primary/50 transition-all duration-300 scale-in lift-hover bg-gradient-to-br from-white/50 dark:from-primary/10 to-primary/0 backdrop-blur-sm"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-white mb-4 shadow-lg shadow-primary/30">
                  <item.icon size={24} />
                </div>
                <h3 className="mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="py-24 px-4 bg-gradient-to-b from-secondary/5 to-transparent relative overflow-hidden"
      >
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 blur-3xl -z-10 rounded-full opacity-50"></div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 slide-up">
            <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-sm font-semibold text-primary mb-4 border border-primary/20">
              Testimonials
            </span>
            <h2 className="mb-4">Trusted by Thousands</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See what our users say about their healthcare experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "Patient",
                text: "The platform is incredible. I got expert care from a female specialist without leaving home. Highly recommended!",
                initials: "PS",
              },
              {
                name: "Dr. Neha Gupta",
                role: "Cardiologist",
                text: "Intuitive platform with excellent security. My patients appreciate the convenience and I can focus entirely on their care.",
                initials: "NG",
              },
              {
                name: "Anjali Verma",
                role: "Patient",
                text: "Professional doctors, outstanding support, and seamless experience. This is the future of healthcare!",
                initials: "AV",
              },
            ].map((testimonial, i) => (
              <Card
                key={i}
                className="p-8 border-primary/20 hover:border-primary/50 transition-all duration-300 slide-up lift-hover bg-gradient-to-br from-white/50 dark:from-primary/5 to-primary/0 backdrop-blur-sm"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Heart key={j} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-semibold shadow-lg shadow-primary/30">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-10 blur-3xl -z-10"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/15 blur-3xl -z-10 rounded-full"></div>

        <div className="max-w-3xl mx-auto text-center slide-up">
          <h2 className="mb-6">Ready to Transform Your Healthcare?</h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Join thousands of patients receiving expert care from world-class female healthcare professionals on our
            secure platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="gradient-primary text-white border-0 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 group"
            >
              Get Started Today
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="hover:border-primary hover:bg-primary/5 transition-all duration-300 bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-primary/10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center shadow-lg shadow-primary/40">
                  <Heart size={18} className="text-white" />
                </div>
                <p className="font-bold text-lg">TeleHealth</p>
              </div>
              <p className="text-sm text-muted-foreground">Healthcare excellence, delivered professionally.</p>
            </div>
            {[
              { title: "Product", links: ["Features", "Pricing", "Security"] },
              { title: "Company", links: ["About", "Blog", "Careers"] },
              { title: "Resources", links: ["Documentation", "Support", "Contact"] },
            ].map((col, i) => (
              <div key={i}>
                <p className="font-semibold mb-4 text-sm">{col.title}</p>
                <ul className="space-y-3">
                  {col.links.map((link, j) => (
                    <li
                      key={j}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-primary/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2025 TeleHealth. All rights reserved.</p>
            <div className="flex gap-6">
              {["Twitter", "LinkedIn", "Facebook"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
