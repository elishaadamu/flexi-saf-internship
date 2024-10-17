import {useState} from "react"


let Content = (props) => {

  let [state, setState] = useState(0)

  function ClickEvent(){
    setState (state + 1 * 2)
  }

  function Reset(){
    setState (0)
  }
  return(
    <div className="content">
      <h3>My name is {props.name}</h3>
      <h3>I am {props.age} years old</h3>
      <h3>My number is {props.number}</h3>
      <h3>I am from {props.country}</h3>
      <hr />
      <span><button className="button" onClick={ClickEvent}>Counter</button> <button className="button" onClick={Reset}>Reset</button></span>


      <h1>{state}</h1>
    </div>  
  )

}

export default Content