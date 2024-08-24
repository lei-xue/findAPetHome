import { Accordion } from "./Accordion";
export const Faq = () => {
  const faqs = [
    {
      "id": 1,
      "question": "How do I adopt a pet?",
      "answer": "To adopt a pet, browse through our available animals, click on the one you're interested in, and follow the instructions to submit an adoption application. Our team will review your application and contact you for the next steps."
    },
    {
      "id": 2,
      "question": "What is the adoption process like?",
      "answer": "The adoption process typically involves selecting a pet, completing an adoption application, meeting the pet in person, and finalizing the adoption with a contract. We also provide post-adoption support to ensure a smooth transition."
    },
    {
      "id": 3,
      "question": "What are the adoption fees?",
      "answer": "Adoption fees vary depending on the pet and cover the cost of vaccinations, spaying/neutering, and microchipping. Specific fees are listed on each pet's profile page."
    },
    {
      "id": 4,
      "question": "Can I return a pet if it doesn't work out?",
      "answer": "Yes, we understand that sometimes a pet may not be the right fit. If you encounter any issues, please contact us as soon as possible. We have a return policy in place to ensure the pet's well-being."
    },
    {
      "id": 5,
      "question": "Do you provide support after adoption?",
      "answer": "Absolutely! We offer ongoing support for adopters, including advice on training, feeding, and general care. Our goal is to ensure both you and your new pet have a happy and healthy relationship."
    }
  ];

  return (
    <div>
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Questions & Answer</h1>
      <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
        {faqs.map((i) => (
          <div key={i.id} className="mb-4">
            <Accordion question={i.question} answer={i.answer} />
          </div>
        ))}
      </div>
    </div>
  )
}
