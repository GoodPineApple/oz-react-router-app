import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";

function App() {
  return (
    <div className="min-h-screen mx-auto max-w-xl bg-gray-100">
      <nav className="bg-blue-500 p-4 flex justify-center gap-10">
        <Link className="text-white" to="/">
          Home
        </Link>
        <Link className="text-white" to="/about">
          About
        </Link>
        <Link className="text-white" to="/users">
          Users
        </Link>
      </nav>

      <main className="p-4 ">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h1>Home</h1>
              </div>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:userId" element={<UserDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
