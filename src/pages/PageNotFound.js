import { Link } from 'react-router-dom';
import { useTitle } from '../hooks/useTitle';

export const PageNotFound = () => {
  useTitle('Page Not Found');
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">

          <img className="w-full h-auto max-w-screen-sm mx-auto object-contain" src="https://img.freepik.com/free-vector/funny-tired-cat-animal-meme_23-2149002657.jpg?t=st=1724544205~exp=1724547805~hmac=f9630dc756e7cbd4ce0a35e12ca42d5f4ffe59fe1f3ec38b899e0e9fbfec1dad&w=996" alt="page-404" />
          <p className="text-5xl text-gray-700 font-bold my-5 dark:text-white text-center">404, Oops!</p>
        </div>
        <div className="flex justify-center my-2">
          <Link to="/">
            <button type="button" className="w-64 text-2xl text-white bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 hover:bg-gradient-to-br font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2">Back To Home</button>
          </Link>
        </div>
      </section>
    </main>
  )
}