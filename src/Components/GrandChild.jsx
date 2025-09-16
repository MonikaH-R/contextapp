import React from 'react'
import Greatgrandchild from './Greatgrandchild'

const GrandChild = ({msg}) => {
  return (
    <div>
      Hi I am grandhild and i got {msg}
      from child and i will send it to 
      Greatgrandchild
      <Greatgrandchild msg = {msg} />
    </div>
  )
}

export default GrandChild