import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EventForm from "../components/EventForm";

function EditEvent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/events/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch event data");
        return res.json();
      })
      .then((data) => {
        setEventData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching event data:", error);
        setError("Unable to load event data.");
        setLoading(false);
      });
  }, [id]);

  const handleUpdate = (updatedEvent) => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/events/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedEvent),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to update event");
        return res.json();
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error updating event:", error);
        alert("Failed to update event. Please try again.");
      });
  };

  if (loading) return <p>Loading event data...</p>;
  if (error) return <p>{error}</p>;
  if (!eventData) return <p>Event not found.</p>;

  return (
    <div className="p-6">
      <EventForm onAdd={handleUpdate} initialData={eventData} />
    </div>
  );
}

export default EditEvent;


// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import EventForm from "../components/EventForm";

// function EditEvent() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [eventData, setEventData] = useState(null);

//   useEffect(() => {
//     const storedEvents = JSON.parse(localStorage.getItem("Event")) || [];
//     const target = storedEvents.find((e) => e.id === parseInt(id));
//     if (!target) {
//       alert("Event not found.");
//       navigate("/");
//     } else {
//       setEventData(target);
//     }
//   }, [id, navigate]);

//   const handleUpdate = (updatedEvent) => {
//     const storedEvents = JSON.parse(localStorage.getItem("Event")) || [];
//     const updatedList = storedEvents.map((e) =>
//       e.id === parseInt(id) ? updatedEvent : e
//     );
//     localStorage.setItem("Event", JSON.stringify(updatedList));
//     navigate("/");
//   };

//   return (
//     <div className="p-6">
//       {eventData && <EventForm onAdd={handleUpdate} initialData={eventData} />}
//     </div>
//   );
// }

// export default EditEvent;



// import { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';

// import EventForm from '../components/EventForm';

// function EditEvent() {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const [Event, setEvent] = useState(null);
    
//     useEffect(() => {
//         const stored = JSON.parse(localStorage.getItem('Event')) || [];
//         const found = stored.find(Event => Event.id === parseInt(id));
//         if(!found) {
//             navigate('/');
//         }
//         setEvent ( found );
//     }, [id, navigate]);

//     const handleUpdate = (updatedEvent) => { 
//         const stored = JSON.parse(localStorage.getItem('Event')) || [];
//         const updatedList = stored.map(Event => Event.id === parseInt(id) ? updatedEvent : Event);
//         localStorage.setItem('Event',JSON.stringify(updatedList));
//         navigate('/');
//     }
//     return(
//         <div>
//         {Event && <EventForm onAdd= {handleUpdate} initialData={Event} />}
//      </div>
// )

// }

// export default EditEvent;