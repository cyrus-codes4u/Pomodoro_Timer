import React, { useState } from "react";
import useInterval from "../utils/useInterval";
import SetDuration from "./SetDuration/SetDuration"
import Buttons from "./Buttons/Buttons"

import Progress from "./Progress/Progress"
import Status from "./Progress/Status";
import ProgressBar from "./Progress/Bar";

function Pomodoro() {
  const [isTimerRunning, setIsTimerRunning] = useState(false); // whether or not the session is paused
  const [breakDuration, setBreakDuration] = useState(5) // break  session duration as set in initial screen
  const [focusDuration, setFocusDuration] = useState(25) // focus session duration as set in initial screen
  const [session, setSession] = useState({active: false, type: "Focusing", timer: 0, duration: 0}) // active session state
  
  useInterval(
    () => {
      // every second, the timer should increase by one
      setSession({...session, timer: session.timer+1})
      
      if(session.timer === session.duration){ //once timer reaches length of duration
        // Play Alarm
        new Audio(`../public/alarm/submarine-dive-horn.mp3`).play()
        // change 'type' and 'timer' property of the session
        session.type === "Focusing" ? setSession({...session, type: "On Break", timer: 0, duration:breakDuration*60}) : 
          setSession({...session, type: "Focusing", timer: 0, duration:focusDuration*60});
      }
    },
    isTimerRunning ? 1000 : null
  );

  function playPause() {
    //session starts, timer set to focusDuration in seconds, active to true
    if (!session.active) { setSession({...session, active: true, duration: focusDuration*60}) }; 
    //whenever called, timer is paused/unpaused
    setIsTimerRunning((prevState) => !prevState);
  }
  function stop() {
    setSession({active: false, type: "Focusing", timer: 0});
    setIsTimerRunning(false);
  }

  return (
    
    
    <div className="pomodoro">
      <SetDuration focusDuration={focusDuration} setFocusDuration={setFocusDuration} breakDuration={breakDuration} 
        setBreakDuration={setBreakDuration} active={session.active}/>
      
      <Buttons session={session} isTimerRunning={isTimerRunning} playPause={playPause} stop={stop} />
      
      <Progress session={session} isTimerRunning={isTimerRunning} />
      
    </div>
  );
}

export default Pomodoro;
