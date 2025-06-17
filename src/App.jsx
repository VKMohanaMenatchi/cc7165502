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

import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from "./pages/Home";
import AddEvent from "./pages/AddEvent";
import EditEvent from "./components/EditEvent";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex flex-col">
        
        {/* Navigation */}
        <header className="bg-gradient-to-r from-gray-600 to-indigo-100 shadow-lg">
          <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
            <h1 className="text-3xl font-extrabold text-white tracking-wide">Event Manager</h1>
            <nav className="space-x-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-white text-lg font-medium transition duration-200 ${
                    isActive ? "underline underline-offset-4" : "hover:text-black"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/add"
                className={({ isActive }) =>
                  `text-white text-lg font-medium transition duration-200 ${
                    isActive ? "underline underline-offset-4" : "hover:text-black"
                  }`
                }
              >
                Add Event
              </NavLink>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex justify-center items-start py-10 px-4">
          <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl p-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add" element={<AddEvent />} />
              <Route path="/edit/:id" element={<EditEvent />} /> 
            </Routes>
          </div>
        </main>

        {/* Footer (optional) */}
        <footer className="text-center text-sm text-gray-500 py-4">
          &copy; {new Date().getFullYear()} Event Manager. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
