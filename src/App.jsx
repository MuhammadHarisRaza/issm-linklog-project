import React from 'react'
import { Hero, Navbar } from './components'

const App = () => {
  return (
    <div>
      <div className="w-full bg-teal-700 overflow-hidden">
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
    </div>
    
  )
}

export default App