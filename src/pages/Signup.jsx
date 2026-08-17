import { useState } from "react";
import { ArrowRight } from "lucide-react";
import AuthLayout from "../components/auth/AuthLayout";
import AuthInput from "../components/auth/AuthInput";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

 const handleSubmit = (event) => {
  event.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  window.location.href = "/dashboard";
};

  return (
    <AuthLayout
      title="Create Your Account"
      subtitle="Join SkillXchange and start learning from your community."
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <AuthInput
          label="Full Name"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
        />

        <AuthInput
          label="Email Address"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
        />

        <AuthInput
          label="Password"
          name="password"
          type="password"
          placeholder="Create a password"
          value={formData.password}
          onChange={handleChange}
        />

        <AuthInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        {/* Terms */}
        <label className="flex cursor-pointer items-start gap-3 text-xs leading-5 text-slate-400">
          <input
            type="checkbox"
            required
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/20 bg-white/5 accent-violet-600"
          />

          <span>
            I agree to the{" "}
            <button
              type="button"
              className="font-medium text-violet-400 hover:text-violet-300"
            >
              Terms of Service
            </button>{" "}
            and{" "}
            <button
              type="button"
              className="font-medium text-violet-400 hover:text-violet-300"
            >
              Privacy Policy
            </button>
            .
          </span>
        </label>

        {/* Signup */}
        <button
          type="submit"
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-5 py-3.5 font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:-translate-y-0.5 hover:shadow-violet-600/30"
        >
          Create Account

          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
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

        {/* Login */}
        <p className="pt-2 text-center text-sm text-slate-400">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-semibold text-violet-400 transition hover:text-violet-300"
          >
            Login
          </a>
        </p>
      </form>
    </AuthLayout>
  );
}

export default Signup;