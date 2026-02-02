

import "./App.css";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Leadtable from "./components/Leadtable";
import Usertable from "./pages/Usertable";
import AccCategory from "./pages/AccCategory";
import Login from "./pages/Login";
import Fsgrp from "./pages/Fsgrp";
import Rocgrp from "./pages/Rocgrp";
import Calendar from "./components/Calendar";
import Logoutpopup from "./pages/Logoutpopup";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      {/* Layout */}
      <Route path="/" element={<Home />}>
        {/* Default dashboard */}
        <Route index element={<Dashboard />} />

        {/* ✅ Calendar */}
        <Route path="calendar" element={<Calendar />} />

        {/* ✅ Single leadtable parent route */}
        <Route path="leadtable" element={<Leadtable />}>
          <Route index element={<Usertable />} />
          {/* <Route path="usertable" element={<Usertable />} /> */}
          <Route path="accCategory" element={<AccCategory />} />
          <Route path="fsgrp" element={<Fsgrp />} />
          <Route path="rocgrp" element={<Rocgrp />} />
        </Route>
      </Route>

      {/* Separate page */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
