// import "./App.css";
// import Home from "./components/Home";
// import Dashboard from "./components/Dashboard";
// import Leadtable from "./components/Leadtable";
// import Usertable from "./pages/Usertable";
// import Login from "./pages/Login";
// import { Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <Routes>
//       {/* Layout */}
//       <Route path="/" element={<Home />}>
//         {/* Default dashboard */}
//         <Route index element={<Dashboard />} />

//         {/* Parent route */}
//         <Route path="leadtable" element={<Leadtable />}>
//           {/* ✅ Default child (so /leadtable shows Usertable) */}
//           <Route path="usertable" element={<Usertable />} />
//           <Route index element={<Usertable />} />
//           {/* <Route path="userroletable" element={<Userroletable />} /> */}
//         </Route>

//         <Route path="leadtable" element={<Leadtable />}>
//           {/* ✅ Default child (so /leadtable shows Usertable) */}
//           <Route path="userroletable" element={<Userroletable />} />
//           <Route index element={<Userroletable />} />
//           {/* <Route path="userroletable" element={<Userroletable />} /> */}
//         </Route>
//       </Route>

//       {/* Separate page */}
//       <Route path="/login" element={<Login />} />
//     </Routes>
//   );
// }

// export default App;




import "./App.css";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Leadtable from "./components/Leadtable";
import Usertable from "./pages/Usertable";
import Userroletable from "./pages/Userroletable";
import Login from "./pages/Login";
import Calendar from "./components/Calendar";

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
          <Route path="usertable" element={<Usertable />} />
          <Route path="userroletable" element={<Userroletable />} />
        </Route>
      </Route>

      {/* Separate page */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
