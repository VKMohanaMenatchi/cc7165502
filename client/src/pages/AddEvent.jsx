// import { useNavigate } from "react-router-dom";
// import EventForm from "../components/EventForm";

// function AddEvent() {
//   const navigate = useNavigate();

//   const handleAdd = (newEvent) => {
//     const existing = JSON.parse(localStorage.getItem("Event")) || [];
//     const updated = [...existing, newEvent];
//     localStorage.setItem("Event", JSON.stringify(updated));
//     navigate("/");
//   };

//   return (
//     <div className="p-6">
//       <EventForm onAdd={handleAdd} />
//     </div>
//   );
// }

// export default AddEvent;


import { useNavigate } from "react-router-dom";
import EventForm from "../components/EventForm";

function AddEvent() {
  const navigate = useNavigate();

  const handleAdd = (newEvent) => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEvent),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to add event");
        return res.json();
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error adding event:", error);
        alert("Failed to add event. Please try again.");
      });
  };

  return (
    <div className="p-6">
      <EventForm onAdd={handleAdd} />
    </div>
  );
}

export default AddEvent;






// import { useNavigate } from "react-router-dom";
// import EventForm from "../components/EventForm";

// function AddEvent() {
//     const navigate = useNavigate();
//     const handleAdd = (Event) => {
//         const existing = JSON.parse(localStorage.getItem("Event")) || [];

//         const updated = [...existing, Event];
//         localStorage.setItem("Event", JSON.stringify(updated));
//         navigate("/");
//     }
//     return (
//         <div>
//             <EventForm onAdd={handleAdd} />
//         </div>
//     )
// }
// export default AddEvent;