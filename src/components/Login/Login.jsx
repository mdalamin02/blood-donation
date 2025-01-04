import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const Navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("user logged in successfully");

        Navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl mx-auto shadow-xl my-14   ">
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <p className=" text-center">Login to access your account</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label className="block text-gray-400">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-md border-gray-300 border-2 focus:border-violet-400"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500 py-2">This field is required</span>
          )}
        </div>
        <div className="space-y-1 relative text-sm ">
          <label htmlFor="password" className="block text-gray-400">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Password"
            className="w-full  px-4 py-3 rounded-md border-gray-300 border-2  focus:border-violet-400"
            {...register("password", { required: true })}
          />
          <span
            className="absolute bottom-4 right-2"
            onClick={() => setShowPassword(!showPassword)}
          >
            {" "}
            {showPassword ? (
              <FaEyeSlash className="text-lg " />
            ) : (
              <FaRegEye className="text-lg" />
            )}{" "}
          </span>

          {errors.password && (
            <span className="text-red-500 py-2">This field is required</span>
          )}
        </div>
        <button className="block w-full p-3 text-center rounded-sm  bg-red-700 text-white">
          Login
        </button>
      </form>

      <p className="text-xs text-center sm:px-6 text-gray-400">
        Don not have an account?
        <Link
          to="/register"
          rel="noopener noreferrer"
          href="#"
          className="underline text-red-500 ml-2 "
        >
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
