import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { CollapsedAtom } from '../atom/Collapsed'
import SideBar from '../components/SideBar'
import HomeNavBar from '../NavigationBar/HomeNavBar'
import HomeNavBar2 from '../NavigationBar/HomeNavBar2'
import Calendar from 'react-calendar'
import '../styles/Calender.css';
import AttendenceNavBar from '../NavigationBar/attendenceNavBar'
// import 'react-calendar/dist/Calendar.css';
import { FaCheckCircle } from "react-icons/fa"; //



const Attendence = ({titles,main}) => {
  const isCollapsed = useRecoilValue(CollapsedAtom);

  const [selectedDate, setSelectedDate] = useState(null); // Date clicked
  const [attendance, setAttendance] = useState({}); // Store attendance data
  const [popupVisible, setPopupVisible] = useState(false); // Control popup visibility
  const [selectedStatus, setSelectedStatus] = useState(''); // Store selected status

  // Handle date click
  const onDateClick = (date) => {
    setSelectedDate(date);
    setPopupVisible(true); // Show popup on date click
  };

  // Handle status selection
  const handleStatusSelect = (status) => {
    setAttendance({
      ...attendance,
      [selectedDate.toDateString()]: status, // Store status for selected date
    });
    setPopupVisible(false); // Close popup after selection
  };

  // Render tile content for marking attendance on the calendar
  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const status = attendance[date.toDateString()];
      if (status === 'Present') return <div className="text-green-600">Present</div>;
      if (status === 'Absent') return <div className="text-red-600">Absent</div>;
      if (status === 'Holiday') return <div className="text-blue-600">Holiday</div>;
    }
    return null;
  };


  return (
    <>
      <SideBar />
      <AttendenceNavBar />
      {/* <HomeNavBar titles={["Myspace"]} /> */}
      <HomeNavBar2 titles={["Attendence Summary"]} name={"mydata"} main={"attendence"} />
      <div className={`${isCollapsed ? 'bg-slate-300  w-[95vw] float-end p-16 ' : 'bg-slate-300  w-[80%] float-end  px-28  py-14  gap-28'}`}>
          <h1 className="text-xl font-bold mb-4">Attendance Calendar</h1>
          <Calendar
            onClickDay={onDateClick}
            tileContent={tileContent}
            className="border rounded-lg shadow-md"
          />

          {/* Popup box for selecting status */}
          {popupVisible && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
                <h2 className="text-lg font-semibold">Select Attendance Status</h2>
                <div className='flex items-center justify-center gap-5'>
                  <button
                    onClick={() => handleStatusSelect('Present')}
                    className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
                  >
                    Present
                  </button>
                  <button
                    onClick={() => handleStatusSelect('Absent')}
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
                  >
                    Absent
                  </button>
                  <button
                    onClick={() => handleStatusSelect('Holiday')}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                  >
                    Holiday
                  </button>
                  <button
                    onClick={() => setPopupVisible(false)}
                    className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}  

      </div>
    </>
  )
}

export default Attendence