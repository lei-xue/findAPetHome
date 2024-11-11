import React, { useRef, useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { login} from '../services/authService';

export const Login = () => {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(event) {
    event.preventDefault();
    setIsLoading(true);
    try {
      const authDetail = {
        email: email.current.value,
        password: password.current.value
      }
      const data = await login(authDetail);
      data.accessToken ? navigate("/products") : toast.error("Login failed");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleLoginGuest() {
    setIsLoading(true);
    try {
      const authDetail = {
        email: process.env.REACT_APP_GUEST_LOGIN,
        password: process.env.REACT_APP_GUEST_PASSWORD
      }
      const data = await login(authDetail);
      data.accessToken ? navigate("/products") : toast.error("Guest login failed");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main>
      <div className="mt-10 flex h-[80vh] bg-pink-50 dark:bg-pink-100 rounded-lg">
        <div className="w-1/2 bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1415369629372-26f2fe60c467?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}></div>
        <div className="w-1/2 flex items-center justify-center">
          <div className="max-w-md w-full p-6">
            <h1 className="mb-12 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-gray-700">Welcome Back</span>
            </h1>
            <form className="space-y-8" onSubmit={handleLogin}>
              <input ref={email} type="email" placeholder="Email" className="w-full p-2 border border-pink-300 rounded-lg focus:outline-none focus:border-pink-500" />
              <input ref={password} type="password" placeholder="Password" className="w-full p-2 border border-pink-300 rounded-lg focus:outline-none focus:border-pink-500" />
              <button type="submit" disabled={isLoading} className="w-full py-2 px-4 bg-pink-600 text-white rounded-lg hover:bg-pink-700">
                {isLoading ? 'Signing In...' : 'Sign In'}
              </button>
            </form>
            <div className="mt-4 text-center">
              <span className="text-gray-500">Or</span>
            </div>
            <button onClick={() => navigate('../register')} disabled={isLoading} className="mt-4 w-full flex items-center justify-center p-2 mb-6 border border-pink-300 rounded-lg hover:bg-gray-50">Register</button>
            <button onClick={handleLoginGuest} disabled={isLoading} className="mt-4 w-full flex items-center justify-center p-2 mb-6 border border-pink-300 rounded-lg hover:bg-gray-50">Login as guest</button>
          </div>
        </div>
      </div>
    </main>
  )
}
