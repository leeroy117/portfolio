import styles from './Project.module.sass';
import { Heading } from "@/components/Shared/Heading";
import Image from "next/image";
import { Chip } from "@/components/Shared/Chip";

interface IProps{
    params: { project: string };
    searchParams?: { [key: string]: string | string[] | undefined };
}

async function getData(slug: string){
    try {
        const response = await fetch('http://127.0.0.1:3000/api/portfolio/projects/'+ slug,{
            method: 'GET'
        });
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const project: IProject = await response.json();
        return project
    } catch (error) {
        console.log("🚀 ~ getData ~ error 1:", error)

        const project: IProject = {
            id: 0,
            image: '',
            imageAlt: '',
            description: '',
            name: '',
            images: [],
            role: '',
            slug: '',
            technologies: []
        }

        return project;
    }
}

export default async function Project({
    params,
    searchParams,
  }: IProps) {
    const slug = params.project;
    
    const project = await getData(slug);
    console.log("🚀 ~ project:", project)
    const images: Array<IProjectImage> = project.images;

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
                    {
                        project.technologies?.map((tech, index) => (<Chip key={index} description={tech}/>))
                    }
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
    );
}