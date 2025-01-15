"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function FormInput() {
  // State to track input values
  const [formData, setFormData] = useState({
    from_name: "",
    email_subject: "",
    user_email: "",
    message: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_js4w2ps", "template_3w4ooms", form.current, {
        publicKey: "QES1o6ZafYcIGfqAb",
      })
      .then(
        () => {
          alert("Email sent Successfully! I'll get back to you ASAP");
          // Clear the form after successful submission
          setFormData({
            from_name: "",
            email_subject: "",
            user_email: "",
            message: "",
          });
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  };

  //   function sendButton() {
  //     alert(
  //       "I am working on validating user input and getting your messages when you try to contact me. This form should be able to work in the coming days. In the main time, you can click on any of the Social Media Icons( to your left in desktop view and top of this form in mobile view) to contact me. Thank you for your understanding"
  //     );
  //   }

  return (
    <>
      {/* <!-- form section starts here --> */}
      <div className="pt-2 mb-10 mx-auto lg:w-[95%]">
        <form
          ref={form}
          onSubmit={sendEmail}
          action=""
          className="w-[95%] mx-auto lg:w-[50%] lg:mx-1 text-black bg-white shadow-lg border border-[#3d5168]"
        >
          <h1 className="text-2xl py-5 w-[90%] mx-auto font-semibold">Get in touch</h1>
          <p className="text-sm text-gray-500 w-[90%] mx-auto">
            Ready to start your next project or have any questions? Feel free to
            reach out to me using the form below.
          </p>
          <div className="w-[90%] mx-auto">
            <input
              required
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleInputChange}
              placeholder="Enter Name"
              className="bg-transparent border rounded-md border-gray-500 my-4 py-1 px-3 w-[95%]"
            />
          </div>
          <div className="w-[90%] mx-auto">
            <input
              required
              type="text"
              name="email_subject"
              value={formData.email_subject}
              onChange={handleInputChange}
              placeholder="Enter Subject"
              className="bg-transparent border rounded-md border-gray-500 my-4 py-1 px-3 w-[95%]"
            />
          </div>
          <div className="w-[90%] mx-auto">
            <input
              required
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleInputChange}
              placeholder="Email Address"
              className="bg-transparent border rounded-md border-gray-500 my-4 py-1 px-3 w-[95%]"
            />
          </div>
          <div className="w-[90%] mx-auto">
            <textarea
              required
              name="message"
              id="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Leave a Message"
              className="bg-transparent border rounded-md border-gray-500 my-5 py-1 px-3 w-[95%] h-36"
            ></textarea>
            {/* <!-- <input type="text" placeholder="Name"
                                className="bg-transparent border-b-2 border-gray-500 my-5 py-1 w-[95%]"/> --> */}
          </div>

          <div className="w-[90%] mx-auto items">
            <button
              //   onClick={sendButton}
              className="bg-[#3d5168] rounded-full text-white px-1 py-2 text-lg font-semibold flex-1 w-[95%] mb-10"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormInput;
