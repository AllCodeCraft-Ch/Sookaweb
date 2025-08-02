import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const styles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
    position: fixed;
    top: 0; left: 0; right: 0;
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

  .login-container {
    max-width: 500px;
    margin: 10rem auto 4rem;
    padding: 0 2rem;
    animation: fadeInUp 0.6s ease-out;
  }

  .login-card {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(142, 151, 117, 0.1);
    border-radius: 24px;
    padding: 3rem;
    box-shadow: 0 20px 60px rgba(142, 151, 117, 0.1);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .login-card:hover {
    box-shadow: 0 20px 60px rgba(142, 151, 117, 0.2);
  }

  .login-header {
    text-align: center;
    margin-bottom: 2.5rem;
  }

  .login-title {
    font-size: 2.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, #1f2937, #8E9775);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0.5rem;
  }

  .login-subtitle {
    color: #6b7280;
    font-size: 1rem;
  }

  .form-group {
    margin-bottom: 1.5rem;
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

  .login-btn {
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

  .login-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(142, 151, 117, 0.3);
  }

  .login-footer {
    text-align: center;
    margin-top: 2rem;
    color: #6b7280;
    font-size: 0.875rem;
  }

  .login-footer a {
    color: #8E9775;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
  }

  .login-footer a:hover {
    color: #6B7353;
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
    .login-container {
      margin: 8rem auto 3rem;
      padding: 0 1rem;
    }

    .login-card {
      padding: 2rem;
    }

    .login-title {
      font-size: 2rem;
    }

    .nav-container {
      padding: 0 1rem;
    }
  }

  .footer {
    background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
    color: #f9fafb;
    padding: 4rem 2rem 2rem;
    margin-top: 6rem;
    text-align: center;
  }
`;



export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // ✅ redirect ถ้ามี token
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && token !== "") {
      navigate("/");
    }
  }, [navigate]);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5602/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usernoun: username,
          password: password,
        }),
      });

      if (!response.ok) throw new Error("Login failed");

      const data = await response.json();
      localStorage.setItem("token", data.token);
      // console.log(data)
      navigate("/");
    } catch (error) {
      alert("Login failed: " + (error as Error).message);
    }
  };

  return (
    <>
      <style>{styles}</style>

      <nav className="flex justify-between items-center max-w-6xl mx-auto px-8 py-2">
        <a href="/" className="logo font-bold text-xl">Sookka</a>
        <div className="text-[#8E9775] font-medium hover:text-[#6B7353] transition-colors px-6 py-2 border border-[#8E9775] rounded-full whitespace-nowrap">
          <a href="/">Home</a>
        </div>
      </nav>

      <main className="login-container">
        <section className="login-card" aria-labelledby="loginTitle">
          <header className="login-header">
            <h1 className="login-title" id="loginTitle">Welcome</h1>
            <p className="login-subtitle">
              Sign in to access your personalized health dashboard
            </p>
          </header>

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="your@email.com"
                required
                autoComplete="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="••••••••"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="login-btn">Sign In</button>

            <div className="login-footer" style={{ marginTop: "1rem" }}>
              <a href="#forgot-password">Forgot password?</a>
            </div>

            <div className="login-footer">
              Don't have an account? <Link to="/RegisterForm">Sign up</Link>
            </div>
          </form>
        </section>
      </main>

      <footer className="footer" role="contentinfo">
        <p>&copy; 2025 Sookka. Empowering healthy choices through knowledge.</p>
      </footer>
    </>
  );
}

