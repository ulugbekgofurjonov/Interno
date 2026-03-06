"use client";

import { testimonials } from "@/data/testimonials";
import { useEffect, useRef, useState } from "react";

const QuoteMark = () => (
  <svg width="36" height="28" viewBox="0 0 36 28" fill="none">
    <path
      d="M0 28V17.2C0 12.8 1.06667 9.06667 3.2 6C5.33333 2.93333 8.53333 0.933333 12.8 0L14.4 3.2C11.7333 3.86667 9.73333 5.2 8.4 7.2C7.06667 9.13333 6.46667 11.4667 6.6 14.2H13.6V28H0ZM22 28V17.2C22 12.8 23.0667 9.06667 25.2 6C27.3333 2.93333 30.5333 0.933333 34.8 0L36 3.2C33.3333 3.86667 31.3333 5.2 30 7.2C28.6667 9.13333 28.0667 11.4667 28.2 14.2H35.2V28H22Z"
      fill="currentColor"
    />
  </svg>
);

const TestimonialCard = ({ item, index }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 120);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className="relative bg-white rounded-2xl p-7 flex flex-col gap-6 group"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(32px)",
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)`,
        boxShadow: "0 2px 16px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.03)",
      }}
    >
      {/* Subtle hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{
          boxShadow: "0 8px 40px rgba(0,0,0,0.10), 0 0 0 1px rgba(0,0,0,0.05)",
          transition: "opacity 0.4s ease",
        }}
      />

      {/* Quote icon top right */}
      <div
        className="absolute top-6 right-6 text-stone-200 group-hover:text-stone-300"
        style={{ transition: "color 0.3s ease" }}
      >
        <QuoteMark />
      </div>

      {/* Avatar + Info */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <div
            className="w-[60px] h-[60px] rounded-full overflow-hidden flex-shrink-0"
            style={{ boxShadow: "0 0 0 3px #f5f0eb, 0 0 0 4px #e8e0d6" }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <p
            className="text-[#1c1917] font-semibold text-[15px] tracking-tight"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            {item.name}
          </p>
          <p className="text-stone-400 text-[13px] mt-0.5 tracking-wide">
            {item.location}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="w-8 h-px bg-stone-200" />

      {/* Comment */}
      <p
        className="text-stone-500 text-[14px] leading-[1.75] flex-1"
        style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
      >
        {item.comment}
      </p>
    </div>
  );
};

export default function Testimonials() {
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full py-6 px-4 sm:px-8">
      <div
        className="relative mx-auto max-w-5xl rounded-[28px] px-10 pt-14 pb-24 overflow-hidden"
        style={{ backgroundColor: "#f0ebe3" }}
      >
        {/* Subtle decorative grain overlay */}
        <div
          className="absolute inset-0 pointer-events-none rounded-[28px]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
            backgroundSize: "128px 128px",
            opacity: 0.4,
          }}
        />

        {/* Title block */}
        <div
          ref={titleRef}
          className="text-center mb-12"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <h2
            className="text-[#1c1917] font-bold leading-[1.2] text-[2.4rem]"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            What the People Thinks
            <br />
            About Interno
          </h2>

          {/* Elegant underline accent */}
          <div className="flex items-center justify-center gap-2 mt-5">
            <div className="h-px w-12 bg-stone-300 rounded-full" />
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "#c8b89a" }}
            />
            <div className="h-px w-12 bg-stone-300 rounded-full" />
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative z-10">
          {testimonials.map((item, i) => (
            <TestimonialCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}