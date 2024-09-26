import React from 'react'
import { useRecoilState } from 'recoil';
import { profileAtom } from '../atom/Collapsed';
import { IoClose } from "react-icons/io5";
import { PiSignOutBold } from "react-icons/pi";


const Profile = () => {
    const [isprofile, setIsprofile] = useRecoilState(profileAtom);


    return (
        <div className={`transition-transform duration-500 rounded-lg ease-in-out transform ${isprofile ? "translate-x-8" : "translate-x-[130%]"} fixed h-64 w-56 top-16 right-12 z-50  bg-slate-300 shadow-lg`} >
            <div className="flex justify-between items-center gap-4 border-b-2 border-slate-100 font-semibold p-3">
                <h2 className="text-slate-900">Profile</h2>
                <IoClose  onClick={() => setIsprofile(!isprofile)} className="text-slate-900  cursor-pointer text-2xl" />
            </div>
            <div className="flex flex-col items-start justify-center gap-4 p-4">
                <h3>
                    Anmol Mittal
                </h3>
                <h3>
                    AnmolMittal@abc.com
                </h3>
                <h3>
                    <span>User Id: 60032781984</span>
                </h3>
                <div  className=' cursor-pointer flex gap-2  flex-row text-md  w-full mt-6 justify-center items-center text-red-500'>
                    <PiSignOutBold  />
                    <h5>Sign Out</h5>
                </div>
            </div>
        </div>
    )
}

export default Profile