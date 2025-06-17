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



import EventCard from '../components/EventCard';
import { useState, useEffect } from 'react';

function Home() {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('Event')) || [];
    setEvent(stored);
  }, []);

  const handleDelete = (id) => {
    const updated = event.filter((s) => s.id !== id);
    localStorage.setItem("Event", JSON.stringify(updated));
    setEvent(updated);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-blue-800 drop-shadow-sm mb-2">
            🎉 Event Management Portal
          </h1>
          <p className="text-gray-700 text-lg">
            View and manage your special events with style and ease.
          </p>
        </div>

        {/* Event Cards */}
        {event.length === 0 ? (
          <div className="text-center text-gray-600 text-xl">
            No events added yet. Add one to get started!
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {event.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <EventCard Event={event} onDelete={handleDelete} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
