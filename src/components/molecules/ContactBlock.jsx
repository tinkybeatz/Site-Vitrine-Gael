import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export function ContactBlock({ deploy }) {
  //state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  //comportements
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.send(
        "service_42vtbnc",
        "template_ubk7tnm",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "gael.delouis.pro@gmail.com",
        },
        "NP3m7yY7XJ8DdfJKO"
      );

      console.log("Email sent successfully:", result);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setSubmitStatus(null);
  };

  //affichage
  return (
    <div class="flex flex-col h-full w-full bg-white p-4">
      <div class="pb-4 text-base md:text-sm sm:text-xs">
        Have a question or want to work together? Feel free to drop me a
        message. I'd love to hear from you!
      </div>
      <div class="grid grid-cols-3 sm:grid-cols-1 w-full h-full gap-4">
        <div class="col-span-1 flex flex-col sm:flex-row rounded-lg shadow-inner border border-gray-200 p-4 gap-4 items-start">
          <div class="flex flex-col gap-4 sm:gap-2">
            <div class="font-medium text-lg md:text-base sm:text-sm">
              Contact informations
            </div>
            <div class="flex flex-col pl-4 md:pl-0 sm:pl-0 gap-2 sm:gap-1 mb-2 sm:mb-0">
              {deploy &&
                deploy.contact_informations &&
                deploy.contact_informations.map((info, index) => (
                  <div key={index} class="flex items-center h-[3rem] sm:h-[2rem]">
                    {info.img && (
                      <div class="h-full aspect-square flex items-center justify-center text-base sm:text-sm">
                        {info.img}
                      </div>
                    )}
                    <div class="flex flex-col sm:flex-row sm:gap-2">
                      <div class="font-medium text-sm sm:text-xs">{info.title}</div>
                      {info.href ? (
                        <a
                          href={info.href}
                          class="text-blue-600 hover:text-blue-800 text-sm md:text-xs sm:text-xs"
                          target={
                            info.href.startsWith("mailto:") ||
                            info.href.startsWith("tel:")
                              ? "_self"
                              : "_blank"
                          }
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div class="text-sm text-gray-600 md:text-xs sm:text-xs">
                          {info.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <div class="font-medium text-lg md:text-base sm:text-sm">Let's connect!</div>
            <div class="flex gap-2 pl-4">
              {deploy &&
                deploy.connect &&
                deploy.connect.map((connect) => (
                  <a
                    href={connect.href}
                    target={
                      connect.href.startsWith("mailto:") ? "_self" : "_blank"
                    }
                    class="bg-white border shadow-md cursor-pointer hover:bg-gray-200 border-gray-200 flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full text-base sm:text-xs"
                  >
                    {connect.img}
                  </a>
                ))}
            </div>
          </div>
        </div>
        <div class="col-span-2 flex flex-col lg:text-sm md:text-xs sm:text-xs rounded-lg shadow-inner border border-gray-200 justify-center items-center">
          <div className="h-[15%] sm:h-[15%] content-end">
            {/* Status Messages */}
            {submitStatus === null && (
              <div className="mx-4 p-3 sm:p-2 bg-blue-100 border border-blue-400 text-blue-700 rounded-lg">
                Please fill up the form down bellow and I'll get back to you as
                soon as possible.
              </div>
            )}
            {submitStatus === "success" && (
              <div className="mx-4 p-3 sm:p-2 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                Your message has been sent successfully! I'll get back to you
                soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="mx-4 p-3 sm:p-2 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                There was an error sending your message. Please try again or
                contact me directly.
              </div>
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full h-[85%] sm:h-[85%] p-4"
          >
            <div className="grid grid-cols-2 h-1/5 p-4 sm:p-2 gap-8 sm:gap-4">
              {/* Name input */}
              <div className="flex flex-col h-full gap-1">
                {/* Regular input for larger screens */}
                <div className="sm:hidden flex flex-col h-full gap-1">
                  Your Name
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="h-full max-h-[3rem] rounded-lg px-3 text-sm md:text-xs border border-gray-200 bg-gray-100 placeholder-gray-500"
                    placeholder="John Doe"
                    required
                  />
                </div>
                {/* Floating label input for small screens */}
                <div className="relative z-0 w-full h-full group hidden sm:flex sm:items-end mb-2 my-1">
                  <input
                    type="text"
                    name="name"
                    id="floating_name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Your Name
                  </label>
                </div>
              </div>
              
              {/* Email input */}
              <div className="flex flex-col h-full gap-1">
                {/* Regular input for larger screens */}
                <div className="sm:hidden flex flex-col h-full gap-1">
                  Your Email
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="h-full max-h-[3rem] rounded-lg px-3 text-sm md:text-xs border border-gray-200 bg-gray-100 placeholder-gray-500"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                {/* Floating label input for small screens */}
                <div className="relative z-0 w-full h-full mb-2 group hidden sm:flex sm:items-end my-1">
                  <input
                    type="email"
                    name="email"
                    id="floating_email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email address
                  </label>
                </div>
              </div>
            </div>
            <div className="h-1/5 p-4 sm:p-2">
              <div className="flex flex-col h-full gap-1">
                {/* Regular input for larger screens */}
                <div className="sm:hidden flex flex-col h-full gap-1">
                  Subject
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="h-full max-h-[3rem] rounded-lg px-3 text-sm md:text-xs border border-gray-200 bg-gray-100 placeholder-gray-500"
                    placeholder="How can I help you?"
                    required
                  />
                </div>
                {/* Floating label input for small screens */}
                <div className="relative z-0 w-full h-full group hidden sm:flex sm:items-end mb-2 my-1">
                  <input
                    type="text"
                    name="subject"
                    id="floating_subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_subject"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Subject
                  </label>
                </div>
              </div>
            </div>
            <div className="h-2/5 px-4 pt-4 pb-5 sm:p-2">
              <div className="flex flex-col h-full gap-1">
                {/* Regular textarea for larger screens */}
                <div className="sm:hidden flex flex-col h-full gap-1">
                  Your Message
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="h-full resize-none rounded-lg px-3 pt-4 text-sm md:text-xs border border-gray-200 bg-gray-100 placeholder-gray-500"
                    placeholder="Your message here..."
                    required
                  />
                </div>
                {/* Floating label textarea for small screens */}
                <div className="relative z-0 w-full h-full group hidden sm:flex my-1 sm:items-end">
                  <textarea
                    name="message"
                    id="floating_message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer resize-none"
                    placeholder=" "
                    rows="4"
                    required
                  />
                  <label
                    htmlFor="floating_message"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Your Message
                  </label>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 h-1/5 p-4 sm:pt-4 sm:px-0 sm:pb-0 sm:gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`rounded-lg h-full max-h-[3rem] text-white text-sm md:text-xs sm:text-xs shadow-md hover:shadow-none cursor-pointer ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send"}
              </button>
              <button
                type="button"
                onClick={handleReset}
                disabled={isSubmitting}
                className="bg-red-500 rounded-lg h-full max-h-[3rem] text-white text-sm md:text-xs sm:text-xs shadow-md hover:bg-red-600 hover:shadow-none cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
