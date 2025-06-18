import { useNavigate } from "react-router-dom";
import EventForm from "../components/EventForm";

function AddEvent() {
  const navigate = useNavigate();

  const handleAdd = (newEvent) => {
    const existing = JSON.parse(localStorage.getItem("Event")) || [];
    const updated = [...existing, newEvent];
    localStorage.setItem("Event", JSON.stringify(updated));
    navigate("/");
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