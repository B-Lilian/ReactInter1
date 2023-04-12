import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from "react";
import DisplayEmployee from './components/DisplayEmployee';


function App() {
  const [employee, setEmployee] = useState(sampleEmployee);
  const getEmployee = () => {
    // Send the request
    axios
      .get('https://randomuser.me/api?nat=en')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setEmployee(data.results[0]);
      });
  };

  return (
    <div className='App'>
      <DisplayEmployee employee={employee} />
      <button type="button" onClick={getEmployee}>Get employee</button>
    </div>
  );
}

export default App;
