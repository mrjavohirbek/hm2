import React,{useState} from 'react'
import Posts from '../Posts'
const App = () => {
  const [bool,setBool] = useState(true)
  return (
    <div>{bool ?<Posts/> :<div>Компонент уничтожен</div>}
    <button onClick={()=>{setBool(bool? false:true)}} >Toggle</button></div>
  )
}

export default App