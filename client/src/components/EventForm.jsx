import { useState, useEffect } from 'react';

function EventForm({ onAdd, initialData }) {
  const [form, setForm] = useState({
    Event: "", Budget: "", Venue: "", Date: "", Time: "", Contact: "", Type: "A",
  });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.Event || !form.Date || !form.Time) {
      return alert("Event name, date and time are required!");
    }
    onAdd({ ...form, id: initialData?.id || Date.now() });
    setForm({ Event: "", Budget: "", Venue: "", Date: "", Time: "", Contact: "", Type: 'A' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-blue-50 to-white p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl backdrop-blur-md bg-white/80 border border-white/30 shadow-xl rounded-xl p-10 space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-700 tracking-wide">
          {initialData ? "🛠 Edit Event" : "📅 Plan Your Event"}
        </h2>
        <p className="text-center text-gray-500 text-sm">
          {initialData ? "Modify the existing event details." : "Enter details to schedule a new event."}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField label="Event Name" name="Event" type="text" value={form.Event} onChange={handleChange} required />
          <InputField label="Budget (₹)" name="Budget" type="number" value={form.Budget} onChange={handleChange} />
          <InputField label="Venue" name="Venue" type="text" value={form.Venue} onChange={handleChange} />
          <InputField label="Contact Info" name="Contact" type="text" value={form.Contact} onChange={handleChange} />
          <InputField label="Date" name="Date" type="date" value={form.Date} onChange={handleChange} required />
          <InputField label="Time" name="Time" type="time" value={form.Time} onChange={handleChange} required />
        </div>

        <button
          type="submit"
          className="w-full py-3 text-white font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-md hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
        >
          {initialData ? "Update Event" : "Create Event"}
        </button>
      </form>
    </div>
  );
}

// Reusable input field component
const InputField = ({ label, name, type, value, onChange, required }) => (
  <div className="flex flex-col">
    <label htmlFor={name} className="text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white"
      placeholder={label}
    />
  </div>
);

export default EventForm;



// import { useState, useEffect } from 'react';

// function EventForm({ onAdd, initialData }) {
//   const [form, setForm] = useState({
//     Event: "", Budget: "", Venue: "", Date: "", Time: "", Contact: "", Type: "A",
//   });

//   useEffect(() => {
//     if (initialData) setForm(initialData);
//   }, [initialData]);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!form.Event || !form.Date || !form.Time) {
//       return alert("Event name, date and time are required!");
//     }
//     onAdd({ ...form, id: initialData?.id || Date.now() });
//     setForm({ Event: "", Budget: "", Venue: "", Date: "", Time: "", Contact: "", Type: 'A' });
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-white shadow-xl rounded-2xl px-8 py-10 max-w-2xl mx-auto mt-10 space-y-6 border border-blue-100"
//     >
//       <h2 className="text-3xl font-extrabold text-center text-indigo-700">
//         {initialData ? "✏️ Edit Event" : "📋 Book Your Event"}
//       </h2>

//       <p className="text-center text-gray-500 text-sm">
//         {initialData ? "Update your event details below." : "Fill the form to book your event effortlessly."}
//       </p>

//       {["Event", "Budget", "Venue", "Date", "Time", "Contact"].map((field) => (
//         <div key={field}>
//           <label
//             htmlFor={field}
//             className="block mb-1 text-sm font-medium text-gray-700"
//           >
//             {field}
//           </label>
//           <input
//             id={field}
//             type={
//               field === "Budget" ? "number" :
//               field === "Date" ? "date" :
//               field === "Time" ? "time" : "text"
//             }
//             name={field}
//             placeholder={field}
//             value={form[field]}
//             onChange={handleChange}
//             required={["Event", "Date", "Time"].includes(field)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           />
//         </div>
//       ))}

//       <button
//         type="submit"
//         className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition"
//       >
//         {initialData ? "Update Event" : "Submit Booking"}
//       </button>
//     </form>
//   );
// }

// export default EventForm;




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

// import { useState, useEffect } from 'react';

// function EventForm({ onAdd , initialData}) {
//   const [form, setForm] = useState({
//     Event: "",
//     Budget: "",
//     Venue: "",
//     Date: "",
//     Time: "",
//     Contact: "",
//     Type: "A",
//   });

//   useEffect(() => {
//       if(initialData) setForm(initialData);
//     },[])

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value
//     })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!form.Event || !form.Date || !form.Time)
//       return alert('Event name, date and time are required!');
//     onAdd({ ...form, id:initialData?.id || Date.now() });

//     setForm({
//       Event: "",
//       Budget: "",
//       Venue: "",
//       Date: "",
//       Time: "",
//       Contact: "",
//       Type: 'A',
//     });
//   }

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-white p-8 rounded-2xl shadow-lg max-w-xl mx-auto mt-12"
//     >
//       <h2 className="text-3xl font-bold text-purple-800 mb-4 text-center">
//         📋 Book Your Event
//       </h2>
//       <p className="text-center text-gray-600 mb-8">
//         Make your day memorable with our seamless event booking!
//       </p>

//       <div className="space-y-5">
//         <input
//           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
//           type="text"
//           name="Event"
//           placeholder="Event Name"
//           value={form.Event}
//           onChange={handleChange}
//           required
//         />

//         <input
//           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
//           type="number"
//           name="Budget"
//           placeholder="Budget (in ₹)"
//           value={form.Budget}
//           onChange={handleChange}
//         />

//         <input
//           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
//           type="text"
//           name="Venue"
//           placeholder="Venue"
//           value={form.Venue}
//           onChange={handleChange}
//         />

//         <input
//           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
//           type="date"
//           name="Date"
//           placeholder="Date"
//           value={form.Date}
//           onChange={handleChange}
//           required
//         />

//         <input
//           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
//           type="time"
//           name="Time"
//           placeholder="Time"
//           value={form.Time}
//           onChange={handleChange}
//           required
//         />



//         <input
//           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
//           type="text"
//           name="Contact"
//           placeholder="Contact Info"
//           value={form.Contact}
//           onChange={handleChange}
//         />

//         <button
//           type="submit"
//           className="w-full bg-purple-600 text-black py-3 rounded-lg font-semibold text-lg hover:bg-purple-700 transition"
//         >
//           Submit Booking
//         </button>
//       </div>
//     </form>
//   );
// }

// export default EventForm;
