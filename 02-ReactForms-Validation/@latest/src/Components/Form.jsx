import { useState } from "react";

export function Form() {
  const [username, setUsername] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleInputChange(event) {
    setUsername(event.target.value); 
    console.log(username)
  }

  return (
    <div>
        <p>Basic Form:</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="userUsername"
            onChange={handleInputChange}/>
          <button type="submit">Submit</button>
        </form>
    </div>
  );
}
