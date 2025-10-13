import { Link, Outlet, useParams } from "react-router";

export function UserPage() {
  let { username } = useParams();
  console.log(username);
  return (
    <>
      <h2>User: {username}</h2>;
      <Link to={`/users/${username}/posts`}>Posts</Link>
      <Outlet />
    </>
  );
}
