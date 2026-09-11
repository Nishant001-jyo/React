// Two-way-binding:- Two-way binding means that the data/state and the UI input stay synchronized with each other.

// There are two directions:

// State → Input: State value is displayed in the input.
// Input → State: When the user changes the input, the state is updated.


import React from 'react'
import { useState } from 'react'
const App = () => {
  const [title, setTitle] = useState('')
  const submithandler=(e)=>{
    e.preventDefault()
    console.log('form submitted by',title);

    // console.log("form submit");
    setTitle('')
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submithandler(e)
      }}>
        <input type='text' placeholder='enter your name' style={{color:'white'}}
        value={title}
        onChange={(e)=>{
          // console.log(e.target.value)
          setTitle(e.target.value)
          

        }}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App