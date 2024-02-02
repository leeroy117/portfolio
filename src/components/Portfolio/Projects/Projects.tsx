import Image from 'next/image';
import { Heading } from '@/components/Shared/Heading';
import styles from './Projects.module.sass';
import Link from 'next/link';

async function getData(){
    try {
        const response  = await fetch('http://127.0.0.1:3000/api/portfolio/projects',{
            method: 'GET'
        });
        
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const projects: Array<IProject> = await response.json();
        return projects;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export const Projects = async () => {

    const projects = await getData();
    
    return (
        <section className={styles.Projects}>
            <Heading title='Proyectos'/>
            <div className={styles.Projects__Container}>
                {
                    projects.map((project, index) => {
                        const url = `/portfolio/${project.slug}`;

                        return(
                            <Link 
                                key={index}
                                className={styles.Projects__Link}
                                href={url}
                            >
                                <div key={project.id} className={styles.Projects__Card}>
                                    <div className={styles.Projects__CardBody}>
                                        <Image 
                                            className={styles.Projects__CardImage}
                                            src={project.image}
                                            alt={project.imageAlt}
                                            width={1000} 
                                            height={1200}
                                            quality={60} 
                                        />
                                    </div>
                                    <div className={styles.Projects__CardFooter}>
                                        <span className={styles.Projects__CardTitle}>{project.name}</span>
                                        <span className={styles.Projects__CardSubtitle}>{project.role}</span>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </section>
    );
} 