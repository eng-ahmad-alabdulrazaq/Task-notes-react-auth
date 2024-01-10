//\\ بسم الله الرحمن الرحيم //\\

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Notes from "./pages/Notes";
import Note from "./pages/Note";
import Users from "./pages/Users";

//myimports
import UserContext from "./context/UserContext"; //imported
import { useEffect, useState } from "react";
import { checkToken } from "./api/auth";
//myimports
// Login
// Create a function login that takes userInfo as a parameter and send a post
// request to the login end-point with the userInfo . (This step is already done)
// Go to Login.js page and import the login function from api/auth.js.
// Use the useMutation hook with the login function and pass it userInfo.
// Call your mutate function inside the handleFormSubmit function!
//
//
// Now go to App.js and import UserContext.
//UserContext //use to import
// Create a user state and give it false as an initial value.
//const [user, setUser] = useState(false); //created but should it be
/////////////////////////////////////////// inside the app? yes
//

// Now wrap the whole app with <UserContext.Provider>
// and pass it a value of [user, setUser].
// Your App should look like this
//
//
//mywork
//mywork
function App() {
  const [user, setUser] = useState(false); //created

  useEffect(() => {
    setUser(checkToken());
  }, []);
  return (
    //wrapped
    <UserContext.Provider value={[user, setUser]}>
      <div className="App font-mono ">
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/notes" Component={Notes} />
          <Route path="/notes/:noteId" Component={Note} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/users" Component={Users} />
        </Routes>
      </div>
    </UserContext.Provider>
    //wrapped
  );
}

export default App;
