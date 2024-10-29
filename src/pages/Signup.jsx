import React, { useState } from "react";
import SignupImg from "../assets/Signup.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Signup = () => {
  let [email, setEmail] = useState("");
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  let [emailerr, setEmailerr] = useState("");
  let [nameerr, setNameerr] = useState("");
  let [passworderr, setPassworderr] = useState("");
  
  let [passwordshow, setPasswordshow] = useState(false);

  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailerr("");
  };
  let handleName = (e) => {
    setName(e.target.value);
    setNameerr("");
  };
  let handlePassword = (e) => {
    setPassword(e.target.value);
    setPassworderr("");
  };
  let handleSubmit = () => {
    console.log(name, email, password);
    if (!email) {
      setEmailerr("Email is required");
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailerr("Invalid Email");
    }
    if (!name) {
      setNameerr("Invalid Name");
    }
    if (!password) {
      setPassworderr("required a passwoprd");
    }
  };

  return (
    <>
      <div className="w-full h-screen flex">
        <div className="w-2/4 h-full flex justify-end items-center">
          <div className="mr-[69px] ">
            <h1 className=" text-[34px] font-bold text-secondary ">
              Get started with easily register
            </h1>
            <p className=" text-xl font-normal text-black  opacity-50">
              Free register and you can enjoy it
            </p>
            <div className=" w-[368px]  h-[80px] mt-[61px]  relative ">
              <label className="text-sm  font-semibold  text-secondary absolute top-[-10px] left-[50px] bg-white px-2  ">
                Email Address
              </label>
              <input
                onChange={handleEmail}
                type="text"
                value={email}
                placeholder="Enter your Valid Email"
                className="w-full h-full  border border-secondary/50 rounded-lg  pl-[50px]"
              />
            </div>
            {emailerr && (
              <p className=" text-red-500 text-xl font-normal">{emailerr}</p>
            )}

            <div className=" w-[368px]  h-[80px] mt-[56px]  relative ">
              <label className="text-sm  font-semibold  text-secondary absolute top-[-10px] left-[50px] bg-white px-2  ">
                Full Name
              </label>
              <input
                onChange={handleName}
                value={name}
                type="text"
                placeholder="Enter your  full Name"
                className="w-full h-full  border border-secondary/50 rounded-lg  pl-[50px]"
              />
            </div>
            {nameerr && (
              <p className=" text-red-500 text-xl font-normal">{nameerr}</p>
            )}

            <div className=" w-[368px]  h-[80px] mt-[56px]  relative ">
              <label className="text-sm  font-semibold  text-secondary absolute top-[-10px] left-[50px] bg-white px-2  ">
                password
              </label>
              <input
                onChange={handlePassword}
                value={password}
                type={passwordshow ? "text" : "password"}
                placeholder="Set a strong password"
                className="w-full h-full  border border-secondary/50 rounded-lg  pl-[50px]"
              />
              {passwordshow ? (
              <FaEye
                onClick={() => setPasswordshow(false)}
                className=" text-2xl absolute top-2/4 translate-y-[-50%] right-5 cursor-pointer"
              />
            ) : (
              <FaEyeSlash
                onClick={() => setPasswordshow(true)}
                className=" text-2xl absolute top-2/4 translate-y-[-50%] right-5 cursor-pointer"
              />
            )}
            {passworderr && (
              <p className=" text-red-500 text-xl font-normal">{passworderr}</p>
            )}
            </div>
            
            

            <button
              onClick={handleSubmit}
              className=" bg-primary w-[368px] cursor-pointer  py-5 text-xl font-semibold text-white rounded-[86px] mt-[51px] "
            >
              Sign Up
            </button>
            <p className="text-sm  text-secondary text-center w-[368px] mt-[35px] ">
              Already have an account?
              <a href="#" className="text-[#EA6C00] font-bold">
                {" "}
                Sign in
              </a>
            </p>
          </div>
        </div>
        <div className="w-2/4 h-full">
          <img
            src={SignupImg}
            alt=""
            className=" ml-auto w-full h-full object-cover"
            srcset=""
          />
        </div>
      </div>
    </>
  );
};

export default Signup;
