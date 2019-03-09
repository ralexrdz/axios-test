import React from 'react'
import App from './App';

const AppView = (props) => {
  const {
    people,
    onAddParticipant
  } = {...props}


  return <div className="App">
    <h1>SW People</h1>
    <ul>
    {
      people.length > 0 &&
      people
    }   
    </ul>     
    <div>
      <label htmlFor="">Name</label>
      <input id="pname" type="text"/>
      <button onClick={() => onAddParticipant(document.getElementById('pname').value)}>Enviar</button>
    </div>
  </div>
}

export default AppView