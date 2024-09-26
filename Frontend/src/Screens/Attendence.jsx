import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { CollapsedAtom } from '../atom/Collapsed'
import SideBar from '../components/SideBar'
import HomeNavBar from '../NavigationBar/HomeNavBar'
import HomeNavBar2 from '../NavigationBar/HomeNavBar2'
import Calendar from 'react-calendar'
import '../styles/Calender.css';
import AttendenceNavBar from '../NavigationBar/attendenceNavBar'




const Attendence = ({titles,main}) => {
  const isCollapsed = useRecoilValue(CollapsedAtom);

  const [value, setValue] = useState(new Date());
  return (
    <>
      <SideBar />
      <AttendenceNavBar />
      {/* <HomeNavBar titles={["Myspace"]} /> */}
      <HomeNavBar2 titles={["Attendence Summary"]} name={"mydata"} main={"attendence"} />
      <div className={`${isCollapsed ? 'bg-slate-300 h-[90vh] w-[95vw] float-end p-16 ' : 'bg-slate-300  h-[90vh] w-[80%] float-end  px-28  py-14  gap-28'}`}>
        <Calendar onChange={setValue} value={value} />
      </div>
    </>
  )
}

export default Attendence