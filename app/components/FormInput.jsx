"use client";
import React from "react";

function FormInput({ style }) {
  function sendButton() {
    alert(
      "I am working on validating user input and getting your messages when you try to contact me. This form should be able to work in the coming days. In the main time, you can click on any of the Social Media Icons( to your left in desktop view and top of this form in mobile view) to contact me. Thank you for your understanding"
    );
  }

  return (
    <>
      {/* <!-- form section starts here --> */}
      <div className="pt-2 mx-8 mb-10" style={{ width: '95%'}}>
        <form
          action=""
          className="w-[100%] text-black bg-white shadow-lg border border-red-800 font-mono"
        >
          <h1 className="text-2xl py-5 w-[90%] mx-auto">Get in touch</h1>
          <p className="text-sm text-gray-500 w-[90%] mx-auto">
            Ready to start your next project or have any questions? Feel free to
            reach out to me using the form below.
          </p>
          <div className="w-[90%] mx-auto">
            <input
              type="text"
              placeholder="Name"
              className="bg-transparent border-b-2 border-gray-500 my-5 py-1 px-3 w-[95%]"
            />
          </div>
          <div className="w-[90%] mx-auto">
            <input
              type="text"
              placeholder="Email Address"
              className="bg-transparent border-b-2 border-gray-500 my-5 py-1 px-3 w-[95%]"
            />
          </div>
          <div className="w-[90%] mx-auto">
            <textarea
              name=""
              id=""
              placeholder="Leave a Message"
              className="bg-transparent border-2 border-gray-500 my-5 py-1 px-3 w-[95%] h-36"
            ></textarea>
            {/* <!-- <input type="text" placeholder="Name"
                                className="bg-transparent border-b-2 border-gray-500 my-5 py-1 w-[95%]"/> --> */}
          </div>

          <div className="w-[90%] mx-auto items">
            <button
              onClick={sendButton}
              className="bg-red-800 rounded-full text-white px-1 py-2 text-lg font-semibold flex-1 w-[95%] mb-10"
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
