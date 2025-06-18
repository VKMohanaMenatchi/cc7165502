import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

function Navbar({ onToggleSidebar }) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      navigate(`/?search=${searchTerm}`);
    }
  };

  return (
    <nav className="w-full bg-gradient-to-r from-blue-900 to-indigo-700 text-white px-6 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
        
        {/* Left Section - Logo & Sidebar Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={onToggleSidebar}
            className="text-2xl hover:text-yellow-300 transition"
            title="Toggle Sidebar"
          >
            <FaBars />
          </button>
          <h1 className="text-2xl font-bold tracking-wide"> Event Manager</h1>
        </div>

        {/* Right Section - Nav Links & Search */}
        <div className="flex items-center gap-4 flex-wrap">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-purple-300 font-medium ${
                isActive ? "underline underline-offset-4" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/add"
            className={({ isActive }) =>
              `hover:text-purple-300 font-medium ${
                isActive ? "underline underline-offset-4" : ""
              }`
            }
          >
            Add Event
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-purple-300 font-medium ${
                isActive ? "underline underline-offset-4" : ""
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `hover:text-black font-medium ${
                isActive ? "underline underline-offset-4" : ""
 }`
            }
          >
            Login
          </NavLink>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search events..."
            className="px-3 py-1 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;



// import { NavLink, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { FaBars } from "react-icons/fa";

// function Navbar({ onToggleSidebar }) {
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate();

//   const handleSearch = (e) => {
//     if (e.key === 'Enter') {
//       navigate(`/?search=${searchTerm}`);
//     }
//   };

//   return (
//     <nav className="w-full bg-blue-900 text-white px-6 py-4 flex justify-between items-center">
//       <div className="flex items-center gap-4">
//         <button onClick={onToggleSidebar} className="text-2xl"><FaBars /></button>
//         <h1 className="text-2xl font-semibold">Event Manager</h1>
//       </div>
//       <div className="flex items-center gap-6">
//         <NavLink to="/" className="hover:text-yellow-300">Home</NavLink>
//         <NavLink to="/add" className="hover:text-yellow-300">Add Event</NavLink>
//         <NavLink to="/about" className="hover:text-yellow-300">About</NavLink>
//         <NavLink to="/login" className="hover:text-yellow-300">Login</NavLink>
//         <input
//           type="text"
//           placeholder="Search..."
//           className="px-2 py-1 rounded text-white"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           onKeyDown={handleSearch}
//         />
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


// import { NavLink, useNavigate } from "react-router-dom";
// import { useState } from "react";

// function Navbar() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate();

//   const handleSearch = (e) => {
//     if (e.key === 'Enter') {
//       navigate(`/?search=${searchTerm}`);
//     }
//   };

//   return (
//     <header className="bg-gray-800 shadow-lg text-white">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         <h1 className="text-2xl font-bold tracking-wide">Event Manager</h1>
//         <nav className="flex items-center gap-6">
//           <NavLink to="/" className="hover:text-purple-300">Home</NavLink>
//           <NavLink to="/add" className="hover:text-purple-300">Add Event</NavLink>
//           <NavLink to="/about" className="hover:text-purple-300">About</NavLink>
//           <NavLink to="/login" className="hover:text-purple-300">Login</NavLink>
//           <input
//             type="text"
//             className="ml-4 px-3 py-1 rounded-lg text-black"
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             onKeyDown={handleSearch}
//           />
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Navbar;
