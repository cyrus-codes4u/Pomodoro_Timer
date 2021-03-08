import React from "react"; 
import {secondsToDuration} from "../../utils/duration";


function Status({session}){
    const {timer, type, duration, active} = session

    return (
        <>
            <h2 data-testid="session-title">{type} for {secondsToDuration(duration)} minutes</h2>
            <p className="lead" data-testid="session-sub-title">
                    {secondsToDuration(duration-timer)} remaining
            </p>
        </>
    )
}

export default Status