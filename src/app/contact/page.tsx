"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Container from "@/utils/container/Container";
import Lottie from "lottie-react";
import contactanimation from "../../../public/contactUs.json";

const ContactPage = () => {
  const form = useRef(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      console.error("Form reference is null.");
      return;
    }

    emailjs
      .sendForm("service_yyb9uag", "template_9azk1jk", form.current, {
        publicKey: "AWxHBi51nIFNeJFVm",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="bg-orange-50">
      {/* Contact page section */}
      <div className="h-full min-h-screen max-w-full mx-auto">
        <Container>
          <h2 className="text-center text-3xl sm:text-5xl font-bold pt-15 sm:pt-20 text-orange-800">
            Get in Touch
          </h2>
          <p className="text-yellow-800 text-sm sm:text-base text-center ">
            Have a question or feedback? Fill out the form below, and we&apos;ll
            get back to you!
          </p>
          <div className="flex flex-col md:flex-row items-center rounded-lg mx-auto h-auto gap-8 py-10">
            <div className="w-full md:w-[60%] h-[300px] sm:h-[400px] md:h-[600px] mx-auto">
              <Lottie
                className="w-full h-full"
                animationData={contactanimation}
                loop={true}
              />
            </div>
            {/* Form Section */}
            <div className="w-full md:w-[70%] max-w-xl p-10 py-16 px-8 h-auto  mb-2">
              <h2 className="text-orange-800 font-bold text-4xl items-center text-center ">
                Contact Us
              </h2>
              <form className="card-body" ref={form} onSubmit={sendEmail}>
                {/* Name */}
                <div className="form-control mb-4">
                  <label htmlFor="name" className="block text-orange-900">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    id="name"
                    placeholder="full name"
                    required
                    className="w-full p-3 input input-bordered border border-gray-100 rounded-md bg-slate-100 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                {/* Email */}
                <div className="form-control mb-4">
                  <label htmlFor="email" className="block text-orange-900">
                    Email
                  </label>
                  <input
                    type="text"
                    name="user_email"
                    id="email"
                    placeholder="email"
                    required
                    className="w-full p-3 input input-bordered border border-gray-100 rounded-md shadow-md bg-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                {/* Subject */}
                <div className="form-control mb-4">
                  <label htmlFor="name" className="block text-orange-900">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="to_subject"
                    id="subject"
                    placeholder="subject"
                    required
                    className="w-full p-3 input input-bordered border border-gray-100 rounded-md shadow-md bg-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                {/* Message */}
                <div className="form-control mb-4">
                  <label htmlFor="name" className="block text-orange-900">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="message"
                    required
                    className="w-full p-3 border border-gray-100 rounded-md shadow-md bg-slate-100  focus:outline-none focus:ring-2 focus:ring-orange-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-800 text-white py-3 rounded-lg shadow-md font-bold hover:bg-orange-900 transition"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ContactPage;
