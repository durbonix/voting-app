import React from 'react'
import {Winner} from './Winner'
import {Vote} from './Vote'

export const Voting = (props) => {
  return  (
    <div className="voting">
      {props.winner ? <Winner winner={props} /> : <Vote {...props}/>}
    </div>
  )
}
