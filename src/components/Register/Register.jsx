import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { saveUser } from "../../lib/LocalStorage";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password, name } = data;

    createUser(email, password)
      .then(() => {
        saveUser({ name, email });
        toast.success("User created successfully!");
        Navigate("/");
      })
      .catch((error) => {
        toast.error(`Registration failed: ${error.message}`);
        console.error("Error during registration:", error);
      });
  };

  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl mx-auto shadow-xl my-20">
      <h1 className="text-2xl font-bold text-center">Register</h1>
      <p className="text-center">Register to create a new account</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Username Field */}
        <div className="space-y-1 text-sm">
          <label className="block text-gray-400" htmlFor="name">
            User Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full px-4 py-3 rounded-md border-gray-300 border-2 focus:border-violet-400"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <span className="text-red-500 py-2">{errors.name.message}</span>
          )}
        </div>

        {/* Email Field */}
        <div className="space-y-1 text-sm">
          <label className="block text-gray-400" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-md border-gray-300 border-2 focus:border-violet-400"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-500 py-2">{errors.email.message}</span>
          )}
        </div>

        {/* Password Field */}
        <div className="space-y-1 text-sm relative">
          <label className="block text-gray-400" htmlFor="password">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md border-gray-300 border-2 focus:border-violet-400"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                message:
                  "Password must contain at least one letter, one number, and one special character",
              },
            })}
          />
          <span
            className="absolute bottom-4 right-4 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <FaEyeSlash className="text-lg" />
            ) : (
              <FaRegEye className="text-lg" />
            )}
          </span>
          {errors.password && (
            <span className="text-red-500 py-2">{errors.password.message}</span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="block w-full p-3 text-center rounded-sm bg-[#6A0B37] text-white text-lg font-medium"
        >
          Register
        </button>
      </form>

      <p className="text-xs text-center sm:px-6 text-gray-400">
        Already have an account?{" "}
        <Link to="/login" className="underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
