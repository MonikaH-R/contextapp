import React from 'react'
import GrandChild from './GrandChild'


const Child = ({msg}) => {
  return (
    <div>
      Hi I am child I go {msg} from Parent
      and I will send it to my child
      <GrandChild msg = {msg} />
    </div>
  )
}

export default Child