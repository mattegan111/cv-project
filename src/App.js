import React from 'react'
import './App.css';
import Header from './Components/header.js'
import Main from './Components/main.js'
import Footer from './Components/footer.js'

function App() {
  return (
    <div className="App">
      <Header title="Header"/>
      <Main title="Main"/>
      <Footer title="Footer"/>
    </div>
  );
}

export default App;

/* 
index
  App
    Editor
      Personal Details
      Work Experience
        Work Experience Instance
          Add
          Delete
      Education
        Education Instance
          Add 
          Delete
    Preview

      
        
*/