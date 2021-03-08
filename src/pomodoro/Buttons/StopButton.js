import React from "react";

function StopButton({stop, active}){
    return (
        <button
            type="button"
            className="btn btn-secondary"
            title="Stop the session"
            onClick = {stop}
            disabled = {!active} //if the session hasn't started yet, the stop button is disabled
        >
            <span className="oi oi-media-stop" />
        </button>
    )
}

export default StopButton