import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EventForm from "../components/EventForm";

function EditEvent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("Event")) || [];
    const target = storedEvents.find((e) => e.id === parseInt(id));
    if (!target) {
      alert("Event not found.");
      navigate("/");
    } else {
      setEventData(target);
    }
  }, [id, navigate]);

  const handleUpdate = (updatedEvent) => {
    const storedEvents = JSON.parse(localStorage.getItem("Event")) || [];
    const updatedList = storedEvents.map((e) =>
      e.id === parseInt(id) ? updatedEvent : e
    );
    localStorage.setItem("Event", JSON.stringify(updatedList));
    navigate("/");
  };

  return (
    <div className="p-6">
      {eventData && <EventForm onAdd={handleUpdate} initialData={eventData} />}
    </div>
  );
}

export default EditEvent;



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