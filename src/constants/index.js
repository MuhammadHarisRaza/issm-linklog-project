import card1 from "../assets/card1.png"
import card2 from "../assets/card2.jpg"
import card3 from "../assets/card3.jpg"

import instagram from "../assets/instagram.svg"
import facebook from "../assets/facebook.svg"
import linkedin from "../assets/linkedin.svg"
import twitter from "../assets/twitter.svg"


import about1 from "../assets/about1.jpg"
import about2 from "../assets/about2.jpg"
import about3 from "../assets/about3.jpg"
import about4 from "../assets/about4.jpg"
import about5 from "../assets/about5.jpeg"

import Hero1 from "../assets/hero1.jpg"
import Hero2 from "../assets/hero2.jpg"
import Hero3 from "../assets/hero3.jpg"

export const HOME ="We see the future of logistics"
export const HOME_2 ="through technology"
export const HOME_BUTTON_TEXT= "VIEW OUR PORTFOLIO"
export const INFO_TITLE ="It is all about connections."
export const INFO_DESCRIPTION ="Logistics real estate connects products with the people who need them. Link connects businesses with the warehouse spaces they need to make it all happen—helping its customers grow all along the way."
export const INFO_QUESTION ="We will get you there."
export const INFO_ANSWER ="Link owns the largest portfolio of U.S.-only industrial real estate. Our scale is expansive, our technology is leading-edge and our people are talented contributors who bring a passion for what we do."

export const INFO_CARD_DATA= [
    {
        img:card1,
        title:"Link Announces Strong Third Quarter Results",
        description:"Significant and sustained demand reflected in broad-based leasing activity."
    },
    {
        img:card2,
        title:"Second Annual CoreGiving Day ",
        description:"Link, in partnership with Blackstone and 13 other companies, donated over 17K hours and provided over 650K meals."
    },
    {
        img:card3,
        title:"Fighting Child Hunger ",
        description:"On CoreGiving Day, Blackstone, Link and 13 other companies will volunteer across the U.S."
    },
]

export const ABOUT_DATA= [
    {
        image:about1,
        Title:"Link's 2021 ESG Report",
        Description:"At Link, strong environmental, social and governance (ESG) practices are core to our identity as a firm. Our 2021 ESG report recaps our progress during the calendar year and shows how we will continue to redefine what sustainability looks like in the industrial real estate sector.",
        ButtonText:"EXPLORE THE REPORT",
        flexStyle:"flex-row",
        imageStyle:"rounded-bl-[100px]",
        buttonStyle:"rounded-tl-3xl"

    },
    {
        image:about2,
        Title:"National scale, local service.",
        Description:"Our large footprint in gateway cities, key distribution hubs and high-population growth areas enable us to provide world-class, personalized service throughout the U.S.",
        ButtonText:"VIEW OUR PORTFOLIO",
        flexStyle:"flex-row",
        imageStyle:"rounded-tl-[100px]",
        buttonStyle:"rounded-tl-3xl"

    },
    {
        image:about3,
        Title:"Building a satisfying career.",
        Description:"Our commitment to employee well-being, satisfaction and support enables us to attract, develop, inspire and reward great people",
        ButtonText:"VIEW JOB OPENINGS",
        flexStyle:"flex-row-reverse",
        imageStyle:"rounded-tr-[100px]",
        buttonStyle:"rounded-tl-3xl"

    },
    {
        image:about4,
        Title:"We design and build warehouses that allow our customers to evolve.",
        Description:"Link seamlessly manages the entire process of delivering facilities that support our customers’ long-term growth strategies.",
        ButtonText:"LEARN MORE",
        flexStyle:"flex-row",
        imageStyle:"rounded-tl-[100px]",
        buttonStyle:"rounded-tl-3xl"

    },
    {
        image:about5,
        Title:"From the ground up: a holistic approach to ESG.",
        Description:"Sustainability is built into our foundation. At the heart of everything we do, it drives our commitment to renewable energy, green building technology and carbon neutrality.",
        ButtonText:"LEARN MORE",
        flexStyle:"flex-row-reverse",
        imageStyle:"rounded-br-[100px]",
        buttonStyle:"rounded-tl-3xl"
    },
]

export const STATS = [
    {
        stat:"1000+",
        description:"employees throughout the U.S.",
        style:"border-r-2 border-r-black"
    },
    {
        stat:"25",
        description:"offices in key markets across the U.S.",
        style:"border-r-2 border-r-black"
    },
    {
        stat:"550M",
        description:"square feet",
        style:"border-r-2 border-r-black"
    },
    {
        stat:"3700+",
        description:"properties",
        style:""
    },
]

export const PROPERTIES=[
    {
        image:Hero2,
        region:"EAST REGION",
        area:"202,307,000",
        total:"1,358"
    },
    {
        image:Hero1,
        region:"CENTRAL REGION",
        area:"185,420,000",
        total:"1,123"
    },
    {
        image:Hero3,
        region:"WEST REGION",
        area:"147,065,000",
        total:"1,062"
    },
]

export const CHARITY = {
    image:about4,
    Title:"Our space is your space.",
    Description:"Link invites charities, nonprofits and philanthropic organizations across the country to utilize our warehouse space in order to help them continue the critical work they do.",
    ButtonText:"LEARN MORE",
    flexStyle:"flex-row",
    imageStyle:"rounded-tl-[100px]",
    buttonStyle:"rounded-tr-3xl text-white bg-black"
}

export const socialMedia = [
    {
      id: "social-media-1",
      icon: instagram,
      link: "https://www.instagram.com/",
    },
    {
      id: "social-media-2",
      icon: facebook,
      link: "https://www.facebook.com/",
    },
    {
      id: "social-media-3",
      icon: twitter,
      link: "https://www.twitter.com/",
    },
    {
      id: "social-media-4",
      icon: linkedin,
      link: "https://www.linkedin.com/",
    },
  ];

  export const FOOTER_LINKS = [
    {
      title: "PORTFOLIO",
      links: [
        {
          name: "East Region",
        },
        {
          name: "Central Region",
        },
        {
          name: "West Region",
        },
      ],
    },
    {
        title: "ABOUT",
        links: [
          {
            name: "Leadership",
          },
          {
            name: "News",
          },
          {
            name: "ESG",
          },
          {
            name: "2021 ESG Report",
          },
          {
            name: "Community Link",
          },
        ],
    },
    {
        title: "CUSTOMER LOGIN",
        links: [],
    },
    {
        title: "CAPABILITIES",
        links: [
          {
            name: "Customer Support",
          },
          {
            name: "Customer Property Development",
          },
        ],
    },
    {
        title: "CAREERS",
        links: [
          {
            name: "Job Openings",
          },
          {
            name: "Internship",
          },
        ],
    },
    {
        title: "BROKEN MARKETING",
        links: [],
    },
    {
        title: "CONTACT",
        links: [],
    },
    
];