import React from "react"
import Status from "./Status"
import Paused from "./Paused"
import Bar from "./Bar"
import PropTypes from "prop-types"; 

function Progress ({session, isTimerRunning}) {
    Progress.propType  = {
        session: PropTypes.object.isRequired,
        isTimerRunning: PropTypes.bool.isRequired
    } 
    if (!session.active) {return null}    //if the session has not begun/stopped this component doesn't show
    
    return (
        <div>
            <div className="row mb-2">
                <div className="col">
                    <Status session={session} />
                    <Paused isTimerRunning={isTimerRunning}/>
                </div>     
            </div>
            <div className="row mb-2">
                <div className="col">
                    <Bar session={session} />
                </div>
            </div>
        </div>  
    )
}

export default Progress
