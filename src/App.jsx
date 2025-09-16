import React from 'react'
import Child from './Components/Child'
import Greatgrandchild from './Components/Greatgrandchild'
export const UserContext=React.createContext()

const App= ()=> {
  const msg = "Invitation for a function";
  const msg2 = "Please come for dinner";
  return (
    <div>
        Hi I am parent component and i want
        to send {msg} to my Greatgrandchild
        <Child msg = {msg} />
        <UserContext.Provider value={msg2}>
            <Greatgrandchild />
        </UserContext.Provider>
    </div>
  )
      
}

export default App