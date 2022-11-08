import React, { useState } from 'react'
import { CaretDownOutline, CaretUpOutline } from 'react-ionicons'

const NavLink = () => {
    const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
    const links = [
        {
            name:"Portfolio",
            submenu: true,
            sublinks: [
                {
                    Head: "East Region",
                },
                {
                    Head: "Central Region",
                },
                {
                    Head: "West Region",
                },
                {
                    Head: "Business Park",
                },
            ],
        },
        {
            name:"Capabilities",
            submenu: true,
            sublinks: [
                {
                    Head: "Customer Support",
                },
                {
                    Head: "Customer Property Development",
                },
            ],
        },
        {
            name:"About",
            submenu: true,
            sublinks: [
                {
                    Head: "Leadership",
                },
                {
                    Head: "News",
                },
                {
                    Head: "ESG",
                },
                {
                    Head: "Community Link",
                },
            ],
        },
        {
            name:"Careers",
            submenu: true,
            sublinks: [
                {
                    Head: "Job Opening",
                },
                {
                    Head: "Early Careers",
                },
            ],
        },
        {
            name:"Contact",
            submenu: false,
            sublinks: [],
        },
        {
            name:"Customer Login",
            submenu: false,
            sublinks: [],
        },
    ]
  return (
    <>
    {links.map((link) => (
        <div>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center hover:text-orange-400 md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              {
                link.submenu === true ? (
                    <span className="text-xl lg:hidden md:hidden inline">
                {
                    heading === link.name ? (
                        <CaretUpOutline
                            color={'#00000'}
                            height="20px"
                            width="20px"
                        />
                    ) : (
                        <CaretDownOutline
                            color={'#00000'} 
                            height="20px"
                            width="20px"
                        />
                    )
                }
              </span>
                ) : null
              }
              
            </h1>
            {link.submenu && (
              <div>
                <div className=" bg-teal-700 absolute top-20 hidden group-hover:md:block hover:md:block">
                    <div
                      className="w-[100%] h-[10%] left-3 absolute 
                        mt-1 bg-teal-700 "
                    >
                        {
                            link.sublinks.map((sublink)=>(
                                <li className="text-sm text-gray-600 my-2.5">
                                    <a
                                        className="hover:text-primary"
                                    >
                                        {sublink.Head}
                                    </a>
                                </li>
                            ))
                        }
                    </div>
                
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5"
                  >
                    {slinks.Head}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

export default NavLink