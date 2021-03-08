import React from "react";
import SetFocus from "./SetFocus"
import SetBreak from "./SetBreak"
import PropTypes from "prop-types"


function SetDuration({focusDuration, setFocusDuration,
    breakDuration, setBreakDuration, active}){
    SetBreak.propType  = {
        setBreakDuration: PropTypes.func.isRequired,
        setFocusDuration: PropTypes.func.isRequired,
        focusDuration: PropTypes.number.isRequired,
        breakDuration: PropTypes.number.isRequired,
        active: PropTypes.bool.isRequired
    }
    
    return (
        <div className="row">
             <div className="col">
                <SetFocus duration={focusDuration} setDuration={setFocusDuration} active={active}/>  
            </div>
            <div className="col">
                <SetBreak duration={breakDuration} setDuration={setBreakDuration} active={active}/>
            </div>
        </div>
    )
}

export default SetDuration