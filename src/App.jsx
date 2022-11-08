import React from 'react'
import { Hero, Navbar } from './components'

const App = () => {
  return (
    <div>
      <div className="w-full overflow-hidden">
        <Navbar />
        <Hero />
      </div>
      
    </div>
    
  )
}

export default App