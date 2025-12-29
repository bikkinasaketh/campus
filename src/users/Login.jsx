import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();

  const [loginRole, setLoginRole] = useState("student");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Email and Password required");
      return;
    }

    try {
      const res = await fetch("https://backend-4-6aiu.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          role: loginRole,
        }),
      });

      const data = await res.json();

      // ❌ login failed
      if (!res.ok) {
        toast.error(data.message || "Login failed");
        return;
      }

      // ✅ SAFE userId extraction (ONLY ONCE)
     // 🔥 UNIVERSAL userId extraction
const userId =
  data.user?._id ||
  data._id ||
  data.id ||
  data.userId;

if (!userId) {
  console.error("Invalid login response:", data);
  toast.error("Invalid login response");
  return;
}

// SUCCESS
toast.success("Login successful");

localStorage.setItem("userId", userId);
localStorage.setItem("token", data.token);
localStorage.setItem("role", data.role);

      setTimeout(() => {
        if (data.role === "student") {
          navigate("/student-dashboard");
        } else {
          navigate("/admin-dashboard");
        }
      }, 1000);

      return; // stop execution
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Server error. Try again later");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <ToastContainer position="top-right" autoClose={2000} />

      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        {/* Role Toggle */}
        <div className="flex gap-2 mb-4">
          <button
            type="button"
            onClick={() => setLoginRole("student")}
            className={`w-1/2 p-2 rounded ${
              loginRole === "student"
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            Student
          </button>

          <button
            type="button"
            onClick={() => setLoginRole("admin")}
            className={`w-1/2 p-2 rounded ${
              loginRole === "admin"
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            Admin
          </button>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mb-3 border rounded"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Login as {loginRole}
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
