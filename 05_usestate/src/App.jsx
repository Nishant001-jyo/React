import React, { useState } from 'react'

const App = () => {
  // const [a, setfirst] = useState(50)
  // const [a, setfirst] = useState("nishant")
  // function changeNum(){
  //   setfirst(20)
  // }


//   const [first, setfirst] = useState(0)
//  function increaseNum(){
//   setfirst(first+1)
//  }
//  function decreaseNum(){
//   setfirst(first-1)
//  }
//  function jump10Num(){
//   setfirst(first+10)
//  }



// const [first, setfirst] = useState({user:"Nishant",age:25})

// const onclick=()=>{
//   console.log(first.user , first.age)

// }



const [first, setfirst] = useState([10,202,30])
const onclick=()=>{
  const newNum = [...first]
  newNum.push(99)
  setfirst(newNum)
}
  return (
    // <div>
    //   {/* <h1> Value of a is {a}</h1>
    //   <button onClick={changeNum}>click here</button> */}
      
    //   <h1>{first}</h1>
    //   <button onClick={increaseNum}>Increase</button>
    //   <button onClick={decreaseNum}>Decrease</button>
    //   <button onClick={jump10Num}>jump10Num</button>
    // </div>

    <div>
      {/* <h1>{first.user},{first.age}</h1> */}

      <h1>{first}</h1>
      <button onClick={onclick}>Click</button>
    </div>


  )
}

export default App