import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Chellange() {
  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-20">
          
          {/* Chap qism - Matn */}
          <div data-aos="fade-right" className="flex-1 max-w-sm">
            <h2 className="text-5xl font-serif text-[#1a1a2e] leading-tight mb-6">
              We Tackle The Most Challenging Designs
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              The world needs innovators and problem solvers who turn challenges 
              into greater opportunities. We have an insatiable curiosity about 
              transformative trends challenging the status.
            </p>

            {/* Telefon */}
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-full border border-[#c19a6b] flex items-center justify-center flex-shrink-0">
                <Image
                  src="/images/phone.png"
                  alt="Phone"
                  width={22}
                  height={22}
                />
              </div>
              <div>
                <p className="font-semibold text-[#1a1a2e] text-base">012345678</p>
                <p className="text-gray-400 text-sm">Call Us Anytime</p>
              </div>
            </div>

            {/* Tugma */}
            <Button
              size="medium"
              className="rounded-full flex items-center gap-4 bg-[#1a1a2e] text-white hover:bg-[#c19a6b] transition-colors px-8 cursor-pointer"
            >
              Get Free Estimate <span>→</span>
            </Button>
          </div>

          {/* O'ng qism - Rasm */}
          <div data-aos="fade-left" className="flex-1 flex justify-end">
            <img
              src="/images/bg2.png"
              alt="Challenging Designs"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}