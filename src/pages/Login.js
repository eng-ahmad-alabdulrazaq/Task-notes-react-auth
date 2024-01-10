//\\ بسم الله الرحمن الرحيم //\\

import React, { useState } from "react";
//myimports
// Go to Login.js page and import the login function from api/auth.js.
import { login } from "../api/auth"; //imported
import { useMutation } from "@tanstack/react-query";
//myimports
//
// Use the useMutation hook with the login function and pass it userInfo.
// Call your mutate function inside the handleFormSubmit function!
//
const Login = () => {
  const [userInfo, setUserInfo] = useState({});

  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  //mywork
  // Use the useMutation hook with the login function and pass it userInfo.
  // Call your mutate function inside the handleFormSubmit function!
  const { mutate } = useMutation({
    mutationFn: () => login(userInfo),
    // const mutation = useMutation({ mutationKey: ['addTodo'] })
    mutationKey: ["login"],
  });
  //mywork

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    mutate(); //called
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center absolute inset-0 z-[-1]">
      <div className="max-w-md w-full px-6 py-8 bg-gray-800 rounded-md shadow-md">
        <h2 className="text-3xl text-white font-semibold mb-6">Login</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-white text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              name="password"
              type="password"
              id="password"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              //mywork
              // Use the useMutation hook with the login function and
              // pass it userInfo.

              // onClick={} by arrow function login
              // wont be called unless a click happens
              //
              //{login()} will call the function infinitly
              //
              //onclick={login} will be called on click only
              // api/auth.js
              //mywork
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
