require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fs = require("fs").promises;
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;
const DATA_PATH = path.join(__dirname, "data", "Event.json");

// Middleware
app.use(cors());
app.use(express.json());

// Utility functions
const readEvents = async () => {
  const data = await fs.readFile(DATA_PATH, "utf-8");
  return JSON.parse(data);
};

const writeEvents = async (data) => {
  await fs.writeFile(DATA_PATH, JSON.stringify(data, null, 2));
};

// Root route
app.get("/", (req, res) => {
  res.send("API is running!");
});

// Get all events
app.get("/api/events", async (req, res) => {
  try {
    const events = await readEvents();
    res.json(events);
  } catch (error) {
    console.error("Error reading events:", error);
    res.status(500).json({ message: "Error reading event data" });
  }
});

// Get event by ID
app.get("/api/events/:id", async (req, res) => {
  try {
    const events = await readEvents();
    const event = events.find((e) => e.id === parseInt(req.params.id));
    if (event) {
      res.json(event);
    } else {
      res.status(404).json({ message: "Event not found" });
    }
  } catch (error) {
    console.error("Error fetching event by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Add a new event
app.post("/api/events", async (req, res) => {
  try {
    const events = await readEvents();
    const newEvent = { ...req.body, id: Date.now() };
    events.push(newEvent);
    await writeEvents(events);
    res.status(201).json({ message: "Event added successfully", event: newEvent });
  } catch (error) {
    console.error("Error adding event:", error);
    res.status(500).json({ message: "Failed to add event" });
  }
});

// Update an existing event
app.put("/api/events/:id", async (req, res) => {
  try {
    let events = await readEvents();
    const id = parseInt(req.params.id);
    const index = events.findIndex((e) => e.id === id);

    if (index === -1) {
      return res.status(404).json({ message: "Event not found" });
    }

    events[index] = { ...events[index], ...req.body };
    await writeEvents(events);
    res.json({ message: "Event updated successfully" });
  } catch (error) {
    console.error("Error updating event:", error);
    res.status(500).json({ message: "Failed to update event" });
  }
});

// Delete an event
app.delete("/api/events/:id", async (req, res) => {
  try {
    let events = await readEvents();
    const initialLength = events.length;
    events = events.filter((e) => e.id !== parseInt(req.params.id));

    if (events.length === initialLength) {
      return res.status(404).json({ message: "Event not found" });
    }

    await writeEvents(events);
    res.json({ message: "Event deleted successfully" });
  } catch (error) {
    console.error("Error deleting event:", error);
    res.status(500).json({ message: "Failed to delete event" });
  }
});

// 404 fallback
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



// const express = require('express');
// const { log } = require('console');
// const cors = require('cors');
// const fs = require('fs');
// const path = require('path');

// const app = express();
// const PORT = 5000;
// const DATA_PATH = path.join(__dirname, "data", "Event.json");

// app.use(cors());
// app.use(express.json());

// const readEvent = () => JSON.parse(fs.readFileSync(DATA_PATH));
// const writeEvent = (data) => {
//     fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
// }

// app.get('/', (req,res) => {
//     res.send('API is running!');
// });

// app.get('/api/Event', (req, res) => {
//     try {
//         const Event = readEvent();
//         res.json(Event)
//     } catch (error) {
//         res.status(500).json({ message: 'Error reading Event data'});
//     }
// });

// app.get('/api/Event/:id', (req , res) => {
//     const Event = readEvent();
//     const Events = Event.find((s) => s.id === parseInt(req.params.id));
//     if (Events) {
//         res.json(Events);
//     } else {
//         res.status(404).json({message: "Event not found"});
//     }
// });

// app.post("/api/Event", (req, res) => {
//     const Event = readEvent();
//     const newEvent = {...req.body, id: Date.now()};
//     Event.push(newEvent);
//     writeEvent(Event);
//     res.status(201).json(newEvent);
// });

// app.put("/api/event/:id", (req, res) => {
//     let Event = readEvent();
//     const id = parseInt(req.params.id);
//     Event = Event.map((s) => (s.id === id ? { ...s, ...req.body } : s));
//     writeEvent(Event);
//     res.json({ message: "Event updated successfully" });
// });

// app.delete("/api/Event/:id", (req, res) => {
//     let Event = readEvent();
//     Event = Event.filter(s => s.id !== parseInt(req.params.id));
//     writeEvent(Event);
//     res.json({ message: "Event deleted successfully" });
// });


// app.use((req, res) => {
//     res.status(404).json({ message: "Route not found" });
// });


// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });