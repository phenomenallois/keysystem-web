import React from 'react';
import software from "../assets/software.png";
import cognizant from "../assets/cognizant.png";
import temenos from "../assets/temenos.png";
import net from "../assets/net.png";
import tech from "../assets/tech.png";
import keysystem from "../assets/keysystem.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-teal-200text-gray-300 pt-16 pb-10 px-6 md:px-12">
      {/* Our Partners Section */}
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Our Partners</h2>
        <p className="text-gray-400 mb-6">Creating a Synergy with global brands</p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
        <img src={software}alt="sotware"className="h-6 md:h-8" />
          <img src={cognizant}alt="Cognizant" className="h-6 md:h-8" />
          <img src={temenos}alt="Teminos"  className="h-6 md:h-8" />
          <img src={net}alt="NetInfo" className="h-6 md:h-8" />
          <img src={tech}alt="Tech Manhidra" className="h-6 md:h-8" />
        </div>
      </div>

      {/* Ready to Get Started Section */}
<div className="max-w-4xl mx-auto bg-[#0C0E1B] relative overflow-hidden text-white p-8 md:p-12 rounded-2xl mb-20 shadow-2xl">
  <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Ready to get started?</h2>
  <p className="text-sm mb-4 text-white-400">Shoot us a Mail</p>
  <p className="mb-4 text-white-400 leading-relaxed">
    Join numerous corporations, organizations, and businesses as they scale their teams,
    tap into new market opportunities and build innovative products with KeySystem Technology.
  </p>
  <p className="mb-6 text-white-400 leading-relaxed">
    Join thousands of students who are ready to learn new skills or take their career to
    the next level by enrolling in one of our training programs today.
  </p>
  <a
    href="mailto:enquiries@keysystemltc"
    className="inline-block bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold px-6 py-3 rounded-full transition-shadow shadow-lg hover:shadow-blue-500/50 hover:scale-105 duration-300"
  >
    Send Us a Mail Now
  </a>

  {/* Decorative right-side circular element */}
  <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-gradient-to-tr from-[#1E1F4F] via-[#1E2A6F] to-[#3347A5] opacity-40 rounded-full blur-2xl"></div>
</div>


      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Copyright */}
        <div>
        <img
            src={keysystem}
            alt="IT Consultant"
            className="w-24 rounded-xl" // 6rem width
          />
          <p className="text-sm">&copy; 2025 KeySystem Technologies. All rights reserved.</p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">SERVICES</h3>
          <ul className="text-sm space-y-2">
            <li>Core refresh</li>
            <li>Application management services</li>
            <li>Evolution & enhancement services</li>
            <li>System assurance & validation</li>
            <li>Digital banking & financial inclusion</li>
            <li>Core (mini/mobile lending) solution</li>
            <li>Staff augmentation solutions</li>
            <li>Risk management & internal control solutions</li>
            <li>Data Warehouse & Business Intelligence (BI)</li>
            <li>Enterprise Document Management Solutions</li>
            <li>KeySystem software implementation services</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">QUICK LINKS</h3>
          <ul className="text-sm space-y-2">
            <li>About Us</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">CONTACT</h3>
          <div className="text-sm space-y-4">
            <div>
              <p className="font-semibold text-white">Nigeria</p>
              <p>550 Adesola Omotola Close, Off Samuel Adedoyin Street, Victoria Island</p>
              <p>Tel: +234 818 444 1444</p>
            </div>
            <div>
              <p className="font-semibold text-white">United Kingdom</p>
              <p>39 Kenyon Lane, Off Moston Lane, Moston, Manchester, United Kingdom, M40 9LG</p>
              <p>Tel: +44 750 483 2817</p>
            </div>
            <div>
              <p className="font-semibold text-white">Canada</p>
              <p>Tel: +1 647 977 1435</p>
            </div>
            <div>
              <p className="font-semibold text-white">Email</p>
              <p>enquiries@keysystemltc</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom with Social Icons */}
      <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/KeySystemTech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-black"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com/KeySystemTech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-black"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/keysystemtechnologies"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-black"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://www.instagram.com/keysystemtech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-black"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <p className="mt-4 md:mt-0">&copy; 2025 KeySystem. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
