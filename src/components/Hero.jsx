import React from "react";

import image3 from "../assets/image3.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import pci from "../assets/pci.png";
import ism from "../assets/ism.png";
import cybersecurity from "../assets/cybersecurity.png";
import gdpr from "../assets/gdpr.png";
import ndpr from "../assets/ndpr.png";
import iso from "../assets/iso.png";
import sarbenes from "../assets/sarbenes.png";
import togaf from "../assets/togaf.png";
import iso2000 from "../assets/iso2000.png";
import aicpa from "../assets/aicpa.png";
import aicpa2 from "../assets/aicpa2.png";
import cobit from "../assets/cobit.png";
import ssae from "../assets/ssae.png";
import pcaob from "../assets/pcaob.png";
import coso from "../assets/coso.png";
import ssae16 from "../assets/ssae16.png";
import iaasb from "../assets/iaasb.png";
import isae from "../assets/isae.png";
import sterling from "../assets/sterling.png";
import crusader from "../assets/crusader.png";
import santander from "../assets/santander.png";
import bankiga from "../assets/bankiga.png";
import lapo from "../assets/lapo.png";
import nafc from "../assets/nafc.png";
import nbf from "../assets/nbf.png";
import npf from "../assets/npf.png";
import military from "../assets/military.png";
import stanbic from "../assets/stanbic.png";
import muscat from "../assets/bank-muscat.png";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-teal-200 p-4 shadow-lg py-16 px-6 text-center animate-gradient">
 
 <p className="text-sm text-blue-300 mb-2">Welcome to KeySystem</p>
      <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
        IT Consulting for <br />
        Forward-thinking <br />
        Businesses
      </h1>
      <p className="text-lg text-white mt-4 mb-8">
        Driving Digital Transformation, One Solution at a Time
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-10">
  <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-full w-full sm:w-auto">
    Get Started
  </button>
  <button className="border border-blue-400 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-full w-full sm:w-auto">
    Learn More
  </button>
</div>

{/* Hero Image */}
<div className="flex justify-center px-4">
  <img
    src={image3}
    alt="IT Consultant"
    className="rounded-xl w-full max-w-4xl"
  />
</div>


   {/* Sliding Partner Logos Section */}
<div className="overflow-hidden mt-12 px-4">
  <div className="whitespace-nowrap animate-slide group hover:[animation-play-state:paused]">
    {[...Array(2)].flatMap(() =>
      [
        { name: "Sterling", src: sterling },
        { name: "Crusader", src: crusader },
        { name: "NAFC", src: nafc },
        { name: "NBF", src: nbf },
        { name: "Military", src: military },
        { name: "Stanbic", src: stanbic },
        { name: "Bank Muscat", src: muscat },
      ].map((logo, index) => (
        <img
          key={`${logo.name}-${index}`}
          src={logo.src}
          alt={logo.name}
          className="inline-block h-16 w-auto mx-4 md:mx-6 object-contain"
        />
      ))
    )}
  </div>
</div>

{/* Trusted Consultant Section */}
<div className="mt-24 px-4 text-white text-center">
  <h2 className="text-3xl md:text-4xl font-bold mb-2">
    Why we are your Trusted Consultant
  </h2>
  <p className="text-blue-300 text-sm mb-4">
    Empowering Businesses with Cutting-edge Technology
  </p>
  <p className="text-lg max-w-2xl mx-auto mb-6">
    Excellence isn’t a goal, it’s our DNA; our relentless pursuit of excellence
    is the driving force behind our success. Excellence is our legacy, and we
    are proud to carry it forward.
  </p>
  <p className="text-white mb-8">
    Watch the video to see how we are innovating to keep businesses on top of
    their games.
  </p>
  <div className="flex justify-center px-2">
    <img
      src={image1}
      alt="IT Consultant"
      className="rounded-xl w-full max-w-4xl"
    />
  </div>
