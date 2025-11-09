import { useForm, type SubmitHandler } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";

type Inputs = {
  emailAddress: string;
};

export const Resetpassword = () => {
  const schema = Yup.object().shape({
    emailAddress: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Navbar />
      <div className="mt-10 mb-12 sm:mx-auto sm:w-full sm:max-w-sm justify-center  bg-gray-900/50 p-6 rounded-lg">
        <div className=" text-center justify-center mb-6">
          <h1 className="text-3xl font-bold mb-4 text-blue-600">TechStore</h1>
          <h4 className="text-lg text-gray-400">Reset Password</h4>
          <p className="text-sm text-gray-500">
            Enter your email to reset your password
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <input
            type="email"
            placeholder="Enter your email..."
            {...register("emailAddress")}
            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
          />
          {errors.emailAddress && (
            <p className="text-red-500">{errors.emailAddress.message}</p>
          )}
          <button
            type="submit"
            className="w-full rounded-md bg-indigo-500 px-3 py-1.5 text-base text-white hover:bg-indigo-600 focus:outline-2 focus:outline-indigo-500 sm:text-sm/6"
          >
            Send Verification code
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};
