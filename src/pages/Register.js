
import React from 'react'
import { FaGoogle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { register } from '../services';
import { useTitle } from '../hooks/useTitle';

export const Register = () => {
  const navigate = useNavigate()
  useTitle('Register');
  async function handleRegister(event) {
    event.preventDefault();
    try {
      const authDetail = {
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value
      }

      const data = await register(authDetail);
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

            <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl mb-12"><span class="text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-gray-700">Register Here</span></h1>
            <form className="space-y-8" onSubmit={handleRegister}>
              <input name="name" required type="text" placeholder="Name" className="w-full p-2 border border-pink-300 rounded-lg focus:outline-none focus:border-pink-500" autoComplete="off" />
              <input name="email" required type="email" placeholder="Email" className="w-full p-2 border border-pink-300 rounded-lg focus:outline-none focus:border-pink-500" autoComplete="off" />
              <input name="password" required type="password" placeholder="Password" className="w-full p-2 border border-pink-300 rounded-lg focus:outline-none focus:border-pink-500" autoComplete="off" />

              <button type="submit" className="w-full py-2 px-4 bg-pink-600 text-white rounded-lg hover:bg-pink-700">Resgiter</button>
            </form>
            <div className="mt-4 text-center">
              <span className="text-gray-500">Or</span>
            </div>
            <button className="mt-4 w-full flex items-center justify-center p-2 mb-6 border border-pink-300 rounded-lg hover:bg-gray-50">
              <FaGoogle className="text-pink-500 mr-2" />
              Sign in with Google
            </button>
            <button type="submit" className="mt-4 w-full flex items-center justify-center p-2 mb-6 border border-pink-300 rounded-lg hover:bg-gray-50">Sign In</button>

          </div>
        </div>
      </div>
    </main>
  )
}

