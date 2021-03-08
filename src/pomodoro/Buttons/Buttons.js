import React from "react";
import PlayPause from "./PlayPauseButton"
import StopButton from "./StopButton"
import PropTypes from "prop-types"

function Buttons({session, isTimerRunning, stop, playPause}){
    Buttons.propType  = {
        playPause: PropTypes.func.isRequired,
        stop: PropTypes.func.isRequired,
        isTimerRunning: PropTypes.bool.isRequired,
        session: PropTypes.object.isRequired,
    } 

    return(
        <div className="row">
            <div className="col">
            <div
                className="btn-group btn-group-lg mb-2"
                role="group"
                aria-label="Timer controls"
            >
                <PlayPause isTimerRunning={isTimerRunning} playPause={playPause} /> 
                <StopButton stop={stop} active ={session.active} />
            </div>
            </div>
        </div>
    )
}

export default Buttons