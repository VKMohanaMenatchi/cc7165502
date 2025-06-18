function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">About Us</h1>
      <p className="text-gray-700 mb-4">
        Welcome to our Event Management Platform! This portal helps you organize and manage all your events efficiently.
        Whether you're planning a casual meetup or a formal gathering, our tool allows you to:
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Create and edit events easily</li>
        <li>View past, current, and future events</li>
        <li>Manage venue, date, time, and budget in one place</li>
        <li>Search and filter events with ease</li>
      </ul>
      <p className="text-gray-700 mt-6">
        Built using <strong>React</strong> and <strong>Tailwind CSS</strong>, this app is lightweight, responsive, and tailored for simplicity.
        We're continuously improving, so stay tuned for new features!
      </p>
    </div>
  );
}

export default About;




// function About() {
//   return (
//     <div className="text-center mt-12 text-lg text-gray-700 px-4">
//       <h2 className="text-3xl font-bold text-purple-700 mb-4">About Us</h2>
//       <p>
//         Welcome to Event Manager! We help you plan, organize, and keep track of your events in the easiest way possible.
//         Whether it's a personal celebration or a professional gathering, we're here to simplify it.
//       </p>
//     </div>
//   );
// }

// export default About;