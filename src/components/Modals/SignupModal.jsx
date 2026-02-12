import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const SignupModal = ({ onBack, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
    address: "",
    profession: "",
    institution: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10,15}$/;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    if (!formData.number.trim()) {
      newErrors.number = "Mobile number is required";
    } else if (!mobileRegex.test(formData.number)) {
      newErrors.number = "Please enter a valid mobile number";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    const payload = {
      user_name: formData.name,
      user_email: formData.email,
      user_password: formData.password,
      user_number: formData.number,
      user_address: formData.address,
      user_profession: formData.profession,
      user_institution: formData.institution,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/users/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }

      toast.success("Sign Up Successful! 🎉");

      setFormData({
        name: "",
        email: "",
        password: "",
        number: "",
        address: "",
        profession: "",
        institution: "",
      });
      setErrors({});
      console.log(data.user.id);
      onSuccess(data.user.id);
    } catch (err) {
      toast.error(err.message || "Signup failed");
    }
  };

  const inputStyle = (field) =>
    `w-full rounded-lg border px-3 py-2 focus:ring-1 ${
      errors[field]
        ? "border-red-500 focus:ring-red-500"
        : "focus:border-amber-900 focus:ring-amber-900"
    }`;

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        onClick={onBack}
      >
        <div
          className="w-[480px] max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-6 shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-xl font-semibold text-amber-950">Sign Up</h2>
          <p className="mt-2 text-amber-900">
            Create an account to get started.
          </p>

          <div className="mt-6 space-y-3">
            {/* Name */}
            <div>
              <input
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className={inputStyle("name")}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={inputStyle("email")}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className={inputStyle("password")}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password}</p>
              )}
            </div>

            {/* Mobile */}
            <div>
              <input
                name="number"
                type="text"
                placeholder="Mobile Number"
                value={formData.number}
                onChange={handleChange}
                className={inputStyle("number")}
              />
              {errors.number && (
                <p className="mt-1 text-sm text-red-500">{errors.number}</p>
              )}
            </div>

            {/* Address */}
            <div>
              <input
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className={inputStyle("address")}
              />
              {errors.address && (
                <p className="mt-1 text-sm text-red-500">{errors.address}</p>
              )}
            </div>

            {/* Optional */}
            <input
              name="profession"
              placeholder="Profession / Student"
              value={formData.profession}
              onChange={handleChange}
              className="w-full rounded-lg border px-3 py-2 focus:border-amber-900 focus:ring-1 focus:ring-amber-900"
            />

            <input
              name="institution"
              placeholder="Institution / University"
              value={formData.institution}
              onChange={handleChange}
              className="w-full rounded-lg border px-3 py-2 focus:border-amber-900 focus:ring-1 focus:ring-amber-900"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="mt-6 w-full rounded-lg bg-amber-900 py-2.5 font-medium text-white hover:bg-amber-950"
          >
            Sign Up
          </button>

          <button
            onClick={onBack}
            className="mt-3 w-full rounded-lg bg-gray-100 py-2 font-medium text-gray-700 hover:bg-gray-200"
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default SignupModal;
