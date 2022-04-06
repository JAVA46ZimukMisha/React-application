import React from 'react';

import './App.css';
import Timer from './components/Timer';

function App() {
  return <div style ={{display: "flex", justifyContent: "space-between", marginLeft: "5vw"}}>
  <Timer city = {`Jerusalem`} zone = {"Asia/Jerusalem"}/>
  <Timer city = {`Lisbon`} zone = {"Europe/Lisbon"}/>
  <Timer city = {`Tokio`} zone = {"Japan"}/>
  <Timer city = {`New York`} zone = {"America/New_York"}/>
  </div>
}

export default App;
