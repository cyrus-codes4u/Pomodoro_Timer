import React from "react";
import SetFocus from "./SetFocus"
import SetBreak from "./SetBreak"


function SetDuration({focusDuration, setFocusDuration,
    breakDuration, setBreakDuration, active}){
    
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