export const ErrorCard = () => {

  return (
    <div className="max-w-2xl mx-auto mt-3">
      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-red-600 dark:text-red-400">Error</h2>
          <p className="text-2xl text-pink-700 dark:text-gray-300 mb-6">"Sorry, Sever Error ! Fail to load data" </p>
          <img
            src="https://http.cat/500"
            alt="Error Cat"
            className="w-full h-auto rounded-lg mb-6"
          />
        </div>
      </div>
    </div>
  );
};
