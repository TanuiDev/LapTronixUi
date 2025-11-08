import { useForm, type SubmitHandler } from "react-hook-form"
import * as Yup from "yup";
  import { yupResolver } from '@hookform/resolvers/yup';
import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";

type Inputs={
  firstName:string,
  lastName:string,
  userName:string,
  emailAddress:string,
  phoneNumber:string
  passwordHash:string,
  confirmPassword:string,
  profileImage?:string
}

export const Register = () => {
  const schema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    userName: Yup.string().required("Username is required"),
    emailAddress: Yup.string().email("Invalid email format").required("Email is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    passwordHash: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('passwordHash')], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const {register, handleSubmit,formState: { errors }} = useForm<Inputs>({
    resolver: yupResolver(schema)
  });
  const onsubmitHandler: SubmitHandler<Inputs>= (data) => {
    console.log(data);
  }
  return (
    <>
      <Navbar />
      <div>
        <h3 className="text-lg font-semibold text-center">Register for an account here</h3>
        <div className="mt-10 mb-10 sm:mx-auto sm:w-full sm:max-w-sm">          
          <form onSubmit={handleSubmit(onsubmitHandler)} className="space-y-3 bg-gray-900/50 p-6 rounded-lg">
            <input type="text" placeholder="Enter you first name..." {...register("firstName")} className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
            {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
            <input type="text" placeholder="Enter you last name..." {...register("lastName")} className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
            {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
            <input type="email" placeholder="Enter your email..." {...register("emailAddress")} className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
            {errors.emailAddress && <p className="text-red-500" >{errors.emailAddress.message}</p>}
            <input type="text" placeholder="Enter your username..." {...register("userName")} className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
            {errors.userName && <p className="text-red-500">{errors.userName.message}</p>}
            <input type="text" placeholder="Enter your phone number..." {...register("phoneNumber")} className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
            {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}
            <input type="password" placeholder="Enter your password..." {...register("passwordHash")} className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
            {errors.passwordHash && <p className="text-red-500">{errors.passwordHash.message}</p>}
            <input type="password" placeholder="Confirm your password..." {...register("confirmPassword")} className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
            {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
            <button type="submit" className="w-full rounded-md bg-indigo-500 px-3 py-1.5 text-base text-white hover:bg-indigo-600 focus:outline-2 focus:outline-indigo-500 sm:text-sm/6">Register</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
