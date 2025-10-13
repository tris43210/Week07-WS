import "./App.css";
import { Route, Routes, Link } from "react-router";
import { HomePage } from "./Pages/Homepage";

function App() {
  return (
    <>
      <nav>
        <Link to="/about">About</Link> | <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/about" element={<h2>About</h2>} />
        <Route path="/" element={<HomePage />} />
        <Route path="/myInfo" element={<marquee>My Info</marquee>} />
      </Routes>
    </>
  );
}

export default App;
