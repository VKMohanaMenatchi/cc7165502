// import { useState } from 'react';

// function EventForm({ onAdd }) {
//     const [form, setForm] = useState({
//         Event: "",
//         Budget: "",
//         Venue: "",
//         Contact: "",
//         Type: "A",
//     })

//     const handleChange = (e) => {
//         setForm({
//             ...form,
//             [e.target.name]: e.target.value
//         })
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!form.Event || !form.Budget)
//           return alert("Event and Budget are required");
//         onAdd({ ...form, id: Date.now() });
//         setForm({
//             Event: "",
//             Budget: "",
//             Venue: "",
//             Contact: "",
//             Type: "A",
//         });
//     }

//     return (
//       <form
//         onSubmit={handleSubmit}
//         className="bg-gray-600 p-6 shadow-md rounded-xl max-w-md mx-auto text-white"
//       >
//         <h2 className="text-xl font-semibold mb-0"> Book Here... </h2>
//         <h6 className="text mb-2 text-black">Make your day special with us!</h6> 
//         <input
//           className="w-full p-2 border mb-3"
//           type="text"
//           name="Event"
//           placeholder="Event"
//           value={form.Event}
//           onChange={handleChange}
//           required
//         />
//         <input
//           className="w-full p-2 border mb-3"
//           type="text"
//           name="Budget"
//           placeholder="Budget"
//           value={form.Budget}
//           onChange={handleChange}
//           required
//         />
//         <input
//           className="w-full p-2 border mb-3"
//           type="text"
//           name="Venue"
//           placeholder="Venue"
//           value={form.Venue}
//           onChange={handleChange}
//         />
//         <input
//           className="w-full p-2 border mb-3"
//           type="Contact"
//           name="Contact"
//           placeholder="Contact"
//           value={form.Contact}
//           onChange={handleChange}
//         />

//         <button type="submit" className="bg-blue-500 text-black py-2 px-4 rounded">
//             Submit
//         </button>
//       </form>
//     );
// }
// export default EventForm;

import { useState, useEffect } from 'react';

function EventForm({ onAdd , initialData}) {
  const [form, setForm] = useState({
    Event: "",
    Budget: "",
    Venue: "",
    Date: "",
    Time: "",
    Contact: "",
    Type: "A",
  });

  useEffect(() => {
      if(initialData) setForm(initialData);
    },[])

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.Event || !form.Date || !form.Time)
      return alert('Event name, date and time are required!');
    onAdd({ ...form, id:initialData?.id || Date.now() });

    setForm({
      Event: "",
      Budget: "",
      Venue: "",
      Date: "",
      Time: "",
      Contact: "",
      Type: 'A',
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-lg max-w-xl mx-auto mt-12"
    >
      <h2 className="text-3xl font-bold text-purple-800 mb-4 text-center">
        📋 Book Your Event
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Make your day memorable with our seamless event booking!
      </p>

      <div className="space-y-5">
        <input
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          type="text"
          name="Event"
          placeholder="Event Name"
          value={form.Event}
          onChange={handleChange}
          required
        />

        <input
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          type="number"
          name="Budget"
          placeholder="Budget (in ₹)"
          value={form.Budget}
          onChange={handleChange}
        />

        <input
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          type="text"
          name="Venue"
          placeholder="Venue"
          value={form.Venue}
          onChange={handleChange}
        />

        <input
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          type="date"
          name="Date"
          placeholder="Date"
          value={form.Date}
          onChange={handleChange}
          required
        />

        <input
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          type="time"
          name="Time"
          placeholder="Time"
          value={form.Time}
          onChange={handleChange}
          required
        />



        <input
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          type="text"
          name="Contact"
          placeholder="Contact Info"
          value={form.Contact}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full bg-purple-600 text-black py-3 rounded-lg font-semibold text-lg hover:bg-purple-700 transition"
        >
          Submit Booking
        </button>
      </div>
    </form>
  );
}

export default EventForm;
