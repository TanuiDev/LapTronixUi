import { useForm, type SubmitHandler } from "react-hook-form"
import * as Yup from "yup";
  import { yupResolver } from '@hookform/resolvers/yup';
import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";

type Inputs={
  emailAddress:string,
  passwordHash:string
}

export const Login = () => {
  const schema = Yup.object().shape({
    emailAddress: Yup.string().email("Invalid email format").required("Email is required"),
    passwordHash: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Navbar />
      <div className="pt-10">        
         <div className="mt-10 mb-10 w-full md:w-1/2 sm:mx-auto bg-gray-800 py-6 rounded-b-lg shadow-lg p-6"> 
          <div className=" text-center justify-center mb-6">
            <h1 className="text-3xl font-bold mb-4 text-blue-600">TechStore</h1>
            <h4 className="text-lg text-gray-400">Welcome Back</h4>
            <p className="text-sm text-gray-500">Login to your account</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

            <input type="email" placeholder="Enter your email..." {...register("emailAddress")} className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
            {errors.emailAddress && <p className="text-red-500" >{errors.emailAddress.message}</p>}
            <input type="password" placeholder="Enter your password..." {...register("passwordHash")} className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
            {errors.passwordHash && <p className="text-red-500">{errors.passwordHash.message}</p>}
            <button type="submit" className="w-full rounded-md bg-indigo-500 px-3 py-1.5 text-base text-white hover:bg-indigo-600 focus:outline-2 focus:outline-indigo-500 sm:text-sm/6">Login</button>
          </form>
           <div className="mt-4">
          <p className="text-sm text-gray-500">Don't have an account? <a href="/register" className="text-indigo-500 hover:underline">Register here</a></p>
          <p className="text-sm text-gray-500">Forgot your password? <a href="/reset-password" className="text-indigo-500 hover:underline">Reset it here</a></p>
        </div>
        </div>
       
      </div>
      <Footer />
    </>
  );
};
