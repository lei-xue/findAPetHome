
export const Testimonial = () => {
  return (
    <section className='my-20'>
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Fun Facts About Pets</h1>
      <div className="grid mb-8 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
        <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Dogs Have Unique Nose Prints</h3>
            <p className="my-4 font-light">Just like human fingerprints, no two dogs' nose prints are alike. They can actually be used to identify them."</p>
          </blockquote>
          <img className="w-20 h-20 rounded-full" src="https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=60" alt="dog nose" />
        </figure>
        <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Cats Can Make Over 100 Sounds</h3>
            <p className="my-4 font-light">Cats are capable of making over 100 different sounds, whereas dogs can only make about 10."</p>
          </blockquote>
          <img className="w-20 h-20 rounded-full" src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=60" alt="cat" />
        </figure>
        <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Dogs Can Understand Over 150 Words</h3>
            <p className="my-4 font-light">Studies suggest that dogs can understand up to 250 words and gestures, making them as smart as two-year-old children in terms of linguistic ability.</p>
          </blockquote>
          <img className="w-20 h-20 rounded-full" src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=60" alt="smart dog" />
        </figure>
        <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Cats Walk Like Camels and Giraffes</h3>
            <p className="my-4 font-light">Cats have a unique gait where they move both right feet first, then both left. This is a trait they share only with camels and giraffes.</p>
          </blockquote>
          <img className="w-20 h-20 rounded-full" src="https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=60" alt="cat walking" />
        </figure>
      </div>
    </section>
  )
}