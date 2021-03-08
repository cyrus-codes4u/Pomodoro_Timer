import React from "react";
import { minutesToDuration } from "../../utils/duration"
import PropTypes from 'prop-types';

function SetBreak({duration, setDuration, active}){    
    const decreaseHandler = () => setDuration(Math.max(duration - 1, 1))
    const increaseHandler = () => setDuration(Math.min(duration + 1, 15))
    
    return (
        <div className="float-right">
            <div className="input-group input-group-lg mb-2">
                <span className="input-group-text" data-testid="duration-break">
                    Break Duration: {minutesToDuration(duration)}
                </span>
                <div className="input-group-append">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        data-testid="decrease-break"
                        onClick = {decreaseHandler}
                        disabled={active} // if a session has started, the button is disabled
                    >
                        <span className="oi oi-minus" />
                    </button>
                    
                    <button
                        type="button"
                        className="btn btn-secondary"
                        data-testid="increase-break"
                        onClick = {increaseHandler}
                        disabled={active} // if a session has started, the button is disabled
                    >
                        
                        <span className="oi oi-plus" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SetBreak