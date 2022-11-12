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

import home from "../assets/home.webp"

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
        flexStyle:"flex-col md:flex-row",
        imageStyle:"rounded-bl-[100px]",
        buttonStyle:"rounded-tr-3xl md:rounded-tl-3xl",
        textStyle:"text-left md:text-left",
        buttonFlex:"flex-row"

    },
    {
        image:about2,
        Title:"National scale, local service.",
        Description:"Our large footprint in gateway cities, key distribution hubs and high-population growth areas enable us to provide world-class, personalized service throughout the U.S.",
        ButtonText:"VIEW OUR PORTFOLIO",
        flexStyle:"flex-col md:flex-row",
        imageStyle:"rounded-tl-[100px]",
        buttonStyle:"rounded-tr-3xl md:rounded-tl-3xl ",
        textStyle:"text-left md:text-left",
        buttonFlex:"flex-row"

    },
    {
        image:about3,
        Title:"Building a satisfying career.",
        Description:"Our commitment to employee well-being, satisfaction and support enables us to attract, develop, inspire and reward great people",
        ButtonText:"VIEW JOB OPENINGS",
        flexStyle:"flex-col md:flex-row-reverse",
        imageStyle:"rounded-tr-[100px]",
        buttonStyle:"rounded-tr-3xl md:rounded-tl-3xl place-items-end",
        textStyle:"text-left md:text-right",
        buttonFlex:"flex-row md:flex-row-reverse"

    },
    {
        image:about4,
        Title:"We design and build warehouses that allow our customers to evolve.",
        Description:"Link seamlessly manages the entire process of delivering facilities that support our customers’ long-term growth strategies.",
        ButtonText:"LEARN MORE",
        flexStyle:"flex-col md:flex-row",
        imageStyle:"rounded-tl-[100px]",
        buttonStyle:"rounded-tr-3xl md:rounded-tl-3xl",
        textStyle:"text-left md:text-left",
        buttonFlex:"flex-row"

    },
    {
        image:about5,
        Title:"From the ground up: a holistic approach to ESG.",
        Description:"Sustainability is built into our foundation. At the heart of everything we do, it drives our commitment to renewable energy, green building technology and carbon neutrality.",
        ButtonText:"LEARN MORE",
        flexStyle:"flex-col md:flex-row-reverse",
        imageStyle:"rounded-br-[100px]",
        buttonStyle:"rounded-tr-3xl md:rounded-tl-3xl items-end",
        textStyle:"text-left md:text-right",
        buttonFlex:"flex-row md:flex-row-reverse"
    },
]

