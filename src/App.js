import React, { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
  })

  const handleChange = e => {
    setState({
      ...state,
      [e.target.value]: e.target.value,
  })
}

  return (
    <div>
      <h1>React Form Handling</h1>
      <form>
        <label>
          First Name: {" "}
          <input type="text" 
            name="firstName"
            value={state.firstNamename} 
            onChange={handleChange}/>
        </label>{" "}
        <label>
          Last Name: {" "}
          <input type="text" 
            name="lastName"
            value={state.lastName} 
            onChange={handleChange}/>
        </label>
      </form>
      <h5>
        Name: {state.firstName} {state.lastName} 
      </h5>
    </div>
  );
}

export default App;
