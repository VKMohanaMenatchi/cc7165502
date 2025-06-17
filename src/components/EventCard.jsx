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

import { useNavigate } from "react-router-dom";

function EventCard({ Event, onDelete }) {
    const navigate = useNavigate();

  return (
    <div className="p-6 rounded-2xl bg-white transition-shadow duration-300 hover:shadow-xl">
      <h2 className="text-2xl font-bold text-indigo-800 mb-4">
        {Event.Event}
      </h2>

      <div className="space-y-2 text-gray-800">
        <p>
          <span className="font-semibold text-black">💰 Budget:</span> ₹{Event.Budget}
        </p>
        <p>
          <span className="font-semibold text-black">📍 Venue:</span> {Event.Venue}
        </p>
        <p>
          <span className="font-semibold text-black"> 📅 Date:</span> {Event.Date}
        </p>
        <p>
        <span className="font-semibold text-black">⏰ Time:</span> {Event.Time}
      </p>
        <p>
          <span className="font-semibold text-black">📞 Contact:</span> {Event.Contact}
        </p>
      </div>
      <div className="mt-4 flex gap-3">
                <button
                    onClick={() => navigate(`/edit/${Event.id}`)}
                    className="bg-yellow-500 text-black px-3 py-1 rounded"
                >
                    Edit
                </button>
                <button
                    onClick={() => onDelete(Event.id)}
                    className="bg-red-500 text-black px-3 py-1 rounded"
                >
                    Delete
                </button>
        </div>
    </div>
  );
}

export default EventCard;
