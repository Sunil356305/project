import React from 'react'
// import Dashboard from './Component/Dashboard'
import{BrowserRouter , Routes , Route} from "react-router-dom"
import Home from './Component/Home'
import Videocomponent from "./Component/VideoEditor"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element = { <Home/>}/>
        <Route path='/gh'  element = { <Videocomponent/>}/>
      </Routes>
      
      
      </BrowserRouter>
      



    </div>
  )
}

export default App