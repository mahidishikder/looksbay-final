"use client";

import React from "react";
import Link from "next/link";

interface PortfolioProjectCard {
  id: string;
  title: string;
  link: string;
  mockups: {
    farLeft: string;
    midLeft: string;
    center: string;
    midRight: string;
    farRight: string;
  };
  brands: string[];
}

const projectsData: PortfolioProjectCard[] = [
  {
    id: "automotive",
    title: "Automotive & Mobility",
    link: "/services/automotive",
    mockups: {
      farLeft: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=500&q=80",
      midLeft: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=500&q=80",
      center: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80",
      midRight: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=500&q=80",
      farRight: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=500&q=80",
    },
    brands: ["Chevrolet", "KIA", "Geely", "Cofinity-X"],
  },
  {
    id: "real-estate",
    title: "Real Estate & Finance",
    link: "/services/real-estate",
    mockups: {
      farLeft: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=500&q=80",
      midLeft: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=500&q=80",
      center: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
      midRight: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=80",
      farRight: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80",
    },
    brands: ["Prosperity", "RE/MAX", "Fairway", "Compass"],
  },
  {
    id: "web-platforms",
    title: "Web Platforms & Products",
    link: "/services/web-platforms-services",
    mockups: {
      farLeft: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80",
      midLeft: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80",
      center: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
      midRight: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=500&q=80",
      farRight: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=500&q=80",
    },
    brands: ["Allur", "Wowmi", "Bridal Platform"],
  },
  {
    id: "award-winning",
    title: "Award-Winning Websites",
    link: "/services/award-winning-websites",
    mockups: {
      farLeft: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&q=80",
      midLeft: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=500&q=80",
      center: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
      midRight: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80",
      farRight: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80",
    },
    brands: ["InDrive", "Global Leathers", "Solana Payouts"],
  },
];

/**
 * 🏠 Home Component 2: Industry Grid with 5 Mockups & Animated Floating Dots
 * Pixel-perfect implementation matching user's custom design
 */
