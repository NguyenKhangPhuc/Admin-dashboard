'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { UserAttributes } from "./types";
import { useMutation } from "@tanstack/react-query";
import { setTokenToRequest, userLogin, userSignup } from "./services";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useTokenContext } from "./context/TokenContext";

const LoginForm = ({ router, setIsOpen }: { router: AppRouterInstance, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  ///Manage the login form.

  ///Manage the error message.
  const { token, setToken } = useTokenContext();
  const [errorMessage, setErrorMessage] = useState('')
  ///Login mutation is used for login service.
  const loginMutation = useMutation({
    mutationKey: ['login'],
    mutationFn: userLogin,
    onSuccess: ({ token }: { token: string }) => {
      ///If the user login successfully then store token in localstorage.
      localStorage.setItem('userToken', token);
      ///Set the token to each request from Front-end to Back-end.
      setTokenToRequest()
      ///Pushing the user to go to profile page.
      console.log(token)
      router.push('/dashboard/profile')
      setToken(token);
    },
    onError: (error) => {
      ///If login failed, show the error message.
      setErrorMessage(error.message)
    }
  })

  ///Using react hook form to manage login form, listen to the change of email and password inputs.
  const { register: registerLogin, handleSubmit: handleLogin, formState: { errors: loginError } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    ///Mode onSubmit means that error will be shown when submit button is pressed.
    mode: 'onSubmit'
  })
  const login = (values: UserAttributes) => {
    ///Login function.
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
        {loginError.password && <div className="error_message">{loginError.password.message}</div>}
        <div className="flex items-center justify-between flex-wrap">
          <label htmlFor="remember-me" className="text-sm text-gray-900 cursor-pointer">
            <input type="checkbox" id="remember-me" className="mr-2" />
            Remember me
          </label>
          <a href="#" className="text-sm text-blue-500 hover:underline mb-0.5">Forgot password?</a>
          <p className="text-gray-900 mt-4"> Don&apos;t have an account? <a href="#" className="text-sm text-blue-500 -200 hover:underline mt-4" onClick={() => setIsOpen(true)}>Signup</a></p>
        </div>
        {errorMessage && <div className="w-full flex justify-center items-center text-sm p-2 text-red-500">{errorMessage}</div>}
        <button type="submit" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">Login</button>
      </form>
    </div>
  )
}

const SignUpForm = ({ setIsOpen }: { setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  ///Manage the sign up form

  ///Manage the error message.
  const [errorMessage, setErrorMessage] = useState('')
  ///Sign up mutation using to create new user.
  const signUpMutation = useMutation({
    mutationKey: ['create_user'],
    mutationFn: userSignup,
    onSuccess: () => {
      ///If create user successfully, go to the sign in form.
      alert('Sign up successfuly')
      setIsOpen(false)
    },
    onError: (error) => {
      ///If not, show the message error
      setErrorMessage(error.message)
    }
  })

  ///Form management with react hook form to listen to the change of email, password, and confirm password input.
  const { register: registerSignUp, handleSubmit: handleSignUp, watch, formState: { errors: signUpError }, clearErrors } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    ///Mode onSubmit here means that error will be shown when user press submit button.
    mode: 'onSubmit'
  })

  const signUp = (values: UserAttributes) => {
    console.log(values)
    ///Sign up.
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
        {errorMessage && <div className="w-full flex justify-center items-center text-sm p-2 text-red-500">{errorMessage}</div>}
        <button type="submit" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">Login</button>
      </form>
    </div>
  )
}

export default function Home() {
  ///Entry point of the application

  ///Manage the visibility of Login and SignUp form
  const [isOpen, setIsOpen] = useState(false);
  ///Manage routing
  const router = useRouter()
  useEffect(() => {
    ///Check if there is already token stored in local storage
    const token = localStorage.getItem('userToken')
    console.log(token)
    if (token) {
      ///If there is, go to the profile page.
      router.push('/dashboard/profile')
    }
  }, [])

  return (
    <div className="min-w-full max-h-screen flex justify-center items-center py-10">
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
