import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { CollapsedAtom } from '../atom/Collapsed'
import SideBar from '../components/SideBar'
import DataCard from '../components/DataCard'
import HomeNavBar2 from '../NavigationBar/HomeNavBar2'
import TimeTrackerNavBar from '../NavigationBar/TimeTrackerNavBar'
import { VscDebugStart } from "react-icons/vsc";
import { PiPauseBold } from "react-icons/pi";
import { GrPowerReset } from "react-icons/gr";
import { useRef } from 'react';


import { useStopwatch, useTimer } from 'react-timer-hook'



const TimeTracker = () => {
    const isCollapsed = useRecoilValue(CollapsedAtom);

    const [selectedOption1, setSelectedOption1] = useState(""); // Initial state is empty
    const [selectedOption2, setSelectedOption2] = useState("");
    const [time, setTime] = useState(0); // time in seconds
    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef(null); // Reference to hold the timer

    const handleChange1 = (e) => {
        setSelectedOption1(e.target.value); // Update state when dropdown value changes
    };
    const handleChange2 = (e) => {
        setSelectedOption2(e.target.value); // Update state when dropdown value changes
    };


    useEffect(() => {
        if (isRunning) {
            timerRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }

        return () => {
            clearInterval(timerRef.current); // Cleanup function
        };
    }, [isRunning]);

    const startTimer = () => {
        setIsRunning(true);
    };

    const stopTimer = () => {
        setIsRunning(false);
        clearInterval(timerRef.current);
    };
    const resetTimer = () => {
        setIsRunning(false);
        clearInterval(timerRef.current);
        setTime(0);
    };

    const formatTime = () => {
        const getHours = Math.floor(time / 3600);
        const getMinutes = Math.floor((time % 3600) / 60);
        const getSeconds = time % 60;

        const hours = getHours < 10 ? `0${getHours}` : getHours;
        const minutes = getMinutes < 10 ? `0${getMinutes}` : getMinutes;
        const seconds = getSeconds < 10 ? `0${getSeconds}` : getSeconds;

        return `${hours}:${minutes}:${seconds}`;
    };



    return (
        <>
            <SideBar />
            <TimeTrackerNavBar />
            <HomeNavBar2 titles={["Timelogs"]} name={"mydata"} main={"timetracker"} />
            <div className={`${isCollapsed ? 'bg-slate-300 h-full  w-[95vw] float-end p-16 flex flex-wrap gap-10' : 'bg-slate-300 flex-wrap  h-full w-[80%] float-end  px-28  py-14  flex gap-28'}`}>
                <div className='h-16 w-[95vw] rounded-lg bg-white flex items-center justify-between gap-9 px-14'>
                    <div className='flex justify-center items-center gap-4'>
                        <label>
                            <select className='border text-[15px] border-slate-300 rounded-md px-3 py-2' id="dropdown" value={selectedOption1} onChange={handleChange1}>
                                <option value="">Select Project</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </label>
                        <label>
                            <select className='border  text-[15px] border-slate-300 rounded-md px-3 py-2' id="dropdown" value={selectedOption2} onChange={handleChange2}>
                                <option value="">Select Job</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </label>
                        <label>
                            <input className='border  text-[15px] border-slate-300 rounded-md  pl-2 pr-5 py-2' name='Work' placeholder='what are you working on?' />
                        </label>
                    </div>
                    <div className={`${isCollapsed ? 'flex items-center justify-evenly gap-2  w-96' : 'flex items-center justify-evenly gap-2'}`}>
                        <div className={`${isCollapsed ? 'bg-[#3E6BE0] text-[15px] px-6 py-2 rounded-lg text-white ' : 'bg-[#3E6BE0] text-[15px] px-6 py-2 rounded-lg text-white'}`}>
                            <h1>{formatTime()}</h1>
                        </div>
                        <div className='flex items-center justify-evenly gap-3'>
                            <button className='flex items-center justify-center gap-1 text-red-700' onClick={startTimer}><VscDebugStart/>Start</button>
                            <button className='flex items-center justify-center gap-1 text-black' onClick={stopTimer}><PiPauseBold/>Stop</button>
                            <button className='flex items-center justify-center gap-1 text-green-800' onClick={resetTimer}><GrPowerReset/>Reset</button>
                        </div>
                        
                    </div>

                </div>
                <DataCard />

            </div>
        </>

    )
}

export default TimeTracker



// bg-green-400 text-[15px] px-6 py-2 rounded-md ml-32