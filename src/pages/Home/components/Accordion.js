import React, { useState } from 'react';
export const Accordion = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  function handleClick() {
    setShow(!show)
  }

  return (
    <div>
      <h2>
        <button
          type="button"
          className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
          aria-expanded={show}
          onClick={handleClick}
        >
          <span>{question}</span>
          <svg
            className={`w-3 h-3 transform ${!show ? "rotate-180" : ""} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        className={show ? "block" : "hidden"}
      >
        <div className="py-5 border-b border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-left text-gray-500 dark:text-gray-400">{answer}</p>
        </div>
      </div>
    </div>
  )
}
