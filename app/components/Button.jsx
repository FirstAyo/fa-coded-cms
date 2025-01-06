import React from "react";

function Button({ text = "" }) {
  return (
    <div>
      <button className="bg-gradient-to-r from-purple-700 via-orange-700 to-red-800 text-white px-5 py-2 rounded-md">
        {text}
      </button>
    </div>
  );
}

export default Button;
