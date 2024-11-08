import React, { useState, createRef } from "react";
import { FaHome } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import Nahid from "../assets/nahid.png"
import { FaCloudUploadAlt } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { GrLogout } from "react-icons/gr";


import { Link, useLocation } from "react-router-dom";


const Sidebar = () => {
  return (
    <div className=" h-screen py-9 px-8  rounded-4xl ">
      <div className=" w-[186px] h-full rounded-3xl bg-primary ">
        <div className=" text-center pt-9">
          <div className="w-[100px] h-[100px] group relative overflow-hidden  mx-auto rounded-full  ">
            <img className=" w-full h-full  " src={Nahid} alt="" />


            <div  className="w-full h-full cursor-pointer bg-black/50 opacity-0  group-hover:opacity-100 absolute top-0 left-0 flex justify-center items-center">
            <FaCloudUploadAlt className=" text-white text-2xl" />

            </div>
          </div>
        </div>
        <h2 className="text-white text-xl text-center font-bold font-nunito mt-3">
          Nahid hasan
        </h2>
        <div className="w-full h-[89px] relative  mt-[18px] ">
          <Link to='/'>
          <div className={`${location.pathname=="/" && "w-[168px] h-[89px] bg-white ml-auto relative rounded-s-[20px] after:w-[10px] after:h-full after:absolute after:top-0 after:right-0 after:bg-primary   after:sh after:rounded-s-[25px] "}`}></div>
          <FaHome className={`${location.pathname =='/'? " text-[46px] text-primary absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] " :" w-[46px] h-[43] text-[#BAD1FF] absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]  "}`} />
          
          </Link>
        </div>
        <div className="w-full h-[89px] relative  mt-[57px] ">
          <Link >
          <div className={`${location.pathname=="/message" && "w-[168px] h-[89px] bg-white ml-auto relative rounded-s-[20px] after:w-[10px] after:h-full after:absolute after:top-0 after:right-0 after:bg-primary   after:sh after:rounded-s-[25px] "}`} ></div>

          <IoIosNotificationsOutline 
          className={`${location.pathname =='/message'? " text-[46px] text-primary absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] " :" text-[46px] text-[#BAD1FF] absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]  "}`} />
          </Link>
        </div>
        <div className="w-full h-[89px] relative  mt-[57px] ">
          <div className="hidden w-[168px] h-[89px] bg-white ml-auto relative rounded-s-[20px] after:w-[10px] after:h-full after:absolute after:top-0 after:right-0 after:bg-primary   after:sh after:rounded-s-[25px] "></div>

          <CiSettings  className=" text-[46px] text-[#BAD1FF] absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]  " />
        </div>
        <div className="w-full h-[89px] relative  mt-[57px] ">
          <div className="hidden w-[168px] h-[89px] bg-white ml-auto relative rounded-s-[20px] after:w-[10px] after:h-full after:absolute after:top-0 after:right-0 after:bg-primary   after:sh after:rounded-s-[25px] "></div>

          <GrLogout  className=" text-[46px] text-[#BAD1FF] absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]  " />
        </div>
        <div className="w-full h-[89px] relative  mt-[57px] ">
          <div className="hidden w-[168px] h-[89px] bg-white ml-auto relative rounded-s-[20px] after:w-[10px] after:h-full after:absolute after:top-0 after:right-0 after:bg-primary   after:sh after:rounded-s-[25px] "></div>

          <GrLogout  className=" text-[46px] text-[#BAD1FF] absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]  " />
        </div>
      </div>

     

        {/* <div className="w-full h-screen bg-black/70 absolute top-0 left-0 flex justify-center items-center">
          <div className="w-[500px]  bg-white  rounded-md p-5">
            <h1 className=" font-nunito text-2xl font-semibold  text-primary">Upload your profile photo</h1>
            <input  className=" font-nunito text-xl font-semibold  text-primary mt-4" type="file" />
           
            <button
         
              className=" bg-primary  px-4 py-2 text-md lg:text-xl font-semibold text-white rounded-2xl mt-[51px] "
            >
              Submit
            </button>
            <button
             
              className=" bg-red-500 ml-2  px-4 py-2 text-md lg:text-xl font-semibold text-white rounded-2xl mt-[51px] "
            >
              Cancel
            </button>
          </div>
        </div> */}
      
    </div>
  )
}

export default Sidebar