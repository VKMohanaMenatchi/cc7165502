import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import Sidebar from "../components/Sidebar";
import { useLocation } from "react-router-dom";

function Home({ sidebarOpen }) {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState("all");

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("search")?.toLowerCase() || "";

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("Event")) || [];
    setEvents(stored);
  }, []);

  const handleDelete = (id) => {
    const updated = events.filter((e) => e.id !== id);
    localStorage.setItem("Event", JSON.stringify(updated));
    setEvents(updated);
  };

  const today = new Date().toISOString().split("T")[0];
  const filteredEvents = events.filter((e) => {
    if (searchTerm && !e.Event.toLowerCase().includes(searchTerm) && !e.Venue.toLowerCase().includes(searchTerm)) {
      return false;
    }
    if (filter === "past") return e.Date < today;
    if (filter === "today") return e.Date === today;
    if (filter === "future") return e.Date > today;
    return true;
  });

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      <Sidebar filter={filter} setFilter={setFilter} isOpen={sidebarOpen} />

      <div className={`transition-all duration-300 ease-in-out p-6 ${sidebarOpen ? 'ml-64' : ''}`}>
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-indigo-700 drop-shadow-lg">🎉 Your Events</h1>
          <p className="text-gray-600 mt-2 text-md">Manage and filter your event list easily.</p>
        </div>

        {filteredEvents.length === 0 ? (
          <div className="text-gray-500 text-xl text-center py-20">
            No matching events found.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} Event={event} onDelete={handleDelete} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;



// import EventCard from '../components/EventCard';
// import Sidebar from '../components/Sidebar';
// import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// function Home() {
//   const [events, setEvents] = useState([]);
//   const [filter, setFilter] = useState('all');
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const searchTerm = searchParams.get('search')?.toLowerCase() || '';

//   useEffect(() => {
//     const stored = JSON.parse(localStorage.getItem('Event')) || [];
//     setEvents(stored);
//   }, []);

//   const handleDelete = (id) => {
//     const updated = events.filter((e) => e.id !== id);
//     localStorage.setItem("Event", JSON.stringify(updated));
//     setEvents(updated);
//   };

//   const today = new Date().toISOString().split('T')[0];

//   const filtered = events.filter((e) => {
//     const date = e.Date;
//     if (searchTerm && !e.Event.toLowerCase().includes(searchTerm) && !e.Venue.toLowerCase().includes(searchTerm)) return false;

//     if (filter === 'past') return date < today;
//     if (filter === 'today') return date === today;
//     if (filter === 'future') return date > today;
//     return true;
//   });

//   return (
//     <div className="flex flex-col md:flex-row gap-6">
//       <Sidebar filter={filter} setFilter={setFilter} />
//       <div className="flex-1">
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {filtered.length > 0 ? (
//             filtered.map((event) => (
//               <EventCard key={event.id} Event={event} onDelete={handleDelete} />
//             ))
//           ) : (
//             <div className="text-gray-500 text-lg">No events found.</div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;


// import EventCard from '../components/EventCard';
// import { useState, useEffect } from 'react';

// function Home() {
//     const [Events, setEvents] = useState([]);
//     useEffect(() => {
//         const stored = JSON.parse(localStorage.getItem('Events')) || [];
//         setEvents(stored);
//     }, []);
//     return (
//         <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
//             { Events.length === 0 ? (
//                 <p>No Events added yet.</p>
//             ) : (
//                 Events.map((s) => (
//                     <EventCard key={s.id} Event={s} />
//                 ))
//             )}
//         </div>
//     )
// } 

// export default Home;


// import EventCard from '../components/EventCard';
// import { useState, useEffect } from 'react';

// function Home() {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     const stored = JSON.parse(localStorage.getItem('Events')) || [];
//     setEvents(stored);
//   }, []);

//   const handleDelete = (id) =>{
//         const updated = Events.filter((s) => s.id !== id);
//         localStorage.setItem("Events",JSON.stringify(updated));
//         setEvents(updated);
//     }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 py-12 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-5xl font-extrabold text-blue-800 drop-shadow-sm mb-2">
//             🎉 Event Management Portal
//           </h1>
//           <p className="text-gray-700 text-lg">
//             View and manage your special events with style and ease.
//           </p>
//         </div>

//         {/* Event Cards */}
//         {events.length === 0 ? (
//           <div className="text-center text-gray-600 text-xl">
//             No events added yet. Add one to get started!
//           </div>
//         ) : (
//           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             {events.map((event) => (
//               <div
//                 key={event.id}
//                 className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
//               >
//                 <EventCard Event={event} />
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Home;



// import EventCard from '../components/EventCard';
// import { useState, useEffect } from 'react';

// function Home() {
//   const [event, setEvent] = useState([]);

//   useEffect(() => {
//     const stored = JSON.parse(localStorage.getItem('Event')) || [];
//     setEvent(stored);
//   }, []);

//   const handleDelete = (id) => {
//     const updated = event.filter((s) => s.id !== id);
//     localStorage.setItem("Event", JSON.stringify(updated));
//     setEvent(updated);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 py-12 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-5xl font-extrabold text-blue-800 drop-shadow-sm mb-2">
//             🎉 Event Management Portal
//           </h1>
//           <p className="text-gray-700 text-lg">
//             View and manage your special events with style and ease.
//           </p>
//         </div>

//         {/* Event Cards */}
//         {event.length === 0 ? (
//           <div className="text-center text-gray-600 text-xl">
//             No events added yet. Add one to get started!
//           </div>
//         ) : (
//           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             {event.map((event) => (
//               <div
//                 key={event.id}
//                 className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
//               >
//                 <EventCard Event={event} onDelete={handleDelete} />
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Home;
