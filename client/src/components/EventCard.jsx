import { useNavigate } from "react-router-dom";
import { FaRupeeSign, FaMapMarkerAlt, FaCalendarDay, FaClock, FaPhoneAlt } from "react-icons/fa";

function EventCard({ Event, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-tr from-indigo-100 via-white to-purple-100 rounded-3xl shadow-xl p-6 backdrop-blur-sm border border-indigo-200 hover:shadow-2xl transition-all duration-300">
      {/* Event Title */}
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-indigo-700">{Event.Event}</h2>
        <span className="bg-indigo-200 text-indigo-900 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
          Event ID: {Event.id}
        </span>
      </div>

      {/* Event Info */}
      <ul className="space-y-3 text-sm text-gray-700">
        <li className="flex items-center gap-2">
          <FaRupeeSign className="text-green-500" />
          <span className="font-semibold">Budget:</span> ₹{Event.Budget}
        </li>
        <li className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-pink-500" />
          <span className="font-semibold">Venue:</span> {Event.Venue}
        </li>
        <li className="flex items-center gap-2">
          <FaCalendarDay className="text-blue-500" />
          <span className="font-semibold">Date:</span> {Event.Date}
        </li>
        <li className="flex items-center gap-2">
          <FaClock className="text-purple-600" />
          <span className="font-semibold">Time:</span> {Event.Time}
        </li>
        <li className="flex items-center gap-2">
          <FaPhoneAlt className="text-orange-500" />
          <span className="font-semibold">Contact:</span> {Event.Contact}
        </li>
      </ul>

      {/* Action Buttons */}
      <div className="mt-6 flex justify-end gap-3">
        <button
          onClick={() => navigate(`/edit/${Event.id}`)}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded-full shadow hover:shadow-lg transition"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(Event.id)}
          className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-full shadow hover:shadow-lg transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default EventCard;




// import { useNavigate } from "react-router-dom";
// import { FaMoneyBill, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaPhone } from "react-icons/fa";

// function EventCard({ Event, onDelete }) {
//   const navigate = useNavigate();

//   return (
//     <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition-all">
//       <h2 className="text-xl font-bold text-blue-800 mb-3">{Event.Event}</h2>
//       <ul className="text-sm text-gray-700 space-y-2">
//         <li className="flex items-center gap-2">
//           <FaMoneyBill className="text-green-600" />
//           <span><strong>Budget:</strong> ₹{Event.Budget}</span>
//         </li>
//         <li className="flex items-center gap-2">
//           <FaMapMarkerAlt className="text-red-500" />
//           <span><strong>Venue:</strong> {Event.Venue}</span>
//         </li>
//         <li className="flex items-center gap-2">
//           <FaCalendarAlt className="text-blue-500" />
//           <span><strong>Date:</strong> {Event.Date}</span>
//         </li>
//         <li className="flex items-center gap-2">
//           <FaClock className="text-purple-500" />
//           <span><strong>Time:</strong> {Event.Time}</span>
//         </li>
//         <li className="flex items-center gap-2">
//           <FaPhone className="text-black" />
//           <span><strong>Contact:</strong> {Event.Contact}</span>
//         </li>
//       </ul>

//       <div className="mt-4 flex gap-2">
//         <button
//           onClick={() => navigate(`/edit/${Event.id}`)}
//           className="px-3 py-1 bg-yellow-400 text-yellow rounded hover:bg-yellow-500"
//         >
//           Edit
//         </button>
//         <button
//           onClick={() => onDelete(Event.id)}
//           className="px-3 py-1 bg-red-500 text-red rounded hover:bg-red-600"
//         >
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// }

// export default EventCard;




// function EventCard({ Event }) {
//     return (
//         <div className="bg-white shadow-md rounded-xl p-4 text-gray-800">
//             <h2 className="text-xl font-semibold">{Event.Event}</h2>
//             <p>
//                 <strong>Budget:</strong> {Event.Budget}
//             </p>
//             <p>
//                 <strong>Venue:</strong> {Event.Venue}
//             </p>
//             <p>
//                 <strong>Contact:</strong> {Event.Contact}
//             </p>
//         </div>
//     )
// }

// export default EventCard;

// import { useNavigate } from "react-router-dom";

// function EventCard({ Event, onDelete }) {
//     const navigate = useNavigate();

//   return (
//     <div className="p-6 rounded-2xl bg-white transition-shadow duration-300 hover:shadow-xl">
//       <h2 className="text-2xl font-bold text-indigo-800 mb-4">
//         {Event.Event}
//       </h2>

//       <div className="space-y-2 text-gray-800">
//         <p>
//           <span className="font-semibold text-black">💰 Budget:</span> ₹{Event.Budget}
//         </p>
//         <p>
//           <span className="font-semibold text-black">📍 Venue:</span> {Event.Venue}
//         </p>
//         <p>
//           <span className="font-semibold text-black"> 📅 Date:</span> {Event.Date}
//         </p>
//         <p>
//         <span className="font-semibold text-black">⏰ Time:</span> {Event.Time}
//       </p>
//         <p>
//           <span className="font-semibold text-black">📞 Contact:</span> {Event.Contact}
//         </p>
//       </div>
//       <div className="mt-4 flex gap-3">
//                 <button
//                     onClick={() => navigate(`/edit/${Event.id}`)}
//                     className="bg-yellow-500 text-black px-3 py-1 rounded"
//                 >
//                     Edit
//                 </button>
//                 <button
//                     onClick={() => onDelete(Event.id)}
//                     className="bg-red-500 text-black px-3 py-1 rounded"
//                 >
//                     Delete
//                 </button>
//         </div>
//     </div>
//   );
// }

// export default EventCard;
