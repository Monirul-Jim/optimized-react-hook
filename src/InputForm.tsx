import React, { useState } from "react";

const InputForm = () => {
  const [user, setUser] = useState({ name: "", email: "" });
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user, "form submit");
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(user, "on change");
    const inputValue = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [inputValue]: value });
  };
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">
        hello this is input form
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          id=""
          className="border-2  py-2 border-blue-600 rounded-sm"
        />
        <input
          onChange={handleChange}
          type="text"
          name="email"
          id=""
          className="border-2  py-2 border-blue-600 rounded-sm"
        />
        <button
          type="submit"
          className="bg-blue-500 py-2 px-2 text-white font-bold rounded-md space-x-3"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default InputForm;
