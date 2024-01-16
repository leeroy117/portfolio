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