import React from 'react'
import { AboutUs, Charity, ContactPage, Footer, Hero, Info, InfoCard, Navbar, Properties, Stats } from '../components'
import { ABOUT_DATA, INFO_CARD_DATA } from '../constants'

const Home = () => {
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
        <div className="grid  md:grid-cols-3 grid-cols-1 gap-[10px]  md:w-[80%] w-[90%]  md:mx-40 mx-10 my-3 items-center relative z-[1]">
          {
            INFO_CARD_DATA.map((data)=>(
              <InfoCard card={data} />
            ))
          }
        </div>
        <div className=" bg-charcoal flex flex-col justify-center w-full py-5 md:px-60 px-10 pt-10">
          {
            ABOUT_DATA.map((data)=>(
              <AboutUs data={data}/>
            ))
          }
        </div>
        <div className=" bg-golden  flex-col items-center justify-center w-full  px-40 py-20">
          <Stats />
        </div>
        <div>
          <Properties />
        </div>
        <div>
          <Charity />
        </div>
        <div className=" bg-charcoal flex justify-center items-start w-full">
          <Footer />
        </div>
      </div>
      
    </div>
  )
}

export default Home