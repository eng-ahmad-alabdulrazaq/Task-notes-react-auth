//\\ بسم الله الرحمن الرحيم //\\

import { useMutation } from "@tanstack/react-query";
import instance from ".";
//myimports
// In auth.js , import jwt_decode from jwt-decode
// and create a function checkToken.
import jwt_Decode from "jwt-decode";
//myimports

//mywork
// In auth.js create the storeToken function
const storeToken = (token) => {
  localStorage.setItem("token", token);
};

// and create a function checkToken.
const checkToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  }
  return false;
};

const removeToken = () => {
  localStorage.removeItem("token");
};

//mywork
//
// Now go to both login and register functions
// and call storeToken() after getting the data
// and pass it your data.token
//
const login = async (userInfo) => {
  const { data } = await instance.post("/auth/login", userInfo);
  storeToken(data.token); //called
  return data;
  //login code
  // const login = async (userInfo) => {
  //   try {
  //     const { data } = await instance.post("/auth/login", userInfo);
  //     storeToken(data.token); // <--- This
  //     return data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  //login code
};
// Register
// Create a function register that takes userInfo as a parameter and
// send a post request to the register end-point with the userInfo . (This step is already done)
//
//
const register = async (userInfo) => {
  // Now go to auth.js in the api folder and add the following code
  // to your register function:
  // const formData = new FormData();
  // for (const key in userInfo) formData.append(key, userInfo[key]);
  // Then, replace the userInfo inside the post request with formData.
  //
  const formData = new FormData(); //added
  for (const key in userInfo) formData.append(key, userInfo[key]); //added
  //
  // const { data } = await instance.post("/auth/register", userInfo); old
  const { data } = await instance.post("/auth/register", formData); //new
  storeToken(data.token); //called
  return data;
  //register code
  // const register = async (userInfo) => {
  //   try {
  //     // This is for seding the request with files
  //     const formData = new FormData();
  //     for (const key in userInfo) formData.append(key, userInfo[key]);
  //     // END
  //     const { data } = await instance.post("/auth/register", formData);
  //     storeToken(data.token); // <--- This
  //     return data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  //register code
};
// Use the useMutation hook with the register function and pass it
// userInfo
// failure:const { mutate } = useMutation({});
// fail:const mutate = async (userInfo) => {
// fail:useMutation  return ;
// fail:};
// trying to use mutation

// trying to use mutation
//
const me = async () => {
  const { data } = await instance.get("/auth/me");
  return data;
};

const getAllUsers = async () => {
  const { data } = await instance.get("/auth/users");
  return data;
};

// Go to auth.js in the api folder
// Create a function logout that removes
// the token from the localStorage using removeItem.
const logout = () => {
  localStorage.removeItem("token");
};
//
export { login, register, me, getAllUsers, checkToken, removeToken, logout }; //exported logout
