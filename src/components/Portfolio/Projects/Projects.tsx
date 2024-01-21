import Image from 'next/image';
import { Heading } from '@/components/Shared/Heading';
import styles from './Projects.module.sass';
import Link from 'next/link';

export const Projects = async () => {
    const response  = await fetch('http://localhost:3000/api/portfolio/projects');
    const projects: Array<IProject> = await response.json();

    return (
        <section className={styles.Projects}>
            <Heading title='Proyectos'/>
            <div className={styles.Projects__Container}>
                {
                    projects.map((project, index) => {
                        const url = `/portfolio/${project.slug}`;

                        return(
                            <Link 
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
                                            quality={10} 
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
                {/* <div className={styles.Projects__Card}>
                    <div className={styles.Projects__CardBody}>
                        <Image 
                            className={styles.Projects__CardImage}
                            src="/images/img_projects/elgirasol/main.png"
                            alt='Imagen de sistema El Girasol'
                            width={1000} 
                            height={1200}
                            quality={100} 
                        />
                    </div>
                    <div className={styles.Projects__CardFooter}>
                        <span className={styles.Projects__CardTitle}>Encuestas</span>
                        <span className={styles.Projects__CardSubtitle}>Full Stack Web Developer</span>
                    </div>
                </div> */}
            </div>
        </section>
    );
} 