import EventCard from '../components/EventCard';
import { useState, useEffect } from 'react';

function Home() {
    const [Events, setEvents] = useState([]);
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('Events')) || [];
        setEvents(stored);
    }, []);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            { Events.length === 0 ? (
                <p>No Events added yet.</p>
            ) : (
                Events.map((s) => (
                    <EventCard key={s.id} Event={s} />
                ))
            )}
        </div>
    )
} 

export default Home;