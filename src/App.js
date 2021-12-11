import React, { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    message: ""
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
        <label>
          Your Message:{" "}
          <textarea
            name="message"
            value={state.message} 
            onChange={handleChange}
          />
        </label>
        </form>
      <h5>
        Name: {state.firstName} {state.lastName} 
      </h5>
      <p>Message: {state.message} </p>
    </div>
  );
}

export default App;
