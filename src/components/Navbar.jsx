import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import link from "../assets/link.svg"
import close from "../assets/close.svg"
import menu from "../assets/menu.svg"
import NavLink from './NavLink'
const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className="w-full h-20 bg-oceanicblue">
            <div className="flex items-center font-medium justify-around">
                <div className="z-50 p-5 md:w-auto w-full flex justify-between">
                    <img src={link} alt="logo" className="md:cursor-pointer h-9" />
                    <div className="text-3xl md:hidden" >
                        {
                            !open ? (
                                <img src={menu} onClick={() => setOpen(!open)}/>
                            ) : (
                                <img src={close} onClick={() => setOpen(!open)}/>
                            )
                        }
                    </div>
                </div>
                <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
                    <NavLink />
                </ul>
                {/* Mobile nav */}
                <ul
                    className={`
                        md:hidden bg-oceanicblue fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
                        duration-500 ${open ? "left-0" : "left-[-100%]"}
                        `}
                >
                    <NavLink />
                </ul>
            </div>
        </nav>
    );
  };
  
export default Navbar;