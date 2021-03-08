import React from "react";
import { minutesToDuration } from "../../utils/duration"
import PropTypes from 'prop-types';

function SetFocus({duration, setDuration, active}){
    const decreaseHandler = () => setDuration(Math.max(duration - 5, 5))
    const increaseHandler = () => setDuration(Math.min(duration + 5, 60))

    return(
        <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-focus">
                Focus Duration: {minutesToDuration(duration)}
            </span>
            <div className="input-group-append">
                <button
                    type="button"
                    className="btn btn-secondary"
                    data-testid="decrease-focus"
                    onClick={decreaseHandler}
                    disabled={active} // if a session has started, the button is disabled
                >
                    <span className="oi oi-minus" />
                </button>
                <button
                    type="button"
                    className="btn btn-secondary"
                    data-testid="increase-focus"
                    onClick={increaseHandler}
                    disabled={active} // if a session has started, the button is disabled
                >
                    <span className="oi oi-plus" />
                </button>
            </div>
        </div>
    )
}


export default SetFocus