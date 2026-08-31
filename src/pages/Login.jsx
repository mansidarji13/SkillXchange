import { useState } from "react";
import { ArrowRight } from "lucide-react";
import AuthLayout from "../components/auth/AuthLayout";
import AuthInput from "../components/auth/AuthInput";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    // Clear error when user starts typing again
    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:5000/api/auth/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Invalid email or password.");
        return;
      }

      // Store JWT token
      localStorage.setItem("access_token", data.access_token);

      // Store logged-in user information
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      // Redirect to dashboard
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Login error:", error);

      setError(
        "Unable to connect to the server. Please make sure the Flask backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Log in to continue your SkillXchange journey."
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <AuthInput
          label="Email Address"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
        />

        <div>
          <div className="mb-2 flex items-center justify-between">
            <label
              htmlFor="password"
              className="text-sm font-medium text-slate-200"
            >
              Password
            </label>

            <button
              type="button"
              className="text-xs font-medium text-violet-400 transition hover:text-violet-300"
            >
              Forgot Password?
            </button>
          </div>

          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-violet-500/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-violet-500/10"
          />
        </div>

        {/* Error Message */}
        {error && (
          <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        {/* Remember me */}
        <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-400">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-white/20 bg-white/5 accent-violet-600"
          />

          Remember me
        </label>

        {/* Login */}
        <button
          type="submit"
          disabled={loading}
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-5 py-3.5 font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:-translate-y-0.5 hover:shadow-violet-600/30 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Login"}

          {!loading && (
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          )}
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4 py-2">
          <div className="h-px flex-1 bg-white/10" />

          <span className="text-xs text-slate-500">
            OR
          </span>

          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* GitHub */}
        <button
          type="button"
          className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          <span className="text-base font-bold">GH</span>

          Continue with GitHub
        </button>

        {/* Signup */}
        <p className="pt-2 text-center text-sm text-slate-400">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="font-semibold text-violet-400 transition hover:text-violet-300"
          >
            Sign Up
          </a>
        </p>
      </form>
    </AuthLayout>
  );
}

export default Login;