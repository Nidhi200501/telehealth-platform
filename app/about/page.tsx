'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  const [expandedDoctor, setExpandedDoctor] = useState<string | null>(null);

  const doctors = [
    {
      id: 1,
      name: 'Dr. Priya Sharma',
      specialty: 'Cardiologist',
      qualifications: ['MD (Cardiology)', 'Fellowship in Interventional Cardiology', '15+ years experience'],
      certified: true,
    },
    {
      id: 2,
      name: 'Dr. Anjali Verma',
      specialty: 'General Physician',
      qualifications: ['MBBS', 'MD (General Medicine)', '10+ years experience'],
      certified: true,
    },
    {
      id: 3,
      name: 'Dr. Neha Gupta',
      specialty: 'Pediatrician',
      qualifications: ['MBBS', 'MD (Pediatrics)', 'Diploma in Child Health', '12+ years experience'],
      certified: true,
    },
    {
      id: 4,
      name: 'Dr. Deepa Menon',
      specialty: 'Dermatologist',
      qualifications: ['MBBS', 'MD (Dermatology)', 'Board Certified', '8+ years experience'],
      certified: true,
    },
  ];

  const services = [
    {
      icon: '💬',
      title: 'Virtual Consultations',
      description: 'Connect with certified doctors via video call from the comfort of your home',
    },
    {
      icon: '📋',
      title: 'E-Prescriptions',
      description: 'Digital prescriptions delivered instantly to your registered email',
    },
    {
      icon: '👨‍👩‍👧',
      title: 'Parental Guidance',
      description: 'Expert advice for parents on child health, nutrition, and development',
    },
    {
      icon: '🔒',
      title: 'Secure Records',
      description: 'Your medical records encrypted and securely stored with HIPAA compliance',
    },
    {
      icon: '📱',
      title: 'Health Tracking',
      description: 'Monitor your health metrics and track progress over time',
    },
    {
      icon: '🤖',
      title: 'AI Assistance',
      description: 'Intelligent symptom analysis and preliminary health insights',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-purple-500 to-rose-500 bg-clip-text text-transparent">
              TeleHealth
            </span>
          </Link>
          <Link href="/" className="text-slate-600 dark:text-slate-300 hover:text-purple-600 transition">
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-purple-500 to-rose-500 bg-clip-text text-transparent">
              About TeleHealth
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Revolutionizing healthcare through technology, accessibility, and patient-centric care
            </p>
          </div>
        </div>
      </section>

      {/* Platform Introduction */}
      <section id="introduction" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-600 to-rose-500 bg-clip-text text-transparent">
            Our Platform
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                TeleHealth is a modern healthcare platform that bridges the gap between patients and qualified medical professionals. We leverage cutting-edge technology to make quality healthcare accessible, affordable, and convenient for everyone.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                Our platform enables seamless virtual consultations, instant digital prescriptions, and comprehensive health guidance—all from the comfort of your home. Whether you need a quick consultation or ongoing health management, TeleHealth is your trusted healthcare partner.
              </p>
            </div>
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up">
  <Image
    src="/telehealth-platform-overview.jpg"
    alt="TeleHealth Platform Overview"
    fill
    priority
    className="object-cover object-center"
  />
</div>

          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 dark:from-purple-500/20 dark:to-purple-500/10 rounded-2xl p-8 border border-purple-200 dark:border-purple-800 animate-fade-in-up">
              <h3 className="text-2xl font-bold mb-4 text-purple-600">Our Mission</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                To democratize healthcare by providing accessible, affordable, and high-quality medical consultations to everyone, regardless of their location or circumstances. We are committed to empowering patients with knowledge and providing certified medical professionals with efficient tools to deliver exceptional care.
              </p>
            </div>
            <div className="bg-gradient-to-br from-rose-500/10 to-rose-500/5 dark:from-rose-500/20 dark:to-rose-500/10 rounded-2xl p-8 border border-rose-200 dark:border-rose-800 animate-fade-in-up">
              <h3 className="text-2xl font-bold mb-4 text-rose-600">Our Vision</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                To create a world where quality healthcare is just a click away. We envision a future where geographical boundaries and healthcare accessibility are no longer barriers to receiving professional medical advice and treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-600 to-rose-500 bg-clip-text text-transparent">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-50 dark:bg-slate-700 rounded-2xl p-8 border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E-Prescription Section */}
      <section id="eprescription" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-600 to-rose-500 bg-clip-text text-transparent">
            E-Prescription System
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-lg">
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 text-center">
              Our secure e-prescription system ensures you receive digital prescriptions instantly. Below is an example of our prescription template:
            </p>
            <div className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-xl border-4 border-slate-300 dark:border-slate-600 bg-white">
  <Image
    src="/prescription-template-x.png"
    alt="E-Prescription Template"
    width={900}
    height={1200}
    className="w-full h-auto object-top"
    priority
  />
</div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-6 text-center">
              All prescriptions are digitally signed, encrypted, and can be directly sent to your pharmacy partners.
            </p>
          </div>
        </div>
      </section>

      {/* Our Doctors */}
      <section id="doctors" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-purple-600 to-rose-500 bg-clip-text text-transparent">
            Our Certified Specialists
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
            All our doctors are certified, licensed medical professionals with extensive experience in their respective specialties
          </p>
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl mb-12">
  <Image
    src="/certified-doctors-specialists.jpg"
    alt="Certified Doctors"
    fill
    className="object-cover object-top"
    priority
  />
</div>

          <div className="grid md:grid-cols-2 gap-8">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-slate-50 dark:bg-slate-700 rounded-2xl p-6 border border-slate-200 dark:border-slate-600 cursor-pointer hover:shadow-lg transition-all"
                onClick={() =>
                  setExpandedDoctor(expandedDoctor === doctor.id ? null : doctor.id)
                }
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                      {doctor.name}
                    </h3>
                    <p className="text-purple-600 dark:text-purple-400 font-semibold mb-3">
                      {doctor.specialty}
                    </p>
                  </div>
                  {doctor.certified && (
                    <span className="bg-green-500/20 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-semibold">
                      ✓ Certified
                    </span>
                  )}
                </div>
                {expandedDoctor === doctor.id && (
                  <div className="mt-4 pt-4 border-t border-slate-300 dark:border-slate-600 animate-fade-in">
                    <p className="font-semibold text-slate-900 dark:text-white mb-2">
                      Qualifications:
                    </p>
                    <ul className="space-y-2">
                      {doctor.qualifications.map((qual, idx) => (
                        <li
                          key={idx}
                          className="text-slate-600 dark:text-slate-300 flex items-center gap-2"
                        >
                          <span className="text-purple-600">▸</span>
                          {qual}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parental Guidance Consultation */}
      <section id="parental-guidance" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-600 to-rose-500 bg-clip-text text-transparent">
            Parental Guidance & Consultation Policy
          </h2>
          <div className="bg-gradient-to-r from-purple-500/10 to-rose-500/10 dark:from-purple-500/20 dark:to-rose-500/20 rounded-2xl p-10 border border-purple-200 dark:border-purple-800">
            <div className="space-y-6">
              <div className="animate-fade-in-up">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  What is Parental Guidance Consultation?
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Our parental guidance consultation service provides expert medical and developmental advice for parents and guardians. Our specialized pediatricians and child health experts offer guidance on child nutrition, developmental milestones, behavioral concerns, and health maintenance.
                </p>
              </div>
              <div className="animate-fade-in-up">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  Our Policy
                </h3>
                <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Consultations are conducted by certified pediatricians and child specialists</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>All advice is based on latest medical guidelines and best practices</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Sessions are confidential and HIPAA-compliant</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>We provide education and support, not diagnoses</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>For emergencies, parents are always advised to seek immediate medical care</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy and Safety */}
      <section id="privacy" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-600 to-rose-500 bg-clip-text text-transparent">
            Privacy & Security
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6 border-l-4 border-purple-600">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  HIPAA Compliance
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  All medical records and personal health information are encrypted and stored in accordance with HIPAA regulations.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6 border-l-4 border-rose-600">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  Data Protection
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  We use end-to-end encryption for all communications and implement industry-standard security protocols.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6 border-l-4 border-purple-600">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  User Control
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  You have complete control over your medical data and can request access, modification, or deletion anytime.
                </p>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up">
              <Image
                src="/privacy-security-healthcare.jpg"
                alt="Privacy and Security"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-400 dark:border-red-800 rounded-2xl p-10">
            <h2 className="text-2xl font-bold text-red-700 dark:text-red-400 mb-6">
              ⚠️ Important Medical Disclaimer
            </h2>
            <div className="text-slate-700 dark:text-slate-300 space-y-4 leading-relaxed">
              <p>
                <strong>The information provided by this AI system is intended for informational and guidance purposes only and does not constitute medical advice, diagnosis, or treatment.</strong>
              </p>
              <p>
                This tool does not replace consultation with a licensed healthcare professional. Users should seek professional medical advice for any health-related concerns.
              </p>
              <p>
                <strong>In case of a medical emergency, contact local emergency services immediately.</strong>
              </p>
              <p>
                TeleHealth and its AI assistant are tools to facilitate patient-doctor communication and provide preliminary guidance. All final diagnoses, treatment plans, and prescriptions must be reviewed and approved by a certified medical professional.
              </p>
              <p>
                By using TeleHealth, you acknowledge that you understand and agree with this disclaimer. If you do not agree, please refrain from using our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400 mb-4">
            © 2025 TeleHealth. All rights reserved. | Committed to Your Health & Privacy
          </p>
        </div>
      </footer>
    </div>
  );
}