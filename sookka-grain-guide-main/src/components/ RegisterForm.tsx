import React, { useState } from "react";

export default function RegisterPage() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState(0);

  const calculateStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (password.length >= 12) strength += 1;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 1;
    if (/\d/.test(password)) strength += 1;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 1;
    return strength;
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setPassword(val);
    setStrength(calculateStrength(val));
  };

  const getStrengthWidth = () => `${strength * 20}%`;
  const getStrengthColor = () => {
    if (strength <= 1) return "#ef4444";
    if (strength <= 3) return "#f59e0b";
    return "#10b981";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Submit Register form");
  };

  return (
    <>
      <style>{`
        * {
          margin: 0; padding: 0; box-sizing: border-box;
        }
        body, html, #root {
          height: 100%;
          font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', system-ui, sans-serif;
          background: radial-gradient(ellipse at top, #F6F5F3 0%, #FEFEFE 100%);
          color: #1f2937;
          line-height: 1.6;
          overflow-x: hidden;
        }
        .navbar {
          position: fixed; top: 0; left: 0; right: 0;
          background: rgba(246, 245, 243, 0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(142, 151, 117, 0.1);
          z-index: 1000;
          padding: 1rem 0;
        }
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.75rem;
          font-weight: 800;
          background: linear-gradient(135deg, #8E9775, #6B7353);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.025em;
          text-decoration: none;
        }
        .register-container {
          max-width: 500px;
          margin: 10rem auto 4rem;
          padding: 0 2rem;
          animation: fadeInUp 0.6s ease-out;
        }
        .register-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(142, 151, 117, 0.1);
          border-radius: 24px;
          padding: 3rem;
          box-shadow: 0 20px 60px rgba(142, 151, 117, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .register-card:hover {
          box-shadow: 0 20px 60px rgba(142, 151, 117, 0.2);
        }
        .register-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        .register-title {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #1f2937, #8E9775);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.5rem;
        }
        .register-subtitle {
          color: #6b7280;
          font-size: 1rem;
        }
        .form-group {
          margin-bottom: 1.5rem;
          position: relative;
        }
        .form-label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #1f2937;
        }
        .form-input {
          width: 100%;
          padding: 1rem;
          border: 1px solid rgba(142, 151, 117, 0.3);
          border-radius: 12px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.7);
        }
        .form-input:focus {
          outline: none;
          border-color: #8E9775;
          box-shadow: 0 0 0 3px rgba(142, 151, 117, 0.2);
        }
        .password-strength {
          margin-top: 0.5rem;
          height: 4px;
          background: #e5e7eb;
          border-radius: 2px;
          overflow: hidden;
        }
        .strength-meter {
          height: 100%;
          width: 0;
          background: #ef4444;
          transition: all 0.3s ease;
        }
        .register-btn {
          width: 100%;
          padding: 1rem;
          background: linear-gradient(135deg, #8E9775, #6B7353);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 1rem;
        }
        .register-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(142, 151, 117, 0.3);
        }
        .register-footer {
          text-align: center;
          margin-top: 2rem;
          color: #6b7280;
          font-size: 0.875rem;
        }
        .register-footer a {
          color: #8E9775;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }
        .register-footer a:hover {
          color: #6B7353;
        }
        .footer {
          background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
          color: #f9fafb;
          padding: 4rem 2rem 2rem;
          margin-top: 6rem;
          text-align: center;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 768px) {
          .register-container {
            margin: 8rem auto 3rem;
            padding: 0 1rem;
          }
          .register-card {
            padding: 2rem;
          }
          .register-title {
            font-size: 2rem;
          }
          .nav-container {
            padding: 0 1rem;
          }
        }
      `}</style>

      <nav className="flex justify-between items-center max-w-6xl mx-auto px-8 py-2">
        <a href="/" className="logo font-bold text-xl">Sookka</a>
        <div className="text-[#8E9775] font-medium hover:text-[#6B7353] transition-colors px-6 py-2 border border-[#8E9775] rounded-full whitespace-nowrap">
           <a href="/">Home</a>
        </div>
      </nav>

      <main className="register-container">
        <section className="register-card" aria-labelledby="registerTitle">
          <header className="register-header">
            <h1 className="register-title" id="registerTitle">Join Sookka</h1>
            <p className="register-subtitle">
              Create your account to unlock personalized health insights
            </p>
          </header>

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                id="username"
                className="form-input"
                placeholder="Choose a username"
                required
                autoComplete="username"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="your@email.com"
                required
                autoComplete="email"
              />
            </div>

            <div className="form-group" style={{ position: "relative" }}>
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="••••••••"
                required
                value={password}
                onChange={onPasswordChange}
                autoComplete="new-password"
              />
              <div className="password-strength">
                <div
                  className="strength-meter"
                  style={{ width: getStrengthWidth(), backgroundColor: getStrengthColor() }}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                className="form-input"
                placeholder="••••••••"
                required
                autoComplete="new-password"
              />
            </div>

            <button type="submit" className="register-btn">Create Account</button>

            <div className="register-footer">
              Already have an account? <a href="/Login">Sign in</a>
            </div>
          </form>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Sookka. Empowering healthy choices through knowledge.</p>
        </div>
      </footer>
    </>
  );
}
