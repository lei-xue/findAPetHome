
import React from 'react'
import { FaGoogle } from 'react-icons/fa';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { login } from '../services';

const clientId = "757483194645-jtg9jpf5225439rs01kv7g1ec28nu3pm.apps.googleusercontent.com";

export const Login = () => {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();

  async function handleLogin(event) {
    event.preventDefault();
    try {
      const authDetail = {
        email: email.current.value,
        password: password.current.value
      }
      const data = await login(authDetail);
      data.accessToken ? navigate("/products") : toast.error(data);
    } catch (error) {
      toast.error(error.message, { closeButton: true, position: "top-right" });
    }
  }


  return (
    <main>
      <div className="mt-10 flex h-[80vh] bg-pink-50 
      dark:bg-pink-100
      rounded-lg">
        <div className="w-1/2 bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1415369629372-26f2fe60c467?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}></div>
        <div className="w-1/2 flex items-center justify-center">
          <div className="max-w-md w-full p-6">

            <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl mb-12"><span class="text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-gray-700">Welcome Back</span></h1>
            <form className="space-y-8" onSubmit={handleLogin}>
              <input ref={email} type="email" placeholder="Email" className="w-full p-2 border border-pink-300 rounded-lg focus:outline-none focus:border-pink-500" />
              <input ref={password} type="password" placeholder="Password" className="w-full p-2 border border-pink-300 rounded-lg focus:outline-none focus:border-pink-500" />
              <button type="submit" className="w-full py-2 px-4 bg-pink-600 text-white rounded-lg hover:bg-pink-700">Sign In</button>
            </form>
            <div className="mt-4 text-center">
              <span className="text-gray-500">Or</span>
            </div>
            {/*
            <GoogleLogin
              clientId={clientId}
              buttonText="Sign in with Google"
              onSuccess={(response) => {
                console.log(response);
                navigate("/products");
              }}
              onFailure={(response) => {
                console.log(response);
              }}
              cookiePolicy={'single_host_origin'}
            />
            */}
            <button className="mt-4 w-full flex items-center justify-center p-2 mb-6 border border-pink-300 rounded-lg hover:bg-gray-50">
              <FaGoogle className="text-pink-500 mr-2" />
              Sign in with Google
            </button>
            <button type="submit" className="mt-4 w-full flex items-center justify-center p-2 mb-6 border border-pink-300 rounded-lg hover:bg-gray-50">Register</button>
            <button type="submit" className="mt-4 w-full flex items-center justify-center p-2 mb-6 border border-pink-300 rounded-lg hover:bg-gray-50">Login as guest</button>
          </div>
        </div>
      </div>
    </main>

  )
}