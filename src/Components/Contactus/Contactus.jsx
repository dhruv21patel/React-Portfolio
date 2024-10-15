import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function Contactus(params) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data) => {
    await fetch("http://localhost:3000/FORM", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ contact: data }),
    })
      .then(function (response) {
        if (response.ok) {
          setSubmitted(() => true);
        }
        return response.json();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      id="contact"
      className="w-full h-screen flex flex-col lg:flex-row mt-[15%] md:mt-0"
    >
      <div className="w-full md:w-full lg:w-[50%] px-[5%]  text-white flex items-center ">
        <div className="h-fit w-fit">
          <p
            className="text-wrap text-[1.5em] md:text-[3rem]"
            style={{ fontFamily: "var(--handwritten2)" }}
          >
            {/* "This emphasizes the importance of problem-solving and understanding
            the task before diving into coding. It reflects the mindset that
            great developers are not just coders, but problem-solvers at heart". */}
            "Programming is not just about writing code; it's about crafting
            solutions that enhance lives and simplify complex challenges through
            innovative technology."
          </p>
        </div>
      </div>

      <div className=" w-full lg:w-[50%] h-auto flex items-center justify-center">
        {!submitted ? (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" w-[80%] h-auto p-8 flex flex-col items-center shadow"
          >
            <div className="mb-10 text-white text-[30px] w-full">
              <input
                placeholder="NAME"
                id="name"
                type="text"
                {...register("name", { required: "Name is required" })}
                className={`bg-transparent border-b border-white text-white placeholder-opacity-70 text-[20px] focus:outline-none focus:border-b focus:border-white  w-full p-2 ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div className="mb-10  text-white text-[30px] w-full">
              <input
                placeholder={
                  errors.email ? (
                    <p className="text-red-500">{errors.email.message}</p>
                  ) : (
                    "EMAIL"
                  )
                }
                id="email"
                type="email"
                {...register("email", { required: "Email is required" })}
                className={`bg-transparent border-b border-white text-white placeholder-opacity-70 text-[20px] focus:outline-none focus:border-b focus:border-white  w-full p-2 ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
            </div>

            <div className="mb-10  text-white text-[30px] w-full">
              <select
                placeholder="What do you want to Know"
                id="subject"
                {...register("subject", { required: "Subject is required" })}
                className={`bg-transparent border-b border-white text-white placeholder-opacity-70 text-[20px] focus:outline-none focus:border-b focus:border-white  w-full p-2 ${
                  errors.subject ? "border-red-500" : ""
                }`}
              >
                <option className="text-gray-300" value="">
                  Select a subject
                </option>
                <option className="text-gray-300" value="General Inquiry">
                  General Inquiry
                </option>
                <option className="text-gray-300" value="Support">
                  Support
                </option>
                <option className="text-gray-300" value="Feedback">
                  Feedback
                </option>
                <option className="text-gray-300" value="Other">
                  Other
                </option>
              </select>
              {errors.subject && (
                <p className="text-red-500">{errors.subject.message}</p>
              )}
            </div>

            <div className="mb-10  text-white text-[30px] w-full">
              <textarea
                placeholder="Define in Few Words"
                id="message"
                {...register("message")}
                className="bg-transparent border-b border-white text-white placeholder-opacity-70 text-[20px] focus:outline-none  w-full p-2"
                rows="4"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-fit"
            >
              Submit
            </button>
          </form>
        ) : (
          <h1>WILL CONTACT YOU SOON</h1>
        )}
      </div>
    </div>
  );
}