export default function Home2_IndustryGrid() {
  return (
    <section className="portfolio-section-wrapper relative bg-[#F5F6FA] py-[100px] px-6 sm:px-10 overflow-hidden">
      {/* Dynamic Floating Background Dots */}
      <div className="bg-circle dot-1" />
      <div className="bg-circle dot-2" />
      <div className="bg-circle dot-3" />
      <div className="bg-circle dot-4" />
      <div className="bg-circle dot-5" />
      <div className="bg-circle dot-6" />
      <div className="bg-circle dot-7" />
      <div className="bg-circle dot-8" />
      <div className="bg-circle dot-9" />
      <div className="bg-circle dot-10" />
      <div className="bg-circle dot-11" />
      <div className="bg-circle dot-12" />
      <div className="bg-circle dot-13" />
      <div className="bg-circle dot-14" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-[55px] relative z-10">
          <div className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#334155] mb-[18px]">
            <span className="w-[9px] h-[9px] rounded-full bg-[#2563EB]" />
            <span>Since 2016: 600+ projects shipped</span>
          </div>

          <h2 className="text-3xl sm:text-[50px] font-extrabold text-[#0f172a] leading-[1.15] tracking-[-0.025em]">
            From ambitious startups <br />
            to established B2B companies
          </h2>
        </div>

        {/* 2-Column Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[26px] relative z-10">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="glass-surface industry-project-card group bg-white rounded-[28px] pt-[44px] px-[36px] pb-0 flex flex-col items-center border border-slate-200/80 shadow-[0px_25px_50px_rgba(0,0,0,0.1)] relative overflow-hidden min-h-[580px] transition-all duration-300 hover:shadow-[0px_35px_65px_rgba(0,0,0,0.15)]"
              style={{
                backgroundImage: "radial-gradient(rgba(148, 163, 184, 0.22) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            >
              {/* Card Title */}
              <h3 className="text-[28px] font-bold text-[#0f172a] mb-[16px] text-center tracking-[-0.01em]">
                {project.title}
              </h3>

              {/* Explore Button */}
              <Link
                href={project.link}
                className="explore-pill-btn inline-flex items-center gap-3 bg-[#EEF2FF] text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white py-2.5 pl-6 pr-3 rounded-full text-base font-semibold transition-all duration-300 mb-[35px] z-20 shadow-xs"
              >
                <span>Explore work</span>
                <span className="w-7 h-7 rounded-full bg-[#2563EB] text-white group-hover:bg-white group-hover:text-[#2563EB] flex items-center justify-center text-xs font-bold transition-all duration-300 group-hover:translate-x-0.5">
                  ❯
                </span>
              </Link>

              {/* 5 Mockups Fan Container */}
              <div className="mockup-container w-full h-[330px] flex justify-center items-end relative mt-auto">
                <div className="fan-mockup relative w-full max-w-[520px] h-full flex justify-center">
                  {/* Far-Left */}
                  <img loading="lazy" decoding="async"
                    src={project.mockups.farLeft}
                    alt={`${project.title} mockup 1`}
                    className="mockup far-left absolute bottom-0 w-[150px] h-[230px] left-[30px] z-[2] rounded-t-xl shadow-[0px_14px_30px_rgba(0,0,0,0.12)] object-cover transition-transform duration-350 ease-out"
                  />

                  {/* Mid-Left */}
                  <img loading="lazy" decoding="async"
                    src={project.mockups.midLeft}
                    alt={`${project.title} mockup 2`}
                    className="mockup mid-left absolute bottom-0 w-[180px] h-[270px] left-[110px] z-[4] rounded-t-xl shadow-[0px_14px_30px_rgba(0,0,0,0.12)] object-cover transition-transform duration-350 ease-out"
                  />

                  {/* Center */}
                  <img loading="lazy" decoding="async"
                    src={project.mockups.center}
                    alt={`${project.title} main center mockup`}
                    className="mockup center absolute bottom-0 w-[220px] h-[310px] z-[5] rounded-t-xl shadow-[0px_14px_30px_rgba(0,0,0,0.12)] object-cover transition-transform duration-350 ease-out"
                  />

                  {/* Mid-Right */}
                  <img loading="lazy" decoding="async"
                    src={project.mockups.midRight}
                    alt={`${project.title} mockup 4`}
                    className="mockup mid-right absolute bottom-0 w-[180px] h-[270px] right-[110px] z-[4] rounded-t-xl shadow-[0px_14px_30px_rgba(0,0,0,0.12)] object-cover transition-transform duration-350 ease-out"
                  />

                  {/* Far-Right */}
                  <img loading="lazy" decoding="async"
                    src={project.mockups.farRight}
                    alt={`${project.title} mockup 5`}
                    className="mockup far-right absolute bottom-0 w-[150px] h-[230px] right-[30px] z-[2] rounded-t-xl shadow-[0px_14px_30px_rgba(0,0,0,0.12)] object-cover transition-transform duration-350 ease-out"
                  />
                </div>
              </div>

              {/* Bottom Logo Bar */}
              <div className="logo-bar w-[calc(100%+72px)] -mx-[36px] py-[22px] px-[28px] border-t border-slate-200 flex justify-around items-center bg-white z-[6]">
                {project.brands.map((brand, idx) => (
                  <span
                    key={idx}
                    className="text-[13px] font-bold text-slate-400 tracking-[0.05em] uppercase"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Embedded Component Styles for Exact Match with User Design */}
      <style jsx>{`
        /* Floating Animated Background Circles */
        .bg-circle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
          animation: floatAnimation 10s infinite ease-in-out alternate;
        }

        .dot-1  { width: 12px; height: 12px; background-color: #2563eb; top: 8%;  left: 4%;  animation-duration: 9s; }
        .dot-2  { width: 10px; height: 10px; background-color: #f87171; top: 15%; left: 8%;  animation-duration: 12s; }
        .dot-3  { width: 8px;  height: 8px;  background-color: #a855f7; top: 45%; left: 3%;  animation-duration: 8s; }
        .dot-4  { width: 14px; height: 14px; background-color: #84cc16; top: 62%; left: 6%;  animation-duration: 11s; }
        .dot-5  { width: 10px; height: 10px; background-color: #3b82f6; top: 82%; left: 12%; animation-duration: 7s; }
        .dot-6  { width: 12px; height: 12px; background-color: #ec4899; top: 92%; left: 4%;  animation-duration: 10s; }

        .dot-7  { width: 8px;  height: 8px;  background-color: #3b82f6; top: 6%;  right: 6%;  animation-duration: 13s; }
        .dot-8  { width: 11px; height: 11px; background-color: #a855f7; top: 22%; right: 3%;  animation-duration: 9s; }
        .dot-9  { width: 9px;  height: 9px;  background-color: #f43f5e; top: 48%; right: 5%;  animation-duration: 11s; }
        .dot-10 { width: 13px; height: 13px; background-color: #84cc16; top: 68%; right: 8%;  animation-duration: 8s; }
        .dot-11 { width: 10px; height: 10px; background-color: #2563eb; top: 85%; right: 4%;  animation-duration: 12s; }
        .dot-12 { width: 7px;  height: 7px;  background-color: #9333ea; top: 94%; right: 10%; animation-duration: 10s; }

        .dot-13 { width: 9px;  height: 9px;  background-color: #f87171; top: 30%; left: 48%; animation-duration: 14s; }
        .dot-14 { width: 11px; height: 11px; background-color: #3b82f6; top: 75%; left: 50%; animation-duration: 9s; }

        @keyframes floatAnimation {
          0% {
            transform: translateY(0px) translateX(0px) scale(1);
          }
          50% {
            transform: translateY(-25px) translateX(15px) scale(1.15);
          }
          100% {
            transform: translateY(18px) translateX(-12px) scale(0.9);
          }
        }

        /* 5 Mockups Layering & Rotations */
        .mockup.mid-left {
          transform: rotate(-8deg) translateY(-5px);
        }

        .mockup.mid-right {
          transform: rotate(8deg) translateY(-5px);
        }

        .mockup.far-left {
          transform: rotate(-16deg) translateY(-10px);
        }

        .mockup.far-right {
          transform: rotate(16deg) translateY(-10px);
        }

        /* Interactive Card Hover Transforms on All 5 Images */
        .industry-project-card:hover .mockup.far-left {
          transform: rotate(-22deg) translateX(-20px) translateY(-15px);
        }

        .industry-project-card:hover .mockup.mid-left {
          transform: rotate(-12deg) translateX(-10px) translateY(-10px);
        }

        .industry-project-card:hover .mockup.center {
          transform: translateY(-12px);
        }

        .industry-project-card:hover .mockup.mid-right {
          transform: rotate(12deg) translateX(10px) translateY(-10px);
        }

        .industry-project-card:hover .mockup.far-right {
          transform: rotate(22deg) translateX(20px) translateY(-15px);
        }
      `}</style>
    </section>
  );
}
