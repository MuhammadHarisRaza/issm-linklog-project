import React from 'react'
import contact from "../../assets/contact.webp"
import { OFFICE_DATA, REGION } from '../../constants'
import ContactForm from './ContactForm'
import OfficeInfo from './OfficeInfo'
import RegionInfo from './RegionInfo'

const ContactPage = () => {
  return (
    <div >
        <div className="flex items-end justify-end bg-center bg-cover mt-20  overflow-hidden relative w-full py-10 px-40 pt-10">
            <div className={`flex flex-1 flex-col  my-2 justify-around overflow-hidden relative`}>
                <div className={`flex-1 flex  justify-center items-center  relative border-2 rounded-bl-[100px]  border-golden`}>
                    <img src={contact} alt="billing" className={`relative w-full h-[350px] z-[5] rounded-bl-[100px] `} />
                </div>
                <div className="px-6 pt-4 pb-2 flex flex-row">
                    {
                        OFFICE_DATA.map((data)=>(
                            <OfficeInfo data={data} />
                        ))
                    }
                </div>
                <div className="px-6 pt-4 pb-2 flex flex-col">
                    {
                        REGION.map((region)=>(
                            <RegionInfo data={region} />
                        ))
                    }
                </div>
                <div className="px-6 pt-4 pb-2 flex flex-col">
                    <h1 className="font-normal text-black text-4xl tracking-widest mb-2 px-6 py-4">Get In Touch With Us To Learn More.</h1>
                    <ContactForm />
                </div>
            </div>
            
        </div>
        
    </div>
    
  )
}

export default ContactPage