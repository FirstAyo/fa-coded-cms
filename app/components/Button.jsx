import React from "react";

function Button({ text = "" }) {
  return (
    <div>
      <button className="bg-red-700 text-white px-5 py-2 rounded-md">
        {text}
      </button>
    </div>
  );
}

export default Button;
