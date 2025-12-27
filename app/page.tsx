"use client";

export default function LandingPage() {
  return (
    <>
      <section className="section">
        <div className="center">
          <h1>Quality Healthcare at Your Fingertips</h1>
          <p>Video consultations, AI-powered assistance, digital prescriptions</p>
          <button onClick={() => location.href = "/login"}>
            Book Consultation Now
          </button>
        </div>
      </section>

      <section className="section">
        <div className="center grid">
          <div className="card">10K+ Doctors</div>
          <div className="card">50K+ Consultations</div>
          <div className="card">24/7 Support</div>
          <div className="card">99.9% Uptime</div>
        </div>
      </section>

      <section className="section">
        <div className="center grid">
          <div className="card">Video Consultations</div>
          <div className="card">Digital Prescriptions</div>
          <div className="card">Medical Records</div>
          <div className="card">Easy Booking</div>
          <div className="card">AI Symptom Checker</div>
          <div className="card">Secure Platform</div>
        </div>
      </section>

      <section className="section">
        <div className="center">
          <ol>
            <li>Register</li>
            <li>Find Doctor</li>
            <li>Book Appointment</li>
            <li>Consult Online</li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="center grid">
          <div className="card">“Very easy to use” – Patient</div>
          <div className="card">“Helps manage patients” – Doctor</div>
        </div>
      </section>

      <section className="section">
        <div className="center">
          <h2>Ready to Transform Your Healthcare?</h2>
          <button onClick={() => location.href = "/register"}>
            Get Started Today
          </button>
        </div>
      </section>
    </>
  );
}

