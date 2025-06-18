function Sidebar({ filter, setFilter, isOpen }) {
  return (
    <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-6 z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <h2 className="text-xl font-bold text-blue-700 mb-6">Filter Events</h2>
      <ul className="space-y-4">
        <li>
          <button onClick={() => setFilter('all')} className="w-full text-left hover:text-blue-600">
            All Events
          </button>
        </li>
        <li>
          <button onClick={() => setFilter('past')} className="w-full text-left hover:text-blue-600">
            Past Events
          </button>
        </li>
        <li>
          <button onClick={() => setFilter('today')} className="w-full text-left hover:text-blue-600">
            Today's Events
          </button>
        </li>
        <li>
          <button onClick={() => setFilter('future')} className="w-full text-left hover:text-blue-600">
            Upcoming Events
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
