import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
//myimports
import { useContext } from "react"; // imported
import UserContext from "../context/UserContext"; //imported
import { logout, removeToken } from "../api/auth";
//myimports
//
// Now go to NavBar.js inside your components folder,
// and import useContext (from react) and UserContext
// that we just created
// Use useContext hook for [user and setUser] and give
// it the (UserContext). Hint:
// const [user, setUser] = useContext(UserContext);
//
const Navbar = () => {
  // Use useContext hook for [user and setUser] and give
  // it the (UserContext). Hint:
  // const [user, setUser] = useContext(UserContext);
  const [user, setUser] = useContext(UserContext); //used and given

  // Then check if the user is true, show the logout button,
  // if false show the register and login buttons.
  // (hint: search ternary operator).
  // {
  //   user ? <> /*components*/ </> : <> /*components*/ </>;
  // }
  //   user ? <> /*components*/ </> : <> /*components*/ </>;
  const handleLogout = () => {
    logout();
    removeToken();
    setUser(false);
  };

  // Now go to NavBar.js inside your components folder
  // create a function handleLogout that calls the logout
  // function from api/auth.js
  // use setUser from the useContext to set the user to false
  // Finally, Pass the handleLogout function to the onClick
  // method of the logout button.

  //
  return (
    // condition ? exprIfTrue : exprIfFalse
    // Then check if the user is true, show the logout button,
    // if false show the register and login buttons. (hint: search ternary operator).
    // marker
    // {
    //   user==true ? <> /*components*/ </> : <> /*components*/ </>;
    // }

    // user==true ? <> /*components*/ </> : <> /*components*/ </>;
    <>
      {/* workin progress */}

      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/">
                <span className="font-semibold text-xl text-white">
                  Our Notes
                </span>
              </Link>
            </div>
            <div className="block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/notes"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Notes
                </NavLink>
                <NavLink
                  to="/users"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Users
                </NavLink>
                {user == true ? (
                  <button
                    onClick={() => {
                      //logout();
                      handleLogout();
                      // Finally, Pass the handleLogout function to the onClick
                      // method of the logout button.
                    }}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    logout
                  </button>
                ) : (
                  <>
                    <NavLink
                      to="/login"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Login
                    </NavLink>
                    <NavLink
                      to="/register"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Register
                    </NavLink>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
