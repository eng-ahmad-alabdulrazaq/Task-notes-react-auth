import axios from "axios";

const instance = axios.create({
  baseURL: "https://task-react-auth-backend.eapi.joincoded.com/api",

  // baseURL: "https://task-react-auth.herokuapp.com/api",
  // https://task-react-auth-backend.eapi.joincoded.com/api
});
// In  index.js inside the api folder, use your instance to
// create an interceptor using the interceptors.request.
// use() and pass it an anonymous function.
// If the token is in the localStorage then config.headers.authorization = token.
// return config.
// instance.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });
//
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
