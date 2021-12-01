import React, { useState } from 'react';
import './App.css';

function App() {
  const [fname, setFname] = useState("")
  return (
    <div>
      <h1>React Form Handling</h1>
      <form>
        <label>
          First Name: <input type="text" value="fname" />
        </label>
      </form>
      <h5>First name: {fname}</h5>
    </div>
  );
}

export default App;
