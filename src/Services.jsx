import React, { useRef, useEffect, useState } from "react";
import "./Services.css";

import imgss1 from "./assets/websolution.jpg";
import imgss2 from "./assets/digitalmarketing.jpg";
import imgss3 from "./assets/uiux.jpg";
import imgss4 from "./assets/logodesign.jpg";
import imgss5 from "./assets/resume.jpg";
import imgss6 from "./assets/socialmedia.jpg";

const servicesData = [
  {
    title: "Custom Web Solutions",
    description:
      "Custom MERN stack websites built to showcase your brand and help grow your business online.",
    imageUrl: imgss1,
    getserv: "Start a Chat",
    links:
      "https://wa.me/918438679529?text=Hi%20I%20came%20across%20your%20portfolio%20and%20was%20impressed%20by%20your%20Custom%20Web%20Solutions."
  },
  {
    title: "UI/UX Design (Figma)",
    description:
      "Well-structured, user-friendly, and visually engaging website UI/UX designs crafted in Figma.",
    imageUrl: imgss3,
    getserv: "Start a Chat",
    links:
      "https://wa.me/918438679529?text=Hi%20I%20came%20across%20your%20portfolio%20and%20was%20impressed%20by%20your%20UI%2FUX%20Design."
  },
  {
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing solutions that enhance brand awareness and online sales.",
    imageUrl: imgss2,
    getserv: "Start a Chat",
    links:
      "https://wa.me/918438679529?text=Hi%20I%20came%20across%20your%20portfolio%20and%20was%20impressed%20by%20your%20Digital%20Marketing."
  },
  {
    title: "Logo Designing",
    description:
      "Business-oriented logo designs that communicate your brand values and create strong presence.",
    imageUrl: imgss4,
    getserv: "Start a Chat",
    links:
      "https://wa.me/918438679529?text=Hi%20I%20came%20across%20your%20portfolio%20and%20was%20impressed%20by%20your%20Logo%20Designing."
  },
  {
    title: "Resume & CV Design",
    description:
      "Polished resumes and professional designs crafted to help you stand out.",
    imageUrl: imgss5,
    getserv: "Start a Chat",
    links:
      "https://wa.me/918438679529?text=Hi%20I%20came%20across%20your%20portfolio%20and%20was%20impressed%20by%20your%20Resume%20Design."
  },
  {
    title: "Social Media Management",
    description:
      "Creative social media strategies with consistent posting and engagement.",
    imageUrl: imgss6,
    getserv: "Start a Chat",
    links:
      "https://wa.me/918438679529?text=Hi%20I%20came%20across%20your%20portfolio%20and%20was%20impressed%20by%20your%20Social%20Media%20Management."
  }
];

function Services() {
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -360, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 360, behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className={`services-section ${visible ? "show" : ""}`}
    >
      <h2 className="services-title">Services I Provide_</h2>

      <div className="services-carousel-wrapper">
        <button className="carousel-arrow left-arrow" onClick={scrollLeft}>
          ←
        </button>

        <div className="services-carousel" ref={scrollRef}>
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-image-container">
                <img src={service.imageUrl} alt="" className="service-image" />
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <a
                  href={service.links}
                  target="_blank"
                  rel="noreferrer"
                  className="getservss"
                >
                  {service.getserv}
                </a>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-arrow right-arrow" onClick={scrollRight}>
          →
        </button>
      </div>
    </section>
  );
}

export default Services;
