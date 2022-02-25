import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">

      <div class='container'>
      <h1>TESTING CRUD</h1>

      <form class='col'>
        <label class='row'>Movie Name: </label>
        <input class='row' type="text" name="movieName"/>
        <label class='row'>Review: </label>
        <input class='row' type="text" name="review"/>
        <button class='row'>Submit</button>
      </form>
      </div>

    </div>
  );
}

export default App;
