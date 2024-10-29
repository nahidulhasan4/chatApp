import React from 'react'

const SIgnin = () => {
  return (
    <div className='w-full h-screen flex'>
       <div className='w-2/4 h-full flex justify-end items-center'>
          <div className='mr-[69px] '>
          <h1 className=" text-[34px] font-bold text-secondary ">
            Get started with easily register
          </h1>
          <p className=" text-xl font-normal text-black  opacity-50">
            Free register and you can enjoy it
          </p>
          <div className=' w-[368px]  h-[80px] mt-[61px]  relative '>
          <label
              className= 'text-sm  font-semibold  text-secondary absolute top-[-10px] left-[50px] bg-white px-2  '
            >
              Email Address
            </label>
          <input type="text"  className='w-full h-full  border border-secondary/50 rounded-lg  pl-[50px]'/>
          </div>
          <div className=' w-[368px]  h-[80px] mt-[56px]  relative '>
          <label
              className= 'text-sm  font-semibold  text-secondary absolute top-[-10px] left-[50px] bg-white px-2  '
            >
              
              Full Name
            </label>
          <input  type="text"  className='w-full h-full  border border-secondary/50 rounded-lg  pl-[50px]'/>
          </div>
          <div className=' w-[368px]  h-[80px] mt-[56px]  relative '>
          <label
              className= 'text-sm  font-semibold  text-secondary absolute top-[-10px] left-[50px] bg-white px-2  '
            >
              password
            </label>
          <input  type="password"  className='w-full h-full  border border-secondary/50 rounded-lg  pl-[50px]'/>
          </div>
          <button
              
              className=" bg-primary w-[368px]  py-5 text-xl font-semibold text-white rounded-[86px] mt-[51px] "
            >
              Sign Up
            </button>
            <p className=" text-sm  text-secondary text-center w-[368px] mt-[35px] ">
            Already have an account ?{""}
            <Link to={Signin} className=" text-[#EA6C00] font-bold">Sign In</Link>
          </p>
          </div>
          
        </div>
        <div className='w-2/4 h-full'>
        <img src={SignupImg} alt="" className=' ml-auto w-full h-full object-cover' srcset="" />
        </div>

    </div>
  )
}

export default SIgnin