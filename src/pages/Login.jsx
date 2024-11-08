import React, { useState } from "react";
import SigninImg from "../assets/Signin.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {  Link, useNavigate } from "react-router-dom";
import GoogleImage from "../assets/google.png";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
 
} from "firebase/auth";

const Login = () => {
  const auth = getAuth();
  let navigate = useNavigate();

  const provider = new GoogleAuthProvider();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [emailerr, setEmailerr] = useState("");
  let [passworderr, setPassworderr] = useState("");
  let [passwordshow, setPasswordshow] = useState(false);
  let [loginEr, setLoginEr] = useState('')

  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailerr("");
  };

  let handlePassword = (e) => {
    setPassword(e.target.value);
    setPassworderr("");
  };
  let handleSubmit = () => {
   
    if (!email) {
      setEmailerr("Email is required");
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailerr("Invalid Email");
    }
    if (!password) {
      setPassworderr("required a passwoprd");
    }
    if (email && password) {


      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;

          

          navigate('/')

        })
        .catch((error) => {
          const errorCode = error;
          console.log(errorCode)
          if (error.code.includes("auth/invalid-credential")) {
            setLoginEr("Invalid-credential");
          }
        });
    }
  };

  let handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((userCredential) => {

        set(ref(db, "users/" + userCredential.user.uid), {
          name: userCredential.user.displayName,
          email: userCredential.user.email,
          image: userCredential.user.photoURL,
            date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}- ${new Date().getDate()}-${new Date().getHours()}-${new Date().getMinutes()}-${new Date().getSeconds()}`
        }).then(() => {
          setTimeout(() => {

            navigate("/");
          }, 2000);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <>
      <div className="w-full h-screen flex">
        <div className="w-2/4 h-full flex justify-end items-center">
          <div className="mr-[69px] ">
            <h1 className=" text-[34px] font-bold text-secondary ">
            Login to your account!
            </h1>
            <div className=" flex lg:block">
            <button onClick={handleGoogleLogin} className=" mt-5">
              <img src={GoogleImage} alt="" />
            </button>
          
          </div>
            <div className=" w-[368px]  h-[80px] mt-[61px]  relative ">
              <label className="text-sm  font-semibold  text-secondary absolute top-[-10px] left-[50px] bg-white px-2  ">
                Email Address
              </label>
              <input
                onChange={handleEmail}
                type="text"
                value={email}
                placeholder="Enter your Valid Email"
                className={`w-full h-full  border-b ${
                  emailerr ? "border-red-500/50" : "border-secondary/50"
                }   pl-[50px]`}
              />
            </div>
            {emailerr && (
              <p className=" text-red-500 text-xl font-normal">{emailerr}</p>
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
                className={`w-full h-full  border-b ${
                  emailerr ? "border-red-500/50" : "border-secondary/50"
                }   pl-[50px]`}
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
                <p className=" text-red-500 text-xl font-normal">
                  {passworderr}
                </p>
              )}
            </div>

            <button
              onClick={handleSubmit}
              className=" bg-primary w-[368px] cursor-pointer  py-5 text-xl font-semibold text-white rounded-[86px] mt-[51px] "
            >
             Log in
            </button>
            <p className="text-sm  text-secondary text-center w-[368px] mt-[35px] ">
              Already have an account?
              {" "}
            <Link to="/Signup" className=" text-[#EA6C00] font-bold">
              Sign Up
            </Link>
            </p>
            <h4 className="mt-5 text-red-500 ">{loginEr}</h4>
          </div>
        </div>
        <div className="w-2/4 h-full">
          <img
            src={SigninImg}
            alt=""
            className=" ml-auto w-full h-full object-cover"
            srcset=""
          />
        </div>
      </div>
    </>
  );
};

export default Login;
