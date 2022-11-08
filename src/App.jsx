import React from 'react'
import { Hero, Navbar } from './components'
import Info from './components/Info'

const App = () => {
  return (
    <div>
      <div className="w-full overflow-hidden">
        <Navbar />
        <Hero />
        <div>
          <Info />
        </div>
      </div>
      
    </div>
    
  )
}

export default App