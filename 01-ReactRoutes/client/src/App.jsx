import "./App.css";
import { Route, Routes, Link } from "react-router";
import { HomePage } from "./Pages/Homepage";
import { UserPage } from "./Pages/UserPage";
import { UserPostsPage } from "./Pages/UserPostsPage";

function App() {
  return (
    <>
      <nav>
        <Link to="/about">About</Link> | <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
      </nav>
      <Routes>
        <Route path="/about" element={<h2>About</h2>} />
        <Route path="/" element={<HomePage />} />
        <Route path="/myInfo" element={<marquee>My Info</marquee>} />
        {/* the following is a dynamic route */}
        <Route path="/users/:username" element={<UserPage />}>
          <Route path="posts" element={<UserPostsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