export const STATS = [
    {
        stat:"1000+",
        description:"employees throughout the U.S.",
        style:"md:border-r border-r-0  border-r-black"
    },
    {
        stat:"25",
        description:"offices in key markets across the U.S.",
        style:"md:border-r border-r-0 border-r-black"
    },
    {
        stat:"550M",
        description:"square feet",
        style:"md:border-r border-r-0 border-r-black"
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
    image:home,
    Title:"Our space is your space.",
    Description:"Link invites charities, nonprofits and philanthropic organizations across the country to utilize our warehouse space in order to help them continue the critical work they do.",
    ButtonText:"LEARN MORE",
    flexStyle:"md:flex-row flex-column",
    imageStyle:"rounded-tl-[100px]",
    buttonStyle:"rounded-tr-3xl text-white bg-charcoal hover:bg-black"
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
    
];

export const LINKS = [
    {
        title: "CUSTOMER LOGIN",
        links: [],
    },
    {
        title: "BROKEN MARKETING",
        links: [],
    },
    {
        title: "CONTACT",
        links: [],
    },
]

export const OFFICE_DATA =[
    {
        title:"HEADQUARTERS",
        description:"90 Park Ave, 32nd Floor New York, NY 10016",
        phoneNumber:"TEL +1 212-297-1000",
        fax:"FAX +1 212-297-1091"
    },
    {
        title:"MEDIA",
        description:"If you are a member of the press, please direct inquiries to:",
        phoneNumber:"msachs@linklogistics.com",
        fax:"LinkLogistics@fgsglobal.com."
    },
    {
        title:"LEASING TEAM",
        description:"For general inquiries about Link and our properties, please send us a message.",
        phoneNumber:"",
        fax:""
    },
]


export const REGION = [
    {
        region:"WEST REGION",
        office:[
            {
                name:"Irvine",
                streetAddress:"3333 Michelson Dr, Suite 725",
                postalAddress:"Irvine, CA 92612"
            },
            {
                name:"Jurupa Valley",
                streetAddress:"3401 Etiwanda Ave Jurupa Valley,",
                postalAddress:"CA 91752"
            },
            {
                name:"Reno",
                streetAddress:"6900 S. McCarran Blvd Reno, NV",
                postalAddress:"89509"
            },
            {
                name:"Sacramento",
                streetAddress:"701 University Ave, Suite 150",
                postalAddress:"Sacramento, CA 95825"
            },
            {
                name:"San Francisco Bay Area",
                streetAddress:"700 Larkspur Circle, Suite 126",
                postalAddress:"Larkspur , CA 94939"
            },
            {
                name:"Walnut Creek",
                streetAddress:"1350 Treat Blvd, Suite 210 Walnut",
                postalAddress:"Creek, CA 94597"
            },
        ]
    },
    {
        region:"CENTRAL REGION",
        office:[
            {
                name:"Austin",
                streetAddress:"1210 Nueces St, 1st floor Austin,",
                postalAddress:"TX 78701"
            },
            {
                name:"Chicago",
                streetAddress:"233 S. Wacker Dr, Fl 46 Chicago,",
                postalAddress:"IL 60606"
            },
            {
                name:"Cincinnati",
                streetAddress:"1435 Vine St Cincinnati, OH",
                postalAddress:"45202"
            },
            {
                name:"Dallas",
                streetAddress:"13727 Noel Rd, Suite 750 Dallas,",
                postalAddress:"TX 75240"
            },
            {
                name:"Houston",
                streetAddress:"1980 Oak Blvd, Suite 100",
                postalAddress:"Houston, TX 77056"
            },
            {
                name:"Kansas City",
                streetAddress:"1500 W Geospace Dr Kansas",
                postalAddress:"City, MO 64056"
            },
            {
                name:"Minneapolis",
                streetAddress:"705 Marquette Ave, Suite 113",
                postalAddress:"Minneapolis, MN 55402"
            },
            {
                name:"Rosemont",
                streetAddress:"9550 W. Higgins Rd, Suite 550",
                postalAddress:"Rosemont, IL 60018"
            },
        ]
    },
    {
        region:"EAST REGION",
        office:[
            {
                name:"Atlanta",
                streetAddress:"3455 Peachtree Road NE, Suite",
                postalAddress:"2000 Atlanta, GA 30326"
            },
            {
                name:"Baltimore",
                streetAddress:"2330 W. Joppa Rd, Suite 365",
                postalAddress:"Lutherville Timonium, MD 21093"
            },
            {
                name:"Charlotte",
                streetAddress:"1447 S. Tryon St, Suite 200",
                postalAddress:"Charlotte, NC 28203"
            },
            {
                name:"Miami",
                streetAddress:"3470 NW 82nd Ave, Suite 760",
                postalAddress:"Doral, FL 33122"
            },
            {
                name:"Philadelphia",
                streetAddress:"602 W. Office Center Dr, Suite",
                postalAddress:"200 Fort Washington, PA 19034"
            },
            {
                name:"Orlando",
                streetAddress:"250 S. Park Ave., Suite 320",
                postalAddress:"Winter Park, FL 32789"
            },
        ]
    },
]


export const INF0 = "If you would like to learn more about Link and what we do, please send us a message."