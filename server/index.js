const express = require('express');
const { log } = require('console');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;
const DATA_PATH = path.join(__dirname, "data", "Event.json");

app.use(cors());
app.use(express.json());

const readEvent = () => JSON.parse(fs.readFileSync(DATA_PATH));
const writeEvent = (data) => {
    fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
}

app.get('/', (req,res) => {
    res.send('API is running!');
});

app.get('/api/Event', (req, res) => {
    try {
        const Event = readEvent();
        res.json(Event)
    } catch (error) {
        res.status(500).json({ message: 'Error reading Event data'});
    }
});

app.get('/api/Event/:id', (req , res) => {
    const Event = readEvent();
    const Events = Event.find((s) => s.id === parseInt(req.params.id));
    if (Events) {
        res.json(Events);
    } else {
        res.status(404).json({message: "Event not found"});
    }
});

app.post("/api/Event", (req, res) => {
    const Event = readEvent();
    const newEvent = {...req.body, id: Date.now()};
    Event.push(newEvent);
    writeEvent(Event);
    res.status(201).json(newEvent);
});

app.put("/api/event/:id", (req, res) => {
    let Event = readEvent();
    const id = parseInt(req.params.id);
    Event = Event.map((s) => (s.id === id ? { ...s, ...req.body } : s));
    writeEvent(Event);
    res.json({ message: "Event updated successfully" });
});

app.delete("/api/Event/:id", (req, res) => {
    let Event = readEvent();
    Event = Event.filter(s => s.id !== parseInt(req.params.id));
    writeEvent(Event);
    res.json({ message: "Event deleted successfully" });
});


app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});