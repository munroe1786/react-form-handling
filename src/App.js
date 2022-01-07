import React, { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    message: "",
    favoriteArtist: "",
    isChecked: false,
  })

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
  })
}

  return (
    <div>
      <h1>React Form Handling</h1>
      <form>
        <br />
        <label>
          First Name:{" "}
          <input
            type="text"
            name="firstName"
            value={state.firstName}
            onChange={handleChange}
          />
        </label>{" "}
        <label>
          Last Name:{" "}
          <input
            type="text"
            name="lastName"
            value={state.lastName}
            onChange={handleChange}
          />
        </label>
        <label>
          Your Message:{" "}
          <textarea
            name="message"
            value={state.message} 
            onChange={handleChange}
          />
        </label>
        <br /><br />
        <label>
          Pick your favorite artist:
          <select
            name="artist"
            value={state.favoriteArtist}
            onChange={handleChange}
          >
            <option value="mucha">Alphons Mucha</option>
            <option value="okeefe">Georgia O'Keefe</option>
            <option value="kahlo">Frida Kahlo</option>
            <option value="dali">Salvador Dali</option>
            <option value="cooper">J.A.W. Cooper</option>
          </select>
        </label>
        <br /><br />
        <label>
          <input 
            type="checkbox"
            name="isChecked"
            checked={state.isChecked}
            onChange={handleChange}
          />
          {" "}
          Is Checked?
        </label>
        </form>
      <h5>
        Name: {state.firstName} {state.lastName} 
      </h5>
      <h5>My favorite artist: {state.favoriteArtist}</h5>
      <p>Message: {state.message} </p>
      <h5>Is it checked? : {state.isChecked ? "Yes" : "No"}</h5>
    </div>
  );
}

export default App;
