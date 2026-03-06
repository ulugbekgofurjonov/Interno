"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { projects } from "@/data/projects";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <Container>
        {/* Title */}
        <div data-aos="fade-up" data-aos-delay="0">
          <SectionTitle
            title="Recent Projects"
            subtitle="With tools to make every part of your process more human and a support team excited to help you."
          />
        </div>

        {/* Cards grid
            - Mobile  (<640px) : 1 ustun
            - Tablet  (640px+) : 2 ustun
            - Desktop (1024px+): 2 ustun (dizayn shunday)
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="h-full"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <Card item={project} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}