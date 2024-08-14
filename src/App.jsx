import { useState } from 'react'
import Events from './components/events'
import './App.css'
import HackathonPage from './components/HackathonPage'
import {  Routes, Route} from 'react-router-dom'

function App() {
 

  return (
    < >
    
    <Routes>
      <Route path='/' element={<Events/>}/>
   <Route path='/hackathon' element={<HackathonPage/>}/>
    </Routes>
      

    </>
  )
}

export default App
