/*eslint-disable*/
import React from "react";
import { Link, useHistory } from "react-router-dom";
// components

const Navbar = (props) => {
  let navigate = useHistory ();

  const [userLogin, setUserLogin] = '';
  const parseData = JSON.parse(localStorage.getItem("logged_user"));
  const name = parseData ? parseData.data.first_name + " " + parseData.data.last_name : '';
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const logout = () => {
    window.localStorage.clear();
    navigate.push('/');

  }
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              <img src={require("assets/img/logs4u.jpg").default} width="150px" />
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            {/* <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index-navbar"
                >
                  <i className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                  Docs
                </a>
              </li>
            </ul> */}
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {/* <li className="flex items-center">
                <IndexDropdown />
              </li> */}
              <li className="flex items-center">
                <Link
                  to="/"
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                >
                  Find Services
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  to="/about"
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                >
                  About
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  to="/contact"
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                >
                  Contact
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  to="/auth/ProviderRegister"
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                >
                  Register As A Professional
                </Link>
              </li>

              <li className="flex items-center">
                {name === '' ?
                  <Link
                    to="/auth/login"
                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  >
                    <i className="fas fa-user"></i>&nbsp;&nbsp;Sign Up / Login
                  </Link>
                  :
                  <Link
                    to="/profile"
                    className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  >
                    Profile
                  </Link>
                }
              </li>
              {name != '' ?
                <li className="flex items-center">
                  <button
                    onClick={logout}
                    className="bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                  >
                    Logout
                  </button>
                </li>
                : null}

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;