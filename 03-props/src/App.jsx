import React from 'react'
import Card from './components/card.jsx'

const App = () => {
  return (
    <div className='card'>
      <img src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
      <h1>Nishant</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, voluptates!</p>
      <button>Click me</button>
      <Card/>
      <Card user='nishant'/>

       <img src="https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-800x525.jpg" alt="" />
      <h1>vivek </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, voluptates!</p>
      
    </div>
    
    
    
  )
}

export default App