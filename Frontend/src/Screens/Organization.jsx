import React from 'react'
import { useRecoilValue } from 'recoil'
import { CollapsedAtom } from '../atom/Collapsed'
import SideBar from '../components/SideBar'
import HomeNavBar from '../NavigationBar/HomeNavBar'
import { IoUmbrellaOutline } from "react-icons/io5";
import HomeNavBar2 from '../NavigationBar/HomeNavBar2'

export const Organization = () => {
    const isCollapsed = useRecoilValue(CollapsedAtom);

    return (
        <>
            <SideBar />
            <HomeNavBar />
            <HomeNavBar2 titles={["Overview", "Announcement"]} name={"Organization"} main={"home"} />
            <div className={`${isCollapsed ? ' relative bg-slate-300 min-h-max  w-[95%] float-end   ' : ' bg-slate-300 relative h-[100vh] w-[80%] float-end '}`}>
                <div className='h-40 w-full relative bg-black' >
                    <img className='h-full w-full relative bg-contain bg-center' src="https://images.unsplash.com/photo-1718062455499-c362df48a68d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>

                <div className=' relative h-fit w-fit  '>
                    <div class=" absolute -top-8 left-14 w-72 bg-white border border-gray-200 rounded-lg shadow ">
                        <div class="flex mb-9 flex-col items-center">
                            <img class="w-24 h-24 mt-1  mb-3 rounded-xl bg-black" src="https://penguinui.s3.amazonaws.com/component-assets/avatar-8.webp" alt="Bonnie image" />
                            <h5 class="mb-1 text-xl font-medium text-gray-900 ">Bonnie Green</h5>
                            <span class=" mb-1 text-sm text-gray-500 ">Visual Designer</span>
                            <span class="text-sm text-gray-500 ">00:00:01</span>
                            <div class=" mt-4">
                                <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium border  border-green-400 text-center text-green-500 bg-white rounded-lg hover:bg-green-800 hover:text-white  ">Check-In</a>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="w-full max-w-5xl flex flex-col justify-center  absolute top-32 right-14 p-4 bg-white border border-gray-200 rounded-lg shadow ">
                    <h5 class=" text-center text-2xl mb-5 border-b-2  font-semibold text-gray-900">
                        Services
                    </h5>

                    <div className='flex flex- flex-wrap gap-6 '>
                        <div className=' h-44 p-2  flex-auto bg-white border border-gray-200 rounded-lg shadow w-64 flex flex-col  items-center hover:bg-gray-100  '>
                            <IoUmbrellaOutline className='text-xl font-bold' />
                            <h5 className='ml-2 font-semibold'>Leave Tracker</h5>
                        </div>
                        <div className=' h-44 p-2  flex-auto bg-white border border-gray-200 rounded-lg shadow w-64 flex flex-col  items-center hover:bg-gray-100  '>
                            <IoUmbrellaOutline className='text-xl font-bold' />
                            <h5 className='ml-2 font-semibold'>Leave Tracker</h5>
                        </div> <div className=' h-44 p-2  flex-auto bg-white border border-gray-200 rounded-lg shadow w-64 flex flex-col  items-center hover:bg-gray-100  '>
                            <IoUmbrellaOutline className='text-xl font-bold' />
                            <h5 className='ml-2 font-semibold'>Leave Tracker</h5>
                        </div> <div className=' h-44 p-2  flex-auto bg-white border border-gray-200 rounded-lg shadow w-64 flex flex-col  items-center hover:bg-gray-100  '>
                            <IoUmbrellaOutline className='text-xl font-bold' />
                            <h5 className='ml-2 font-semibold'>Leave Tracker</h5>
                        </div> <div className=' h-44 p-2  flex-auto bg-white border border-gray-200 rounded-lg shadow w-64 flex flex-col  items-center hover:bg-gray-100  '>
                            <IoUmbrellaOutline className='text-xl font-bold' />
                            <h5 className='ml-2 font-semibold'>Leave Tracker</h5>
                        </div> <div className=' h-44 p-2  flex-auto bg-white border border-gray-200 rounded-lg shadow w-64 flex flex-col  items-center hover:bg-gray-100  '>
                            <IoUmbrellaOutline className='text-xl font-bold' />
                            <h5 className='ml-2 font-semibold'>Leave Tracker</h5>
                        </div>
                        


                    </div>
                </div>



            </div>
        </>
    )
}
export default Organization
