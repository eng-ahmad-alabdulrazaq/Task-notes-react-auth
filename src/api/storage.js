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
