"use client";

import { useState } from "react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { question: "What is MockSite?", answer: "MockSite is a platform for showcasing modern web designs." },
    { question: "How can I contact support?", answer: "You can contact support via our contact page or email us at support@mocksite.com." },
    { question: "What services do you offer?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4 text-center">
              <button
                className="w-full text-xl font-medium text-gray-800 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">MockSite</h3>
            <p className="text-sm">&copy; {new Date().getFullYear()} MockSite. All rights reserved.</p>
          </div>
        </div>
        <div className="flex justify-center space-x-4 mt-6">
          <a href="#" className="hover:underline text-sm">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline text-sm">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
