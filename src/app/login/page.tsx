// "use client";
// import { UserAuth } from "../context/AuthContext";

// const LoginPage = () => {
//   const { user, googleSignIn, emailSignIn } = UserAuth();

//   const handleSignIn = async () => {
//     try {
//       await googleSignIn();
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   console.log(user);

//   return (
//     <main className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-md">
//         <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
//         <form>
//           <div className="mb-4">
//             <label
//               htmlFor="username"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Username
//             </label>
//             <input
//               type="text"
//               id="username"
//               className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your username"
//             />
//           </div>
//           <div className="mb-6">
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your password"
//             />
//           </div>
//           <button
//             onClick={() => emailSignIn}
//             type="submit"
//             className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//           >
//             Login
//           </button>
//         </form>

//         <p className="text-sm text-center text-gray-600 mt-4">
//           Don't have an account?{" "}
//           <button
//             onClick={handleSignIn}
//             className="text-blue-600 hover:underline"
//           >
//             Sign up
//           </button>
//         </p>
//       </div>
//     </main>
//   );
// };

// export default LoginPage;

"use client";
import { useState } from "react";
import { UserAuth } from "../context/AuthContext";

const LoginPage = () => {
  const { user, googleSignIn, emailSignIn } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (err) {
      console.error("Google Sign-In Error:", err);
    }
  };

  const handleEmailSignIn = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent form refresh

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      await emailSignIn(email, password);
      console.log("Signed in successfully!");
    } catch (err) {
      setError("Failed to sign in. Please check your credentials.");
      console.error("Email Sign-In Error:", err);
    }
  };

  return (
    <main className="flex justify-center items-center h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <form onSubmit={handleEmailSignIn}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <button
            onClick={handleGoogleSignIn}
            className="text-blue-600 hover:underline"
          >
            Sign up with Google
          </button>
        </p>
      </div>
    </main>
  );
};

export default LoginPage;
