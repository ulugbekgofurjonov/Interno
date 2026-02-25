import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[calc(100vh-100px)]">
      {/* Background Image */}
      <Image
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        src="/Images/bg1.png"
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />

      {/* Content */}
      <div data-aos="fade-right" className="absolute inset-0 flex items-center">
        <Container>
          <div className="max-w-2xl">
            <h1
              className="font-['DM_Serif_Display']
        font-normal
        text-5xl sm:text-6xl lg:text-8xl xl:text-7xl md:text-5xl
        leading-[62.4px]
        tracking-[0.22px]
        text-gray-900
        mb-4"
            >
              Let's Create Your <br /> Dream Interior
            </h1>
            <p className="font-sans text-gray-600 text-lg mb-10 max-w-xl">
              The world needs innovators and problem solvers who turn challenges
              into greater opportunities.
            </p>
            <Button
              variant="primary"
              size="large"
              className="px-10 py-4 text-lg"
            >
              Get Started
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
}
