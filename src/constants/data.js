import {
  engineer1,
  engineer2,
  engineer3,
  engineer4,
  lamp,
  fan,
  circuit,
  geyser,
} from "../assets";
import { Plug, Cable, Cross, Shell, HardDrive, Home } from "lucide-react";

export const navbarLinks = [
  {
    id: 1,
    text: "Home",
    href: "/",
  },
  {
    id: 3,
    text: "Our Works",
    href: "#works",
  },
  {
    id: 4,
    text: "Statictics",
    href: "#statistics",
  },
];
export const heroImages = [
  {
    image: engineer1,
    description:
      "Wiring and Installation Solutions: Comprehensive electrical wiring services for new construction, renovations, and upgrades. Our skilled electricians ensure safe and efficient electrical systems tailored to your needs.",
  },
  {
    image: engineer2,
    description:
      "Fixture Installation and Repair: Seamless installation of faucets, sinks, toilets, and other fixtures, coupled with timely repairs to address leaks, drips, and malfunctions.",
  },
  {
    image: engineer3,
    description:
      "Custom Furniture Design and Construction: Transform your space with bespoke furniture pieces crafted to your specifications. Our skilled carpenters blend functionality and aesthetics to create timeless pieces.",
  },
  {
    image: engineer4,
    description:
      "Mechanical Engineering Services: From HVAC system design to machinery optimization, our mechanical engineers provide solutions that enhance efficiency, reliability, and occupant comfort.",
  },
];
export const servicesData = [
  {
    title: "Engineering Services",
    desc: "Our expert engineers offer a wide range of services including structural engineering, civil engineering, mechanical engineering, and more.",
    icon: Plug,
  },
  {
    title: "Plumbing Services",
    desc: "Our skilled plumbers are equipped to handle all types of plumbing needs, from routine maintenance and repairs to complex installations and upgrades.",
    icon: Shell,
  },
  {
    title: "Electrical Services",
    desc: "With our team of experienced electricians, we offer comprehensive electrical services to address any electrical issue or project. From wiring and lighting installations to electrical system upgrades and troubleshooting.",
    icon: Cable,
  },
  {
    title: "Hardware Installation",
    desc: "Whether it's assembling furniture, installing fixtures, or mounting equipment, our hardware installation services make it easy to get the job done efficiently and accurately.",
    icon: HardDrive,
  },
  {
    title: "Repair and Maintenance",
    desc: "We provide timely and effective repair and maintenance services to keep your property running smoothly. From fixing leaks and repairing electrical faults to performing routine inspections and preventive maintenance.",
    icon: Cross,
  },
  {
    title: "Commercial Contracting",
    desc: "Our commercial contracting services cater to the unique needs of businesses, delivering reliable solutions for construction, renovation, and maintenance projects. Whether it's building upgrades, office renovations, or facility expansions.",
    icon: Home,
  },
];
export const worksData = [
  {
    id: 1,
    images: [
      {
        src: lamp,
      },
    ],
    title: "Sensor Light",
    desc: "Our sensor light operates with human touch, providing convenience and efficiency in lighting control. With a simple touch, users can activate or deactivate the light, eliminating the need for traditional switches and enhancing user experience. Whether it's for home or commercial use, our sensor light offers intuitive functionality and modern design, making it a versatile and practical choice for any space.",
  },
  {
    id: 2,
    images: [
      {
        src: fan,
      },
    ],
    title: "Exhaust Fan",
    desc: "Our exhaust fan offers powerful ventilation solutions for homes and businesses, effectively removing odors, moisture, and pollutants from indoor spaces. With its sleek design and quiet operation, our exhaust fan seamlessly integrates into any environment, providing superior air quality and comfort. Whether it's in the kitchen, bathroom, or workplace, our exhaust fan is a reliable and efficient choice for maintaining a healthy and fresh atmosphere.",
  },
  {
    id: 3,
    images: [
      {
        src: circuit,
      },
    ],
    title: "Sensor Light",
    desc: "Our table circuit is ingeniously designed to provide convenient access to power outlets and USB ports, allowing users to connect accessories such as mobile phones, computers, and other electronic devices directly from their workspace. Positioned discreetly at the bottom of the table, this integrated circuit offers seamless functionality without cluttering the tabletop, enhancing productivity and efficiency in any environment. With its modern design and practicality, our table circuit transforms any workspace into a tech-friendly hub, keeping devices powered and within reach at all times.",
  },
  {
    id: 4,
    images: [
      {
        src: geyser,
      },
    ],
    title: "Electric Geyser",
    desc: "Our electric geyser provides instant hot water on demand, offering convenience and comfort for your daily needs. With its efficient heating element and rapid water heating technology, our geyser ensures a steady supply of hot water for bathing, cooking, and cleaning. Designed for durability and energy efficiency, our electric geyser is a reliable solution for homes, hotels, and commercial establishments, delivering consistent performance and cost savings year after year.",
  },
];
