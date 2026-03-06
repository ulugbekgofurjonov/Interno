"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const logos = [
  { id: 1, src: "/images/ads1.png", alt: "Brand 1" },
  { id: 2, src: "/images/ads2.png", alt: "Brand 2" },
  { id: 3, src: "/images/ads3.png", alt: "Brand 3" },
  { id: 4, src: "/images/ads4.png", alt: "Brand 4" },
  { id: 5, src: "/images/ads5.png", alt: "Brand 5" },
];

const LogoItem = ({ logo, index, visible }) => (
  <div
    className="group relative flex items-center justify-center cursor-pointer px-6 py-4"
    style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(16px)",
      transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 100}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 100}ms`,
    }}
  >
    {/* Hover radial glow */}
    <div
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
      style={{
        background: "radial-gradient(ellipse at center, rgba(0,0,0,0.05) 0%, transparent 75%)",
        transition: "opacity 0.5s ease",
      }}
    />
    <Image
      src={logo.src}
      alt={logo.alt}
      width={140}
      height={56}
      className="object-contain relative z-10 select-none"
      draggable={false}
      style={{
        filter: "grayscale(100%) brightness(0.25)",
        opacity: 0.5,
        transition: "filter 0.45s ease, opacity 0.45s ease, transform 0.45s cubic-bezier(0.34,1.56,0.64,1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.filter = "grayscale(0%) brightness(1)";
        e.currentTarget.style.opacity = "1";
        e.currentTarget.style.transform = "scale(1.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.filter = "grayscale(100%) brightness(0.25)";
        e.currentTarget.style.opacity = "0.5";
        e.currentTarget.style.transform = "scale(1)";
      }}
    />
  </div>
);

export default function Brands() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full py-12 px-4">
      <style>{`
        .brands-swiper .swiper-pagination {
          bottom: 0;
        }
        .brands-swiper .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          background: #c8b89a;
          opacity: 0.35;
          transition: all 0.3s ease;
        }
        .brands-swiper .swiper-pagination-bullet-active {
          width: 20px;
          border-radius: 3px;
          background: #a0917e;
          opacity: 1;
        }
        .brands-swiper .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>

      <div className="max-w-5xl mx-auto" ref={ref}>

        {/* Top divider */}
        <div
          className="w-full h-px mb-10"
          style={{
            background: "linear-gradient(to right, transparent, #d6cfc6 40%, #d6cfc6 60%, transparent)",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.8s ease",
          }}
        />

        {/* Desktop layout */}
        <div className="hidden md:flex items-center justify-between">
          {logos.map((logo, i) => (
            <div key={logo.id} className="flex items-center flex-1 justify-center">
              <LogoItem logo={logo} index={i} visible={visible} />
              {i < logos.length - 1 && (
                <div
                  className="h-10 w-px flex-shrink-0"
                  style={{
                    background: "linear-gradient(to bottom, transparent, #d6cfc6, transparent)",
                    opacity: visible ? 0.8 : 0,
                    transition: `opacity 0.6s ease ${i * 100 + 400}ms`,
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Mobile: 1 slide at a time, centered, with autoplay */}
        <div className="md:hidden">
          <Swiper
            className="brands-swiper"
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={0}
            loop={true}
            autoplay={{ delay: 2200, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            style={{ paddingBottom: "40px" }}
          >
            {logos.map((logo, i) => (
              <SwiperSlide key={logo.id}>
                <div className="flex flex-col items-center justify-center py-6 gap-3">
                  {/* Decorative frame */}
                  <div
                    className="relative flex items-center justify-center rounded-2xl bg-white px-10 py-6"
                    style={{
                      boxShadow: "0 2px 20px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)",
                      minWidth: "200px",
                    }}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={150}
                      height={60}
                      className="object-contain"
                      style={{
                        filter: "grayscale(100%) brightness(0.25)",
                        opacity: 0.6,
                      }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom divider */}
        <div
          className="w-full h-px mt-10"
          style={{
            background: "linear-gradient(to right, transparent, #d6cfc6 40%, #d6cfc6 60%, transparent)",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.8s ease 0.5s",
          }}
        />
      </div>
    </section>
  );
}