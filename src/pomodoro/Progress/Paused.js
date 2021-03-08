import React from "react"; 

function Paused({isTimerRunning}){
    const text = !isTimerRunning ? "PAUSED" : null

    return (<p>{text}</p>)
}

export default Paused