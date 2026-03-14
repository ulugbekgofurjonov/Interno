import SectionTitle from "@/components/ui/SectionTitle";
import BlogsCard from "@/components/ui/BlogsCard";

export default function Blogs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div data-aos="fade-up" data-aos-duration="800">
        <SectionTitle
          title="Recent Blogs"
          subtitle="Get updates about our latest trends and techniques used in interior design project works."
        />
      </div>
      <BlogsCard />
    </section>
  );
}