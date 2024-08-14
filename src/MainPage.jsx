import React from 'react'
import IntroAnimation from "./components/IntroAnimation"
import Events from './components/Events'
const Main = () => {
  return (
    <div className='bg-gradient-to-r from-slate-900 to-slate-700'>
        <IntroAnimation/>
        <Events/>
    </div>
  )
}

export default Main