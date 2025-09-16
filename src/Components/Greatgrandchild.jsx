import React, { useContext } from 'react'
import { UserContext } from '../App'

const Greatgrandchild = ({msg}) => {
  const mymsg = useContext(UserContext)
  return (
    <div>
      <h2>I got {msg} from greatgrandparent but grandchild</h2>
      <h1>This {mymsg} I got directly from my greatgrandparent</h1>
    </div>
  )
}

export default Greatgrandchild