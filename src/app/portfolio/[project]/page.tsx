import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import styles from './Project.module.sass';
import { Heading } from "@/components/Shared/Heading";
import Image from "next/image";
import { Chip } from "@/components/Shared/Chip";

export default async function Project({params}: Params) {
    const slug = params.project;
    const response = await fetch('http://localhost:3000/api/portfolio/projects/'+ slug);
    const project: IProject = await response.json();
    // console.log("🚀 ~ Project ~ response:", project)
    const images: Array<IProjectImage> = project.images;
    console.log("🚀 ~ Project ~ images:", images)

    return (
        <section className={styles.Project}>
            <div className={styles.Project__TitleContainer}>
                <Heading title={project.name}/>
                <span className={styles.Project__Role}>{project.role}</span>
            </div>
            <div className={styles.Project__Description}>
                <p>
                    {project.description}
                </p>
            </div>
            <div className={styles.Project__Skills}>
                <div className={styles.Project__Title}>
                    <span>Tecnologías</span>
                </div>
                <div className={styles.Project__SkillsContainer}>
                    <Chip description="Angular"/>
                    <Chip description="TypeScript"/>
                    <Chip description="ExpressJS"/>
                    <Chip description="NodeJS"/>
                    <Chip description="MySql"/>
                    <Chip description="Bootstrap"/>
                    <Chip description="CSS"/>
                </div>
            </div>
            <div className={styles.Project__Images}>
                {
                    images.map((image) => {
                        return (
                            
                            <Image 
                                key={image.id}
                                src={image.url} 
                                width={1000}
                                height={400}
                                alt={image.alt}
                                className={styles.Project__Image}
                                quality={30}
                            />

                        )
                    })
                }
            </div>
        </section>
    )
}