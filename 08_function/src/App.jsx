import React from 'react'

// function btnclick(){
//   console.log("button clicked")
// }
// function mouseclick(){
//   console.log("mouse clicked")
// }

// for the input changing we can also use the function like this
// function inputchanging(value){
//         console.log("input changing", value);
//       }

// page scrolling function with the help of onWheel event we can detect the scrolling up and down and deltaY
// is the property of the event object which gives the value of the scrolling up and down if it is positive then 
// it is scrolling down and if it is negative then it is scrolling up
const pagescrolling=(elem)=>{
  if(elem>0){
    console.log("scrolling down");
  } else {
    console.log("scrolling up");
  }
}

const App = () => {
  return (
    <div>
      {/* <h1>Hello Nishant</h1>
      <button onClick={btnclick} onMouseEnter={mouseclick}>
        click here
      </button>
      <button onClick={function(){
        console.log("2_button clicked")
      }}>
        check here 
      </button> */}

      {/* <input type='text' placeholder='enter your name' onChange={function(e){
        console.log(e.target.value)
      }} /> */}

      
      {/* <input onChange={inputchanging} type="text" placeholder="enter name"/> */}


{/* it is SyntheticBaseEvent comes from dom */}

    {/* <input onChange={function(elem){
      console.log(elem);
    }}
    type="text" placeholder="enter name"/> */}

{/* 
    <input onChange={function(elem){
      console.log(elem.target.value);
    }}
    type="text" placeholder="enter name"/> */}


{/*   
    <input onChange={function(elem){
      inputchanging(elem.target.value);
    }}
    type="text" placeholder="enter name"/> */}


    {/* <div onMouseMove={(elem) => console.log(elem.clientX, elem.clientY)} className='box'></div> */}
  {/* <div onWheel={()=>{
    console.log("scrolling");
  }}> */}

  <div onWheel={(elem)=>{
    pagescrolling(elem.deltaY);
  }}>
    <div className="page1"></div>
    <div className="page2"></div>
    <div className="page3"></div>
  </div>
  


    // </div>
  )
}

export default App