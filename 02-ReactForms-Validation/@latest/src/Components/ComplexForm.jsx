import { useState } from "react";


export function ComplexForm() {
    const [formValues, setFormValues] = useState({})

    function handleChange(event) {
        const eventValue = event.target.name
        setFormValues({...formValues, [eventValue]: event.target.value })
        console.log(formValues); 

    }

    function handleSubmit(event) {
        event.preventDefault(); 
        console.log(`The submitted form info is`, formValues)
    }

  return (
    <div>
      <p>Complex Form:</p>
      <form onSubmit={handleSubmit}>

        <label htmlFor="IDusername">Username</label>
        <input type="text" id="IDusername" name="userUsernameCom" onChange={handleChange} />

        <label htmlFor="IDpassword">Password</label>
        <input type="text" id="IDpassword" name="userPasswordCom" onChange={handleChange} />



        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
