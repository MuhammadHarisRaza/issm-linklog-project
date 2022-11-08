import { data } from 'autoprefixer'
import React from 'react'
import { Hero, Navbar } from './components'
import Info from './components/Info'
import InfoCard from './components/InfoCard'
import { INFO_CARD_DATA } from './constants'

const App = () => {
  return (
    <div>
      <div className="w-full overflow-hidden">
        <Navbar />
        <Hero />
        <div>
          <Info />
        </div>
        <div className="flex flex-wrap sm:justify-start justify-center  w-full mx-20 items-stretch relative z-[1]">
          {
            INFO_CARD_DATA.map((data)=>(
              <InfoCard card={data} />
            ))
          }
        </div>
      </div>
      
    </div>
    
  )
}

export default App