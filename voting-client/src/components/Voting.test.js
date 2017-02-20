import React from 'react'
import {shallow} from 'enzyme'
import {Voting} from './Voting'

describe('Voting', () => {
  it('renders n number of buttons based on input', () => {
    const pair = ['Trainspotting', '28 Days Later']
    const element = shallow(<Voting pair={pair} />)
    expect(element.find('.voting').children()).toHaveLength(pair.length);
    expect(element.find('.voting').childAt(0).text()).toEqual('Trainspotting')
    expect(element.find('.voting').childAt(1).text()).toEqual('28 Days Later')
  })

  it('invokes callback when a button is clicked', () => {
    let votedWith
    const pair = ['Trainspotting', '28 Days Later']
    const vote = (entry) => votedWith = entry
    const wrapper = shallow(
      <Voting
      pair={pair}
      vote={vote} />
    )
    wrapper.find('.voting').childAt(1).simulate('click')
    expect(votedWith).toEqual('28 Days Later')
  })
})
