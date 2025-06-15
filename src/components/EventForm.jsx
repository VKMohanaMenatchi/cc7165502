import { useState } from 'react';

function EventForm({ onAdd }) {
    const [form, setForm] = useState({
        Event: "",
        Budget: "",
        Venue: "",
        Contact: "",
        Type: "A",
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.Event || !form.Budget)
          return alert("Event and Budget are required");
        onAdd({ ...form, id: Date.now() });
        setForm({
            Event: "",
            Budget: "",
            Venue: "",
            Contact: "",
            Type: "A",
        });
    }

    return (
      <form
        onSubmit={handleSubmit}
        className="bg-gray-600 p-6 shadow-md rounded-xl max-w-md mx-auto text-white"
      >
        <h2 className="text-xl font-semibold mb-0"> Book Here... </h2>
        <h6 className="text mb-2 text-black">Make your day special with us!</h6> 
        <input
          className="w-full p-2 border mb-3"
          type="text"
          name="Event"
          placeholder="Event"
          value={form.Event}
          onChange={handleChange}
          required
        />
        <input
          className="w-full p-2 border mb-3"
          type="text"
          name="Budget"
          placeholder="Budget"
          value={form.Budget}
          onChange={handleChange}
          required
        />
        <input
          className="w-full p-2 border mb-3"
          type="text"
          name="Venue"
          placeholder="Venue"
          value={form.Venue}
          onChange={handleChange}
        />
        <input
          className="w-full p-2 border mb-3"
          type="Contact"
          Event="Contact"
          placeholder="Contact"
          value={form.Contact}
          onChange={handleChange}
        />

        <button type="submit" className="bg-blue-500 text-black py-2 px-4 rounded">
            Submit
        </button>
      </form>
    );
}
export default EventForm;