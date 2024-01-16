// interface IExperienceSkillJob{
//     id: number,
//     title: string;
// }

// interface IJob{
//     id: number,
//     title: string;
//     duration?: string,
//     description?: string,
//     skills: Array<IExperienceSkillJob>
// }

// const skillsAg: Array<IExperienceSkillJob> = [
//     {
//         id: 1,
//         title: 'AWS'
//     },
//     {
//         id: 2,
//         title: 'Angular'
//     },
//     {
//         id: 3,
//         title: 'TypeScript'
//     },
//     {
//         id: 4,
//         title: 'Node.js'
//     },
//     {
//         id: 5,
//         title: 'Express.js'
//     },
//     {
//         id: 6,
//         title: 'MySql'
//     },
//     {
//         id: 7,
//         title: 'Nest.js'
//     },
//     {
//         id: 8,
//         title: 'Php'
//     },
//     {
//         id: 9,
//         title: 'JQuery'
//     },
//     {
//         id: 10,
//         title: 'Moodle'
//     },
//     {
//         id: 10,
//         title: 'Bootstrap'
//     },

// ]

// const Jobs: Array<IJob>= [
//     {
//         "id":1,
//         "title": 'Academia Global',
//         "skills": skillsAg,
//         description: ` Desarrollo de aplicaciones integrales, desde la configuración de bases de datos hasta la 
//         implementación del frontend, utilizando diversas librerías y frameworks tanto en el backend 
//         (como Node.js y Express) como en el frontend (como Angular).`,
//         duration: `Mayo 2021 - Presente`
//     }
// ]

// export async function GET(){
//     return Response.json( Jobs )
// }