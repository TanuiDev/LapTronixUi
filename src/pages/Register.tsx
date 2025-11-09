import { useForm, type SubmitHandler } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";

type Inputs = {
  firstName: string;
  lastName: string;
  userName: string;
  emailAddress: string;
  phoneNumber: string;
  passwordHash: string;
  confirmPassword: string;
  profileImage?: string;
};

export const Register = () => {
  const schema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    userName: Yup.string().required("Username is required"),
    emailAddress: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .min(10, "Phone number must be at least 10 characters")
      .required("Phone number is required"),
    passwordHash: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("passwordHash")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const onsubmitHandler: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };
  return (
    <>
      <Navbar />
      <div className="">
        <div className="mt-10 mb-10 w-full md:w-1/2 sm:mx-auto bg-gray-800 py-6 rounded-b-lg shadow-lg p-6">
          <div className=" text-center justify-center mb-6 ">
            <h1 className="text-3xl font-bold mb-4 text-blue-600">TechStore</h1>
            <p className="text-sm text-gray-500">Register an Account</p>
          </div>
          <form
            onSubmit={handleSubmit(onsubmitHandler)}
            className="space-y-3 w-full "
          >
            <input
              type="text"
              placeholder="Enter you first name..."
              {...register("firstName")}
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName.message}</p>
            )}
            <input
              type="text"
              placeholder="Enter you last name..."
              {...register("lastName")}
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
            {errors.lastName && (
              <p className="text-red-500">{errors.lastName.message}</p>
            )}
            <input
              type="email"
              placeholder="Enter your email..."
              {...register("emailAddress")}
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
            {errors.emailAddress && (
              <p className="text-red-500">{errors.emailAddress.message}</p>
            )}
            <input
              type="text"
              placeholder="Enter your username..."
              {...register("userName")}
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
            {errors.userName && (
              <p className="text-red-500">{errors.userName.message}</p>
            )}
            <input
              type="text"
              placeholder="Enter your phone number..."
              {...register("phoneNumber")}
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
            {errors.phoneNumber && (
              <p className="text-red-500">{errors.phoneNumber.message}</p>
            )}
            <input
              type="password"
              placeholder="Enter your password..."
              {...register("passwordHash")}
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
            {errors.passwordHash && (
              <p className="text-red-500">{errors.passwordHash.message}</p>
            )}
            <input
              type="password"
              placeholder="Confirm your password..."
              {...register("confirmPassword")}
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}
            <button
              type="submit"
              className="w-full rounded-md bg-indigo-500 px-3 py-1.5 text-base text-white hover:bg-indigo-600 focus:outline-2 focus:outline-indigo-500 sm:text-sm/6"
            >
              Register
            </button>
          </form>
          <div className="mt-4">
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <a href="/login" className="text-indigo-500 hover:underline">
                Login here
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
