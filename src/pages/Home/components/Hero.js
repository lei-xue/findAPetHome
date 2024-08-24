import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row dark:text-slate-100 items-center">
      <div className="text my-5">
        <h1 className="text-5xl font-bold">Find-A-Pet-Home</h1>
        <p className="text-2xl my-7 text-left px-1 dark:text-slate-300">
          <span className="text-pink-500">This is a Hobby Project for Practising React, Tailwind CSS and RESTful API.</span>
          <br />
          Discover your perfect companion with our extensive pet adoption database.
          <br />
          Browse through profiles of loving animals needing a new home today.
        </p>
        <Link to="/products" type="button" className="text-white bg-gray-700 hover:bg-pink-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-pink-700 focus:outline-none dark:focus:ring-pink-800">Explore Pets</Link>
      </div >
      <div className="visual my-5 lg:max-w-xl">
        <img className="rounded-lg max-h-full" src="https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733_1280.jpg" alt="CodeBook Hero Section" />
      </div>
    </section >
  )
}