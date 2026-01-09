import React from "react";

const Contact = () => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold my-4">ContactUs Page</h1>
      <div>
        <form className="flex flex-col mx-auto w-160 gap-4 bg-gray-100 p-8 rounded-xl shadow">
          <input
            className="border p-2 mb-4 rounded-lg"
            type="input"
            placeholder="Enter Email"
          />
          <textarea
            className="border p-2 rounded-lg"
            cols={3}
            placeholder="Write something"
          />
          <button className="bg-amber-500 w-fit text-white px-4 py-2 cursor-pointer mx-auto rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
