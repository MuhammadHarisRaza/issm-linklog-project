import React from 'react'
import { ContactPage, Footer, Navbar } from '../components'

const Contact = () => {
  return (
    <div>
      <div className="w-full overflow-hidden ">
        <header className="fixed z-[100] w-full" >
          <Navbar />
        </header>
        <div className="relative">
          <ContactPage />
        </div>
        <div className=" bg-charcoal flex justify-center items-start w-full">
          <Footer />
        </div>
      </div>
      
    </div>
  )
}

export default Contact