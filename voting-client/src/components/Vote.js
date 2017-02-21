import React from 'react'


export const Vote = (props) => {
  return(
    <div className="voting">
      {props.pair.map(entry => <button
                                className="voting-button"
                                value={entry}
                                disabled={props.hasVoted}
                                onClick={() => props.vote(entry)}
                                key={entry}>
                                     {entry} {entry === props.hasVoted ? <div className="voted">voted</div> : null}
                                </button>)}
    </div>
  )

}
