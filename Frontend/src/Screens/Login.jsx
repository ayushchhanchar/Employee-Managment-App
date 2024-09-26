import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { TiVendorMicrosoft } from "react-icons/ti";
import { FaApple } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <div className='h-screen w-screen bg-white flex items-center justify-center '>
                <div className=' w-[25%] flex-col flex items-center'>
                    <div className='flex items-center justify-center'>
                        <h1 className=' font-bold mb-5 text-2xl'>Welcome Back</h1>
                    </div>
                    <div className='w-full flex flex-col items-center justify-center gap-5  pl-[5%]'>
                        <input className=' border border-w-1 border-black  rounded-md py-2 pr-28 pl-4 w-[90%] ' placeholder='Enter Email'
                        />
                        <div className='w-[90%]'><button className='bg-green-500 py-2 px-2 w-full text-white rounded-md '>Continue</button></div>
                        <div className=''>Don't have an account? <Link to='/register'><a className='text-green-400'>Register</a></Link> </div>
                    </div>
                    <div className='flex items-center justify-center'><h1 className=' text-xl my-2'>OR</h1></div>
                    <div className=' w-full  pl-[10%] flex-col flex gap-4'>
                        <div className='w-[95%]   rounded-md border border-w-2 border-black flex items-center justify-start gap-3  p-4'>
                            <FcGoogle className='text-2xl' />
                            <h3>Continue with Google</h3>
                        </div>
                        <div className='w-[95%]   rounded-md border border-w-2 border-black flex items-center justify-start gap-3 p-4'>
                            <TiVendorMicrosoft className='text-2xl' />
                            <h3>Continue with Microsoft</h3>
                        </div>
                        <div className='w-[95%]  rounded-md border border-w-2 border-black flex items-center justify-start gap-3 p-4'>
                            <FaApple className='text-2xl' />
                            <h3>Continue with Apple</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login