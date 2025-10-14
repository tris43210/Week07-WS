import "./App.css";
import { Routes, Route, Link } from "react-router";
import { SportPage } from "./Components/SportPage";
import { EachSportPage } from "./Components/EachSportPage";

function App() {
  return (
    <>
      <nav className="navbar">
        <Link to="/">Home</Link> 
        <Link to="/sports">Sports</Link> 
      </nav>
      <Routes>
        <Route path="/" element={<h1>This is home</h1>}></Route>
        <Route path="/sports" element={<SportPage/>}></Route>
        <Route path="/sports/:id" element={<EachSportPage/>}></Route>
      </Routes>
    </>
  );
}

export default App;
