import React from 'react'

export const Voting = (props) => {
  return  (
    <div className="voting">
      {props.pair.map(entry => <button key={entry}><h1>{entry}</h1></button>)}
    </div>
  )
}
