import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    accountType: "student",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    id: "",
    department: "",
    password: "",
    confirmPassword: "",
    agreedToTerms: false,
  });

  // handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // switch student / admin
  const handleAccountTypeChange = (type) => {
    setFormData({
      ...formData,
      accountType: type,
      id: "",
      department: "",
    });
  };

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // validations
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.id ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (!formData.agreedToTerms) {
      toast.error("Please accept Terms & Conditions");
      return;
    }

    try {
      const res = await fetch("https://backend-4-6aiu.onrender.com/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          accountType: formData.accountType,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          id: formData.id,
          department:
            formData.accountType === "student"
              ? formData.department
              : "",
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Signup failed");
        return;
      }

      toast.success(data.message || "Account created successfully");

      // reset form
      setFormData({
        accountType: formData.accountType,
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        id: "",
        department: "",
        password: "",
        confirmPassword: "",
        agreedToTerms: false,
      });
    } catch (error) {
      toast.error("Server error. Try again later");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <ToastContainer />

      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

        {/* Account Type */}
        <div className="flex mb-4">
          <button
            type="button"
            onClick={() => handleAccountTypeChange("student")}
            className={`flex-1 p-2 ${
              formData.accountType === "student"
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            Student
          </button>
          <button
            type="button"
            onClick={() => handleAccountTypeChange("admin")}
            className={`flex-1 p-2 ${
              formData.accountType === "admin"
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            Admin
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <input
            type="text"
            name="id"
            placeholder={
              formData.accountType === "student"
                ? "Student ID"
                : "Admin ID"
            }
            value={formData.id}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          {formData.accountType === "student" && (
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select Department</option>
              <option value="engineering">Engineering</option>
              <option value="science">Science</option>
              <option value="business">Business</option>
            </select>
          )}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <label className="flex items-center text-sm">
            <input
              type="checkbox"
              name="agreedToTerms"
              checked={formData.agreedToTerms}
              onChange={handleChange}
              className="mr-2"
            />
            I agree to Terms & Conditions
          </label>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Create {formData.accountType} Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
