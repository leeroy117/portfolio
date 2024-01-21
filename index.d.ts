interface IExperienceSkillJob{
    id: number,
    title: string;
}

interface IJob{
    id: number,
    title: string;
    duration: string,
    description: string,
    skills: Array<IExperienceSkillJob>,
    position: string
}

interface ICourse{
    id: number,
    name: string,
    description?: string,
    certification: string
    platform: string,
    img: string,
    imgAlt: string
}

interface IProjectImage{
    id: number,
    url: string,
    alt: string
}

interface IProject{
    id: number;
    name: string;
    slug: string;
    description: string;
    image: string;
    imageAlt: string;
    role: string;
    images: Array<IProjectImage>
}