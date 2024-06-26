import React from "react";
import image from "./../Assets/slidingImage/image7.jpg";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
// import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <>
      <Navbar />
      <div
        className="text-black w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="flex flex-col justify-center items-center h-full">
          <div className="border border-yellow-400 p-8 rounded-lg  bg-white mt-8 mx-auto">
            <div className="w-full">
              <span className="md:text-4xl text-2xl font-medium ">Signup</span>
            </div>
            <div className="w-full">
              <span className="">Hi, Signup and Join Us✋</span>
            </div>

            {/* <div class="mt-4 w-full">
              <button
                class="bg-yellow-400 hover:bg-yellow-300 transition-all flex items-center 
              justify-center rounded-md p-4 text-black font-medium shadow-xl w-full"
              >
                <FcGoogle class="mr-2" />
                Login with Google
              </button>
            </div> */}
            {/* <div className="text-center mt-6">
              <hr className="mt-6" />
              <span className="text-gray-400">or Login with Email</span>
            </div> */}
            <div className="mt-6">
              <span className=" font-medium">Name</span>
              <div className="  rounded-md">
                <input
                  type="string"
                  placeholder="Enter your Name..."
                  className="p-4 rounded-md focus:outline-none text-black font-medium font-poppins 
                  w-full shadow-xl "
                />
              </div>
            </div>

            <div className="mt-6">
              <span className=" font-medium">Email</span>
              <div className="  rounded-md">
                <input
                  type="string"
                  placeholder="Enter your Email..."
                  className="p-4 rounded-md focus:outline-none text-black font-medium font-poppins 
                  w-full shadow-xl "
                />
              </div>
            </div>

            {/**Password Box */}

            <div className="mt-4">
              <span className="font-medium">Password</span>
              <div className="">
                <input
                  type="password"
                  placeholder="Enter your Password..."
                  className="p-4 shadow-xl rounded-md focus:outline-none text-black font-medium font-poppins w-full"
                />
              </div>
            </div>

            <div className="mt-4">
              <span className="font-medium">Confirm your Password</span>
              <div className="">
                <input
                  type="password"
                  placeholder="Re-Enter your Password..."
                  className="p-4 shadow-xl rounded-md focus:outline-none text-black font-medium font-poppins w-full"
                />
              </div>
            </div>

            <div className="mt-8">
              <button
                className="bg-yellow-400 hover:bg-yellow-300 transition-all w-full 
              rounded-md p-4 text-black font-medium shadow-xl"
              >
                Signup
              </button>
            </div>

            <div className="w-full flex gap-1 mt-4">
              <div className="">Already Have an Account </div>
              <div className="font-semibold hover:text-gray-700 transition-all">
                <ul>
                  <li>
                    <Link to="/login">Login Here now</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
