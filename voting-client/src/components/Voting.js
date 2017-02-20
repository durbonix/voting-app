import React from 'react'

export const Voting = (props) => {
  return  (
    <div className="voting">
      {props.pair.map(entry => <button
                                className="voting-button"
                                value={entry}
                                onClick={() => props.vote(entry)}
                                key={entry}>
                                     {entry}
                                </button>)}
    </div>
  )
}
