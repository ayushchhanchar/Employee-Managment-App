import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { CollapsedAtom } from '../atom/Collapsed'
import SideBar from '../components/SideBar'
import HomeNavBar from '../NavigationBar/HomeNavBar'
import HomeNavBar2 from '../NavigationBar/HomeNavBar2'
import Calendar from 'react-calendar'
import '../styles/Calender.css';
import AttendenceNavBar from '../NavigationBar/attendenceNavBar'
import 'react-calendar/dist/Calendar.css';
import { FaCheckCircle } from "react-icons/fa"; //




const Attendence = ({titles,main}) => {
  const isCollapsed = useRecoilValue(CollapsedAtom);

  const [value, setValue] = useState(new Date()); // Holds the selected date
  const [status, setStatus] = useState("Present"); // Holds the selected status
  const [markedDates, setMarkedDates] = useState({}); // Stores marked dates with statuses

   // Handle dropdown change
   const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  // Handle date selection and marking the date with status
  const onDateChange = (date) => {
    setValue(date);
    const dateKey = date.toDateString();

    setMarkedDates((prevMarkedDates) => ({
      ...prevMarkedDates,
      [dateKey]: status
    }));
  };

  // Function to determine the class for the tile based on the status
  const tileClassName = ({ date, view }) => {
    const dateKey = date.toDateString();
    if (markedDates[dateKey]) {
      switch (markedDates[dateKey]) {
        case "Present":
          return "bg-green-100 border-green-500";
        case "Absent":
          return "bg-red-100 border-red-500";
        case "Holiday":
          return "bg-yellow-100 border-yellow-500";
        default:
          return "";
      }
    }
    return "";
  };



  return (
    <>
      <SideBar />
      <AttendenceNavBar />
      {/* <HomeNavBar titles={["Myspace"]} /> */}
      <HomeNavBar2 titles={["Attendence Summary"]} name={"mydata"} main={"attendence"} />
      <div className={`${isCollapsed ? 'bg-slate-300  w-[95vw] float-end p-16 ' : 'bg-slate-300  w-[80%] float-end  px-28  py-14  gap-28'}`}>
         {/* Dropdown to select status */}
      <div className="mb-4">
        <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-700">
          Select Status for {value.toDateString()}
        </label>
        <select
          id="status"
          value={status}
          onChange={handleStatusChange}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
          <option value="Holiday">Holiday</option>
        </select>
      </div>

      {/* Calendar */}
      <Calendar
        onChange={onDateChange}
        value={value}
        tileClassName={tileClassName} // Add classes to tiles based on status
      />

      {/* Legend */}
      <div className="mt-4 flex space-x-4">
        <div className="flex items-center">
          <FaCheckCircle className="text-green-500" />
          <span className="ml-2">Present</span>
        </div>
        <div className="flex items-center">
          <FaCheckCircle className="text-red-500" />
          <span className="ml-2">Absent</span>
        </div>
        <div className="flex items-center">
          <FaCheckCircle className="text-yellow-500" />
          <span className="ml-2">Holiday</span>
        </div>
      </div>
      </div>
    </>
  )
}

export default Attendence