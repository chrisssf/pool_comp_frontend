import React, { useState, input } from 'react'
import './StartComp.css'

const StartComp = () => {

    const [registerPlayer, setRegisterPlayer] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [nickname, setNickname] = useState("")

    return (
        <>
            <h1>Start a comp </h1>
            <div className="register-player-container">
                <p className="register-player-form">Search and register an existing player - </p>
                {/* <div className="register-player-form"> */}
                    <input className="register-player-input" type='text' value={registerPlayer} onChange={(player) => setRegisterPlayer(player.target.value)} />
                {/* </div> */}
            </div>
            <div className="add-player-container">
                <p className="add-player-text">Add a new player - </p>
                <div>
                    <div className="add-player-names">
                        <p>First Name:</p>
                        <input  type='text' value={firstName} onChange={(firstName) => setFirstName(firstName.target.value)} />
                        <p>Last Name:</p>
                        <input  type='text' value={lastName} onChange={(lastName) => setLastName(lastName.target.value)} />
                    </div>
                    <div className="add-player-names">
                        <p>Nickname (optional):</p>
                        <input  type='text' value={nickname} onChange={(nickname) => setNickname(nickname.target.value)} />
                        <input type="submit" value="Add New Player" />
                    </div>
                </div>
            </div>
        </>
    )

}

export default StartComp