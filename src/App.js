import React, {useState} from 'react';
import './App.css';


function App() {

  const [numberOfPlayersInGroup, setNumberOfPlayersInGroup] = useState(4)
  const [playersInGroup, setPlayerInGroup] = useState(["chris", "dave", "joni", "Remi"])

  const makeGroupTable = () => {
    // const numberOfPlayers = playersInGroup.length
    // playersInGroup.unshift("")
    console.log(playersInGroup);
    const headerRow = playersInGroup.map((player) =>{
      return <div className="group-box">{player}</div>
    })
    const mainTable = playersInGroup.map((player) => {

      return (
        
      <div className="group-row">
        <div className="group-box">{player}</div>
        <div className="group-box"><input className="group-input"></input></div>
        <div className="group-box"><input className="group-input"></input></div>
        <div className="group-box"><input className="group-input"></input></div>
        <div className="group-box"><input className="group-input"></input></div>
      </div>
      )
    })
    headerRow.unshift(<div className="group-box"></div>)
    return (
      <div>
        <div className="group-row">
        {headerRow}
        </div>
        {mainTable}
      </div>
      )
  }

  return (
    <div className="App">
      <header className="App-header">
       <p>Header here</p>
      </header>

      {/* <div className="group-box">
        <p>one</p>
      </div>
      <div className="group-box">
        <p>two</p>
      </div>
      <div className="group-box">
        <p>three</p>
      </div> */}

      <p>body here</p>

        <div className="group-container">
        {makeGroupTable()}
      </div>


    </div>
  );
}

export default App;
