"use client";

export default function RegisterPage() {
  return (
    <div className="section center">
      <div className="card">
        <h2>Register</h2>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Password" type="password" />
        <select>
          <option>Patient</option>
          <option>Doctor</option>
        </select>
        <button>Register</button>
      </div>
    </div>
  );
}
