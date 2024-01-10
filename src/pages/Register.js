//\\ بسم الله الرحمن الرحيم //\\

import React, { useContext, useState } from "react";
//myimports

import { register } from "../api/auth";
import { useMutation } from "@tanstack/react-query";
import UserContext from "../context/UserContext";

//myimports

// Go to Register.js page and import register function from api/auth.js.
//
// Use the useMutation hook with the register function and pass it
// userInfo
//
// Call your mutate function inside the handleFormSubmit function!
//
// Now go to auth.js in the api folder and add the following code
// to your register function:
// const formData = new FormData();
// for (const key in userInfo) formData.append(key, userInfo[key]);
//
// Then, replace the userInfo inside the post request with formData.
//
// This step will enable you to send files with the request
// Login
// Create a function login that takes userInfo as a parameter and
// send a post request to the login end-point with the userInfo .
// (This step is already done)
// Go to Login.js page and import the login function from api/auth.js.
// Use the useMutation hook with the login function and pass it userInfo.
// Call your mutate function inside the handleFormSubmit function!
// ========================
//

//register starts with an uppercase, React component names must start
// with an uppercase letter.
const Register = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext); //used and given

  //register;
  //just write this to importas it was exported as a function
  // useMutation;
  //just write this to import
  //
  // Use the useMutation hook with the register function and pass it
  // userInfo
  // useMutation
  const { mutate } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(userInfo), //take note why arrowfn?
    onSuccess: () => setUser(true),
  });
  //

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };

  const handleFormSubmit = (e) => {
    // e.preventDefault();
    // Add register logic here

    //mywork
    // Call your mutate function inside the handleFormSubmit function!
    e.preventDefault(); //why is this used?

    mutate(); //called it
    //mywork
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center absolute inset-0 z-[-1]">
      <div className="max-w-md w-full px-6 py-8 bg-gray-800 rounded-md shadow-md">
        <h2 className="text-3xl text-white font-semibold mb-6">Register</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-white text-sm font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-white text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="image"
              className="block text-white text-sm font-medium mb-2"
            >
              Profile Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
