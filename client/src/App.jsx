import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import AddEvent from "./pages/AddEvent";
import EditEvent from "./components/EditEvent";
import About from "./pages/About";
import Login from "./pages/Login";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex flex-col">
        {/* Navbar */}
        <Navbar onToggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <main className="flex-1 w-full px-4 py-6 transition-all duration-300">
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-6">
            <Routes>
              <Route path="/" element={<Home sidebarOpen={sidebarOpen} />} />
              <Route path="/add" element={<AddEvent />} />
              <Route path="/edit/:id" element={<EditEvent />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center text-gray-600 py-4 text-sm">
          &copy; {new Date().getFullYear()} Event Manager. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;





// import './App.css'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
// import Home from "./pages/Home";
// import AddEvent from "./components/AddEvent";
// import EditEvent from "./components/EditEvent";
// import About from "./pages/About";
// import Login from "./pages/Login";

// function App() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen((prev) => !prev);
//   };

//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-100">
//         <Navbar onToggleSidebar={toggleSidebar} />
//         <Routes>
//           <Route path="/" element={<Home sidebarOpen={sidebarOpen} />} />
//           <Route path="/add" element={<AddEvent />} />
//           <Route path="/edit/:id" element={<EditEvent />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/login" element={<Login />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;








// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from "./pages/Home";
// import AddEvent from "./pages/AddEvent";
// import EditEvent from "./components/EditEvent";
// import Navbar from './components/Navbar';

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex flex-col">
//         <Navbar />
//         <main className="flex-1 flex justify-center items-start py-10 px-4">
//           <div className="w-full max-w-7xl rounded-3xl p-5">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/add" element={<AddEvent />} />
//               <Route path="/edit/:id" element={<EditEvent />} />
//               {/* Optional Pages */}
//               <Route path="/about" element={<div className="text-center text-lg">Welcome to Event Manager! We help you plan, organize, and keep track of your events in the easiest way possible.
//         Whether it's a personal celebration or a professional gathering, we're here to simplify it.</div>} />
//               <Route path="/login" element={<div className="text-center text-lg">Login/Signup (Coming Soon)</div>} />
//             </Routes>
//           </div>
//         </main>
//         <footer className="text-center text-sm text-gray-500 py-4">
//           &copy; {new Date().getFullYear()} Event Manager. All rights reserved.
//         </footer>
//       </div>
//     </Router>
//   );
// }

// export default App;


// import './App.css'

// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import Home from "./pages/Home";
// import AddEvent from "./pages/AddEvent";

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col bg-gray-50">
//         <nav className="w-full bg-white shadow-md">
//           <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
//             <h1 className="text-2xl font-bold text-gray-800">
//               Event Management
//             </h1>
//             <div className="space-x-6">
//               <Link
//                 to="/"
//                 className="text-blue-800 hover:text-blue-600 font-medium transition-colors"
//               >
//                 Home
//               </Link>
//               <Link
//                 to="/add"
//                 className="text-blue-800 hover:text-blue-600 font-medium transition-colors"
//               >
//                 Add Event
//               </Link>
//             </div>
//           </div>
//         </nav>
//         <main className="flex-1 flex justify-center items-start">
//           <div className="w-full max-w-5xl bg-gray-300 rounded-lg shadow p-8 mt-8 ">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/add" element={<AddEvent />} /> 
//             </Routes>
//           </div>
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import './App.css';
// import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
// import Home from "./pages/Home";
// import AddEvent from "./pages/AddEvent";
// import EditEvent from "./components/EditEvent";

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex flex-col">
        
//         {/* Navigation */}
//         <header className="bg-gradient-to-r from-gray-600 to-indigo-100 shadow-lg">
//           <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
//             <h1 className="text-3xl font-extrabold text-white tracking-wide">Event Manager</h1>
//             <nav className="space-x-6">
//               <NavLink
//                 to="/"
//                 className={({ isActive }) =>
//                   `text-white text-lg font-medium transition duration-200 ${
//                     isActive ? "underline underline-offset-4" : "hover:text-black"
//                   }`
//                 }
//               >
//                 Home
//               </NavLink>
//               <NavLink
//                 to="/add"
//                 className={({ isActive }) =>
//                   `text-white text-lg font-medium transition duration-200 ${
//                     isActive ? "underline underline-offset-4" : "hover:text-black"
//                   }`
//                 }
//               >
//                 Add Event
//               </NavLink>
//             </nav>
//           </div>
//         </header>

//         {/* Main Content */}
//         <main className="flex-1 flex justify-center items-start py-10 px-4">
//           <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl p-10">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/add" element={<AddEvent />} />
//               <Route path="/edit/:id" element={<EditEvent />} /> 
//             </Routes>
//           </div>
//         </main>

//         {/* Footer (optional) */}
//         <footer className="text-center text-sm text-gray-500 py-4">
//           &copy; {new Date().getFullYear()} Event Manager. All rights reserved.
//         </footer>
//       </div>
//     </Router>
//   );
// }

// export default App;
