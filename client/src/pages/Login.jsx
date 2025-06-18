import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Placeholder login logic (replace with real auth later)
    if (email === "admin@example.com" && password === "admin123") {
      localStorage.setItem("user", JSON.stringify({ email }));
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-blue-800">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Login;





// import { useState } from "react";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Login functionality is not implemented.");
//   };

//   return (
//     <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-xl shadow-md">
//       <h2 className="text-2xl font-bold text-center text-purple-700 mb-4">Login / Signup</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full px-4 py-2 border rounded-lg"
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full px-4 py-2 border rounded-lg"
//           required
//         />
//         <button
//           type="submit"
//           className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Login;