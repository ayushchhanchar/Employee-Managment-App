import React from "react";
import { RecoilRoot } from "recoil";
import { Home } from "./Screens/Home";
import { Dashboard } from "./Screens/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import FixedComponent from './components/FixedComponent'
import Calender from "./Screens/Calender";
import TimeTracker from "./Screens/TimeTracker";
import Organization from "./Screens/Organization";
import Attendence from "./Screens/Attendence";
import Announcement from "./Screens/Announcement";
import NotFound from "./Screens/NotFound";
import Login from "./Screens/Login";
// import LeaveTracker from "./Screens/LeaveTracker";
import LeaveSummary from "./Screens/LeaveSummary";
import LeaveBalance from "./Screens/LeaveBalance";
import LeaveRequest from "./Screens/LeaveRequest";
import Holiday from "./Screens/Holiday";
import Register from "./Screens/Register";

function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/home/myspace/Overview" element={<Home />} />
            <Route path="/home/myspace/Dashboard" element={<Dashboard />} />
            <Route path="/home/myspace/Calender" element={<Calender />} />
            <Route
              path="/home/Organization/Overview"
              element={<Organization />}
            />
            <Route
              path="/home/Organization/announcement"
              element={<Announcement />}
            />
            <Route
              path="/timetracker/mydata/timelogs"
              element={<TimeTracker />}
            />
            <Route path="/attendence/mydata/attendence Summary" element={<Attendence />} />
            <Route path="/trackLeave/holiday" element={<Holiday />} />
            <Route
              path="/trackLeave/mydata/leave summary"
              element={<LeaveSummary />}
            />
            <Route
              path="/trackLeave/mydata/leave balance"
              element={<LeaveBalance />}
            />
            <Route
              path="/trackLeave/mydata/leave Request"
              element={<LeaveRequest />}
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
