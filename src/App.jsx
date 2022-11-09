import { data } from 'autoprefixer'
import React from 'react'
import { AboutUs, Charity, Hero, Info, InfoCard, Navbar, Properties, Stats } from './components'
import { ABOUT_DATA, INFO_CARD_DATA } from './constants'

const App = () => {
  return (
    <div>
      <div className="w-full overflow-hidden ">
        <header className="fixed z-[100] w-full" >
          <Navbar />
        </header>
        <div className="relative">
          <Hero />
        </div>
        <div>
          <Info />
        </div>
        <div className="flex flex-wrap sm:justify-start justify-center  w-full mx-20 my-3 items-stretch relative z-[1]">
          {
            INFO_CARD_DATA.map((data)=>(
              <InfoCard card={data} />
            ))
          }
        </div>
        <div className="bg-black flex flex-col justify-center w-full py-5 px-60 pt-10">
          {
            ABOUT_DATA.map((data)=>(
              <AboutUs data={data}/>
            ))
          }
        </div>
        <div className=" bg-golden flex flex-col justify-center w-full  px-40 py-20">
          <Stats />
        </div>
        <div>
          <Properties />
        </div>
        <div>
          <Charity />
        </div>
      </div>
      
    </div>
    
  )
}

export default App