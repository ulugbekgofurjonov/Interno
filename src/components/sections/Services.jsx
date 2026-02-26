import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Interior Design",
      description: "Enhancing the interior to achieve a healthier environment for the people using right space."
    },
    {
      id: 2,
      title: "Furniture",
      description: "Movable articles that are used to make a room or building suitable for living or working."
    },
    {
      id: 3,
      title: "Flooring",
      description: "Thin object any finished material applied over a floor structure to provide a walking surface."
    }
  ]

  return (
    <section data-aos="fade-up" className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="text-center">
              <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="font-jost text-gray-600 mb-6">
                {service.description}
              </p>
              <Link 
                href="#" 
                className="text-[#c19a6b] hover:text-[#a67b52] font-medium inline-flex items-center gap-2 transition-colors"
              >
                View More →
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}