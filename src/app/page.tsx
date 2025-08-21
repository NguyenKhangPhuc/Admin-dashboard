'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { UserAttributes } from "./types";
import { useMutation } from "@tanstack/react-query";
import { setTokenToRequest, userLogin, userSignup } from "./services";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const LoginForm = ({ router, setIsOpen }: { router: AppRouterInstance, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const loginMutation = useMutation({
    mutationKey: ['login'],
    mutationFn: userLogin,
    onSuccess: ({ token }: { token: string }) => {
      localStorage.setItem('userToken', token);
      setTokenToRequest()
      console.log(token)
      router.push('/dashboard/profile')
    }
  })
  const { register: registerLogin, handleSubmit: handleLogin, formState: { errors: loginError } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onSubmit'
  })
  const login = (values: UserAttributes) => {
    console.log(values)
    loginMutation.mutate(values)
  }
  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Login</h2>
      <form className="flex flex-col" onSubmit={handleLogin(login)}>
        <input
          type="email"
          className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Email address"
          {...registerLogin("email", { required: "First name is required" })}
        />
        {loginError.email && <div className="error_message">{loginError.email.message}</div>}
        <input
          type="password"
          className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          placeholder="Password"
          {...registerLogin("password", { required: "Password is required" })}
        />
        {loginError.email && <div className="error_message">{loginError.email.message}</div>}
        <div className="flex items-center justify-between flex-wrap">
          <label htmlFor="remember-me" className="text-sm text-gray-900 cursor-pointer">
            <input type="checkbox" id="remember-me" className="mr-2" />
            Remember me
          </label>
          <a href="#" className="text-sm text-blue-500 hover:underline mb-0.5">Forgot password?</a>
          <p className="text-gray-900 mt-4"> Don&apos;t have an account? <a href="#" className="text-sm text-blue-500 -200 hover:underline mt-4" onClick={() => setIsOpen(true)}>Signup</a></p>
        </div>
        <button type="submit" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">Login</button>
      </form>
    </div>
  )
}

const SignUpForm = ({ setIsOpen }: { setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const signUpMutation = useMutation({
    mutationKey: ['create_user'],
    mutationFn: userSignup,
    onSuccess: (data) => {
      alert('Sign up successfuly')
      setIsOpen(false)
    }
  })

  const { register: registerSignUp, handleSubmit: handleSignUp, watch, formState: { errors: signUpError }, clearErrors } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    mode: 'onSubmit'
  })

  const signUp = (values: UserAttributes) => {
    console.log(values)
    signUpMutation.mutate(values)
  }
  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4" >Sign up</h2>
      <form className=" flex flex-col" onSubmit={handleSignUp(signUp)}>
        <input
          type="email"
          className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          placeholder="Email address"
          {...registerSignUp("email", { required: "First name is required" })}
        />
        {signUpError.email && <div className="error_message">{signUpError.email.message}</div>}
        <input
          type="password"
          className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          placeholder="Password"
          {...registerSignUp("password", { required: "Password is required" })}
        />
        {signUpError.password && <div className="error_message">{signUpError.password.message}</div>}
        <input
          type="password"
          className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          placeholder="Confirm password"
          {...registerSignUp('confirmPassword', {
            required: 'Confirm password is required', validate: (val: string) => {
              if (watch('password') != val) {
                return "Your password is not match"
              }
            }
          })}
          onChange={() => clearErrors('confirmPassword')}
        />
        {signUpError.confirmPassword && <div className="error_message">{signUpError.confirmPassword.message}</div>}
        <div className="flex items-center justify-between flex-wrap">
          <div className="text-sm text-blue-500 underline">Go to sign in page</div>
          <a href="#" className="text-sm text-blue-500 hover:underline mb-0.5">Forgot password?</a>
          <p className="text-gray-900 mt-4"> Already have an account? <a href="#" className="text-sm text-blue-500 -200 hover:underline mt-4" onClick={() => setIsOpen(false)}>Signin</a></p>
        </div>
        <button type="submit" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">Login</button>
      </form>
    </div>
  )
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter()
  useEffect(() => {
    const token = localStorage.getItem('userToken')
    console.log(token)
    if (token) {
      router.push('/dashboard/profile')
    }
  }, [])

  return (
    <div className="container min-w-full max-h-screen flex justify-center items-center py-10">
      <div className="flex flex-col items-center justify-center h-screen">
        {
          isOpen ?
            <SignUpForm setIsOpen={setIsOpen} />
            :
            <LoginForm router={router} setIsOpen={setIsOpen} />
        }
      </div>
    </div>
  );
}
