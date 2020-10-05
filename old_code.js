import React, {useState, useEffect} from 'react';
import './App.css';


function App() {

  // passed in will be an array of players,
  // each player will look like...
    //   {  
    //     name: "chris",
    //     id: 23
    //     group: 1, 
    //     groupScore: 0,
    //   }, 

    // also pass in total number of groups 
    // loop that many times and filter by group number to get array of players in each group

    // POSSILBLY BETTER WAY!!!
    // pass in array(1) of arrays(2) of objects(3)
    // => array1 = everything, array2 = players in each group, object3 = player as above
    // can get length of array1 to give number of groups
    // for each array2 (each group of players) do group logic => loop through groups

  const [numberOfPlayersInGroup, setNumberOfPlayersInGroup] = useState(4)
  const [playersInGroup, setPlayerInGroup] = useState(["chris", "dave", "john", "bob"])
  const [thing, setThing] = useState(0)
  const [players, setPlayers] = useState({
      chris: { 
        group: 1, 
        groupScores: [],
      }, 
      dave: { 
        group: 1, 
        groupScores: [],
      },
      john: { 
        group: 1, 
        groupScores: [],
      },
      bob: { 
        group: 1, 
        groupScores: [],
      }
    })



  // creating random groups
  const [groupPlayers, setGroupPlayers] = useState(["bob", "john", "jeff", "steve", "alex", "cat", "dog", "woof", "jim", "frog", "thing", "dood", "meh"])
  const [numberOfGroupsToCreate, setNumberOfGroupsToCreate] = useState(4)
  const [numberInEachGroup, setNumberInEachGroup] = useState([3, 3, 3, 4])


  // const getRandomGroup = () => {
  //       const randomGroup = Math.floor(Math.random() * numberOfGroupsToCreate)
  //       return randomGroup
  // }

    const randomGroups = () => {
      const groups = []
      const placedPlayers = []

      // groupPlayers.forEach((player) => {
        
      // })

      for (let i = 0 ; i < numberOfGroupsToCreate ; i++){
          groups.push([])
          while (groups[i].length < numberInEachGroup[i]) {
            const randomPlayerIndex = Math.floor(Math.random() * groupPlayers.length)
            const randomPlayer = groupPlayers[randomPlayerIndex]
            if (groups[i].includes(randomPlayer) === false &&  placedPlayers.includes(randomPlayer) === false){
              placedPlayers.push(randomPlayer)
              groups[i].push(randomPlayer)
            }
          }
      }

      // numberInEachGroup.forEach((group) => {
      //   const randomPlayer = Math.floor(Math.random() * groupPlayers)
      //   while ()

      // })


      // while (randomCountries.length < 4 ) {
      //   const randomIndex = Math.floor(Math.random() * (this.mapDataArray.length));
      //   const randomCountry = this.mapDataArray[randomIndex]
      //   if (randomCountry.area >= 200000 && randomCountries.includes(randomCountry) === false && randomCountry.name !== "Antarctica") {
      //     randomCountries.push(randomCountry)
      //   }
      // }




      // for (let i = 0 ; i < numberOfGroupsToCreate ; i++){
      //   groups.push([])
      // }

      // // loop through groupPlayers and push each into random group IF that group has less than max
      // groupPlayers.forEach(player => {



      //   const randomGroup = Math.floor(Math.random() * numberOfGroupsToCreate)
      //   if (groups[randomGroup].length )
      // })


    }











  useEffect(() => {
// possibly set ap groups as array of arrrays and in here separate them out?

    // setPlayers({groupScore: 0, name: "bob"})

    // OBJECT!!!
    // setPlayers({
    //   chris: { 
    //     group: 1, 
    //     groupScore: 0,
    //   }, 
    //   dave: { 
    //     group: 1, 
    //     groupScore: 0,
    //   }
    // })

    // ARRAY!!!
    // setPlayers([
    //   {  
    //     name: "chris",
    //     group: 1, 
    //     groupScore: 0,
    //   }, 
    //   {
    //     name: "dave",
    //     group: 1, 
    //     groupScore: 0,
    //   }
    // ])
    console.log("players", players);
  }, [])

  // {player: NAME, group: 2, GroupScore: 23}

  const makeGroupTable = () => {
    // const numberOfPlayers = playersInGroup.length
    // playersInGroup.unshift("")
      // const woof = players.chris
      // console.log(woof.x);
      // console.log(players.woof.x);

    const headerRow = playersInGroup.map((player) =>{
      return <div className="group-box">{player}</div>
    })


    const mainTable = playersInGroup.map((player , index) => {

      // const playerScore = []
      // const updateScore = () => {

      // }


      console.log("PLAYERSSSSS", players);
      const scoresArea = []
      let playerScores = []
      // let playerScore = 0

      // console.log(players[0].groupScore);
      // let playerScores = players.groupScore
      // let playerScores = players.player.groupScore


      const createScoresArea = () => {
        for ( let i = 0 ; i < playersInGroup.length ; i ++) {

          // const formatPlayersScores = players
          // formatPlayersScores[player].groupScores[i] = 0
          // setPlayers(formatPlayersScores)
          // const editablePlayers = players
          // editablePlayers[player].groupScores[i] = 0

          // playerScores[i] = 0
          // console.log(i);
          if( index === i) {
            scoresArea.push(<div className="group-box"><p className="group-input">X</p></div>)
          // } else if (i === playersInGroup.length) {
          //   scoresArea.push(<div className="group-box"><p className="group-input">{players[0].groupScore}</p></div>)
          } else {
            scoresArea.push(<div className="group-box"><input className="group-input" type="number" onChange={(e) => {
              // playerScores += parseInt(e.target.value)
              // let thisPlayer = players.player
              // thisPlayer.groupScore = playerScores
              // setPlayers(thisPlayer)

              // works with OBJECTS! -- this kinda worked!!!!!!!
              // playerScore += parseInt(e.target.value)
              // line below needs to target each player!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
              // let thisPlayer = players[player]
              // const editablePlayers = players
              // editablePlayers[player].groupScore += playerScore
              // console.log("THIS PLAYER", thisPlayer);
              // thisPlayer.groupScore = playerScore
              // setPlayers(editablePlayers)

              // playerScores[i] += parseInt(e.target.value)
              // players[i].groupScore += parseInt(e.target.value)


              const editablePlayers = players
              // if (i > index) {
              //   editablePlayers[player].groupScores.splice(i - 1, 1, parseInt(e.target.value))
              // } else {
              //   editablePlayers[player].groupScores.splice(i, 1, parseInt(e.target.value))
              // }
              let inputValue = e.target.value
              if (inputValue === ""){
                inputValue = 0
              }
              if (i > index) {
                editablePlayers[player].groupScores[i - 1] = parseInt(inputValue)
              } else {
                editablePlayers[player].groupScores[i] = parseInt(inputValue)
              }
              setPlayers(editablePlayers)

              // const thisPlayer = players[player]

              // playerScores.splice(i, 1, e.target.value)


              let newThing = thing + 1
              setThing(newThing)
              console.log("playerScores", playerScores);
              console.log("players2", players);
            }}></input></div>)
          }
        }
        // scoresArea.push(<div className="group-box"><p className="group-input">{players.player.groupScore}</p></div>)
        const reducer = (accumulator, currentValue) => accumulator + currentValue
        const totalScore = players[player].groupScores.reduce(reducer, 0)
        console.log("TOTALSCORES", totalScore);
        scoresArea.push(<div className="group-box"><p className="group-input">{totalScore}</p></div>)

        // console.log(playerScores);
        return scoresArea
      }

      return (
        <div className="group-row">
          <div className="group-box">{player}</div>
          {createScoresArea()}
          {/* <div className="group-box"><input className="group-input" type="text"></input></div>
          <div className="group-box"><input className="group-input"></input></div>
          <div className="group-box"><input className="group-input"></input></div>
          <div className="group-box"><input className="group-input"></input></div> */}
        </div>
      )
    })

    headerRow.unshift(<div className="group-box"></div>)
    headerRow.push(<div className="group-box">Total</div>)

    
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

      <p>body here</p>

      <div className="group-container">
        {makeGroupTable()}
        {/* <input onChange={() => console.log("in change", players.chris.groupScore)}></input> */}
      </div>

    </div>
  );
}

export default App;
