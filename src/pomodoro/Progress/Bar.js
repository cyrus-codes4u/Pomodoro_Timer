import React from "react";     
      
function Bar({session}){
  const {timer, duration} = session
  const percentComplete = (timer / duration) * 100

  return (
    <div className="progress" style={{ height: "20px"}}>
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow= {percentComplete}
        style={{ width: `${percentComplete}%`}}
      />
    </div>
      
  )
}

export default Bar