</div>


      {/* Offerings Section */}
      <div className="mt-24 px-4">
        <h2 className="text-3xl font-bold mb-4 text-white">Our Offerings</h2>
        <p className="text-white max-w-2xl mx-auto mb-6">
          Leverage KeySystem’s cutting-edge expertise to transform your
          business. Our tailored software and cybersecurity solutions drive
          efficiency, security, and growth. We empower businesses to thrive in
          the digital age
        </p>
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full mb-10">
          Learn more
        </button>

        {/* Service Pills */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center max-w-4xl mx-auto">
          {[
            "Core banking services",
            "Staff augmentation solutions",
            "Business Intelligence",
            "Digital Banking & financial inclusion",
            "Internal audit solutions",
            "KeySystem software testing",
            "Online/mobile lending solution",
            "Data Warehouse",
            "Cybersecurity Solutions",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gradient-to-r from- to-[#121A2C] hover:from-[#2F3A6B] hover:to-[#1C2945] border border-[#2F3A6B] px-5 py-3 text-sm rounded-full text-gray transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:-translate-y-1"
            >
              {item}
            </div>
          ))}
        </div>

        {/* What We Represent Section */}
        <div className="mt-24 px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            What we Represent
          </h2>
          <p className="text-blue-300 text-sm mb-4">
            Our relentless pursuit of excellence is the driving force behind our
            success
          </p>
          <p className="text-gray-400 max-w-3xl mx-auto mb-10">
            Excellence isn’t a goal, it’s our DNA; our relentless pursuit of
            excellence is the driving force behind our success. Excellence is
            our legacy, and we are proud to carry it forward. Watch the video to
            see how we are innovating to keep businesses on top of their games.
          </p>
          {/* Vision and Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
            {/* Vision Card */}
            <div className="bg-[#0D111C] border border-blue-900 rounded-xl p-6 flex flex-col items-center text-center shadow-md">
              <img
                src={image2}
                alt="IT Consultant"
                className="rounded-xl w-[10%] mb-4"
              />
              <h3 className="text-lg font-semibold text-gray mb-2">
                Our Vision
              </h3>
              <p className="text-gray-400 text-sm">
                To be the trusted partner for businesses seeking to leverage
                technology to improve decision-making, unlock new opportunities,
                and achieve transformative growth.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-[#0D111C] border border-blue-900 rounded-xl p-6 flex flex-col items-center text-center shadow-md">
              <img
                src={image4}
                alt="IT Consultant"
                className="rounded-xl w-[10%] mb-4"
              />
              <h3 className="text-lg font-semibold text-gray mb-2">
                Our Mission
              </h3>
              <p className="text-gray-400 text-sm">
                We bridge the gap between technology and business, delivering
                customized ICT solutions that drive efficiency, growth, and
                competitive advantage.
              </p>
            </div>
          </div>

          {/* Compliance Certifications Section */}
          <div className="text-center mb-16">
           

            <h2 className="text-2xl md:text-3xl font-bold text-gray mb-4 font-montserrat">
  Compliance Certifications/Standards We Specialize In
</h2>

            <p className="text-blue-300 max-w-2xl mx-auto mb-6">
              Elevate Your Organization's Security Posture with Our
              Compliance/Standards Consulting Services
            </p>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full">
              Contact Us
            </button>
          </div>
          {/* Compliance Certifications Section */}
          <div className="bg-white py-20 px-4 text-center rounded-xl shadow-md mt-24">
            {/* First Row - 6 logos */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-8 max-w-5xl mx-auto">
              {[
                { name: "pci", src: pci },
                { name: "ism", src: ism },
                { name: "cybersecurity", src: cybersecurity },
                { name: "gdpr", src: gdpr },
                { name: "ndpr", src: ndpr },
                { name: "iso", src: iso },
              ].map((cert, index) => (
                <div
                  key={`cert-row1-${index}`}
                  className="bg-white p-2 rounded-md shadow-sm w-20 h-20 flex justify-center items-center"
                >
                  <img
                    src={cert.src}
                    alt={cert.name}
                    className="object-contain w-full h-full"
                  />
                </div>
              ))}
            </div>

            {/* Second Row - 6 logos */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-8 max-w-5xl mx-auto">
              {[
                { name: "sarbenes", src: sarbenes },
                { name: "togaf", src: togaf },
                { name: "iso2000", src: iso2000 },
                { name: "aicpa", src: aicpa },
                { name: "aicpa2", src: aicpa2 },
                { name: "cobit", src: cobit },
              ].map((cert, index) => (
                <div
                  key={`cert-row2-${index}`}
                  className="bg-white p-2 rounded-md shadow-sm w-20 h-20 flex justify-center items-center"
                >
                  <img
                    src={cert.src}
                    alt={cert.name}
                    className="object-contain w-full h-full"
                  />
                </div>
              ))}
            </div>

            {/* Third Row - 6 logos */}
            <div className="flex flex-wrap justify-center items-center gap-6 max-w-5xl mx-auto">
              {[
                { name: "ssae", src: ssae },
                { name: "pcaob", src: pcaob },
                { name: "coso", src: coso },
                { name: "ssae16", src: ssae16 },
                { name: "iaasb", src: iaasb },
                { name: "isae", src: isae },
                // Replace or remove if not needed
              ].map((cert, index) => (
                <div
                  key={`cert-row3-${index}`}
                  className="bg-white p-2 rounded-md shadow-sm w-20 h-20 flex justify-center items-center"
                >
                  <img
                    src={cert.src}
                    alt={cert.name}
                    className="object-contain w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Trusted Clients Section */}
          <div className="text-center mt-24 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
              They Trust Us
            </h2>
            <p className="text-blue-300 text-sm mb-8">And so can you</p>

            {/* Row 1: 4 logos */}
            <div className="flex justify-center items-center gap-6 flex-wrap mb-6">
              {[lapo, npf, sterling, crusader].map((logo, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg px-4 py-2 shadow-sm flex justify-center items-center h-16 w-32"
                >
                  <img
                    src={logo}
                    alt={`Logo ${i}`}
                    className="object-contain h-full w-full"
                  />
                </div>
              ))}
            </div>

            {/* Row 2: 4 logos */}
            <div className="flex justify-center items-center gap-6 flex-wrap mb-6">
              {[nafc, nbf, military, stanbic].map((logo, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg px-4 py-2 shadow-sm flex justify-center items-center h-16 w-32"
                >
                  <img
                    src={logo}
                    alt={`Logo ${i + 4}`}
                    className="object-contain h-full w-full"
                  />
                </div>
              ))}
            </div>

            {/* Row 3: 3 logos */}
            <div className="flex justify-center items-center gap-6 flex-wrap">
              {[muscat, bankiga, santander].map((logo, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg px-4 py-2 shadow-sm flex justify-center items-center h-16 w-32"
                >
                  <img
                    src={logo}
                    alt={`Logo ${i + 8}`}
                    className="object-contain h-full w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

     {/* Our Process Section */}
<div className="mt-24 px-4 text-center">
  <h2 className="text-3xl md:text-4xl font-bold text-gray mb-2">
    Our Process
  </h2>
  <p className="text-gray-400 mb-4"> {/* Reduced margin to bring closer */}
    At KeySystem, we leave you with a lasting impression
  </p>

  {/* Pyramid Layout */}
  <div className="bg-[#030517] text-black min-h-screen flex items-center justify-center py-16 px-4">
    <div className="flex flex-col items-center gap-2 max-w-6xl w-full">
      {/* Top Card - Full Width */}
      <div className="bg-[#0D111C] rounded-xl p-6 shadow-lg w-full md:w-[70%] flex justify-between items-center text-left">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">
            Strategic Consultation
          </h3>
          <p className="text-gray-400 text-sm">
            We kick off with a strategic consultation to understand your
            brand, goals, and audience.
          </p>
        </div>
        <img
          src={image5}
          alt="NetInfo"
          className="rounded-xl w-20 h-auto mb-4"
        />
      </div>

      {/* Bottom Cards - Side by Side */}
      <div className="flex flex-col md:flex-row justify-center gap-6 w-full">
        {/* Card 2 */}
        <div className="bg-[#1A2235] rounded-xl p-5 shadow-lg flex justify-between items-center text-left w-full md:w-[34%]">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Collaboration
            </h3>
            <p className="text-gray-400 text-sm">
              At KeySystem, we collaborate closely to ensure the end
              result meets your expectations and makes you happy.
            </p>
          </div>
          <img
            src={image7}
            alt="NetInfo"
            className="rounded-xl w-20 h-auto mb-4"
          />
        </div>

        {/* Card 3 */}
        <div className="bg-[#1A2235] rounded-xl p-5 shadow-lg flex justify-between items-center text-left w-full md:w-[34%]">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Delivery
            </h3>
            <p className="text-gray-400 text-sm">
              Our delivery rate is 100%; our clients deserve nothing
              less.
            </p>
          </div>
          <img
            src={image6}
            alt="NetInfo"
            className="rounded-xl w-20 h-auto mb-4"
          />
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default Hero;
