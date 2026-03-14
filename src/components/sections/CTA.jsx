import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="py-16 md:py-24 bg-white px-4 md:px-8">
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        className="max-w-4xl mx-auto bg-[#2e3446] rounded-2xl md:rounded-3xl px-6 py-12 md:px-12 md:py-16 text-center"
      >
        <h2
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
          className="font-['DM_Serif_Display'] font-normal text-2xl sm:text-3xl md:text-4xl text-white mb-3"
        >
          Wanna join the interno?
        </h2>

        <p
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
          className="text-gray-400 text-sm sm:text-base mb-8 font-[family-name:var(--font-jost)] max-w-sm mx-auto"
        >
          Contact Us & Get a Free Consultation
        </p>

        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300"
        >
          <Button
            variant="primary"
            size="medium"
            className="rounded-full px-6 py-3 sm:px-8 gap-2 inline-flex items-center text-sm sm:text-base w-full sm:w-auto justify-center"
          >
            Connect With us
            <span className="text-lg">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
}