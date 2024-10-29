import React from 'react';
import { SiFacebook } from "react-icons/si";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const footerLinks = [
  {
    title: "Product List",
    links: [
      { name: "Digital Podium", link: "/OurProducts" },
      { name: "Projector", link: "/OurProducts" },
      { name: "Sign Board", link: "/OurProducts" },
      { name: "Writing Boards", link: "/OurProducts" },
      { name: "Digital Projector", link: "/OurProducts" },
    ],
  },
  {
    title: "Product List",
    links: [
      { name: "Playground Equipment", link: "/OurProducts" },
      { name: "Play Equipment", link: "/OurProducts" },
      { name: "Green Board", link: "/OurProducts" },
      { name: "Stand Board", link: "/OurProducts" },
      { name: "Projector Screens", link: "/OurProducts" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      { name: "info@gravityglobalexports.com", link: "mailto:info@gravityglobalexports.com" },
      { name: "8048955493", link: "tel:8048955493" },
      { name: "WhatsApp", icon: <FaWhatsapp />, link: "https://wa.me/8048955493" },],
  },
  {
    title: "Information",
    links: [
      { name: "Home", link: "/" },
      { name: "Product List", link: "/OurProducts" },
      { name: "About Us", link: "/About" },
      { name: "Terms & Conditions", link: "/TermsAndConditions" },
      { name: "Privacy Policy", link: "/PrivacyPolicy" },
    ],
  },
];

const socialIcons = [
  { icon: <SiFacebook />, link: "#", label: "Facebook" },
  { icon: <FaInstagram />, link: "#", label: "Instagram" },
  { icon: <FaYoutube />, link: "#", label: "YouTube" },
  { icon: <FaWhatsapp />, link: "https://wa.me/8048955493", label: "WhatsApp" },
];

const ColorFoot = () => (
  <footer className="bg-black p-10 font-[sans-serif] tracking-wide">
    <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-5 gap-4 mt-1">
      <div className="mt-3">
        <address className='font-bold text-white'>
          Universe Educational Visuals<br />
          9/W, 1A, Akilandeswari Nagar,<br />
          Canara Bank Colony,Ammapatti Salai, <br />
          Thuraiyur, Dhan Lakshmi Nagar<br />
          Tiruchirappalli - 621010, Tamil Nadu.
        </address>
        <img src={logo} alt="Gravity Global Exports Logo" className="w-52 my-4" />
        <ul className="flex space-x-6">
          {socialIcons.map((social, index) => (
            <li key={index}>
              <a href={social.link} aria-label={social.label} className="text-white hover:bg-gray-300">
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {footerLinks.map((section, index) => (
        <div key={index}>
          <h4 className="text-lg font-semibold mb-6 text-orange-500">{section.title}</h4>
          <ul className="space-y-4">
            {section.links.map((item, i) => (
              <li key={`${index}-${i}`}>
                <Link
                  to={item.link}
                  className="text-white hover:text-green-300 text-sm"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <p className="text-white text-sm mt-10 text-center">© Universe Educational Visuals All rights reserved.</p>
  </footer>
);

export default ColorFoot;
