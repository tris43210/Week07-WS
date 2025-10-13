import { Link } from "react-router";

export function HomePage() {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to="/about">About</Link>
    </div>
  );
}
