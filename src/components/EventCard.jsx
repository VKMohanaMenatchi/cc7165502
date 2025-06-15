function EventCard({ Event }) {
    return (
        <div className="bg-white shadow-md rounded-xl p-4 text-gray-800">
            <h2 className="text-xl font-semibold">{Event.Event}</h2>
            <p>
                <strong>Budget:</strong> {Event.Budget}
            </p>
            <p>
                <strong>Venue:</strong> {Event.Venue}
            </p>
            <p>
                <strong>Contact:</strong> {Event.Contact}
            </p>
        </div>
    )
}

export default EventCard;