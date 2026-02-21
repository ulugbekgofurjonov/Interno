import { projects } from '@/data/projects'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import Card from '@/components/ui/Card'

export default function Projects(){
    return (
        <section className='py-20'>
            <Container>
                <SectionTitle
                title="Recent Projects"
                subtitle="With tools to make every part of your process more human and a support team excited to help you."/>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                    {projects.map((project) => ( 
                        <Card key={project.id} item={project} /> 
                    ))}
                </div>
            </Container>
        </section>
    )
}