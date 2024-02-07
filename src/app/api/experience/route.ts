const skillsAg: Array<IExperienceSkillJob> = [
    {
        id: 1,
        title: 'AWS'
    },
    {
        id: 2,
        title: 'Angular'
    },
    {
        id: 3,
        title: 'TypeScript'
    },
    {
        id: 4,
        title: 'Node.js'
    },
    {
        id: 5,
        title: 'Express.js'
    },
    {
        id: 6,
        title: 'MySql'
    },
    {
        id: 7,
        title: 'Nest.js'
    },
    {
        id: 8,
        title: 'Php'
    },
    {
        id: 9,
        title: 'JQuery'
    },
    {
        id: 10,
        title: 'Moodle'
    },
    {
        id: 10,
        title: 'Bootstrap'
    },
    {
        id: 11,
        title: "Git",
    },
    {
        id: 11,
        title: "SCSS",
    },
]

const skillsElGirasol: Array<IExperienceSkillJob> = [
    {
        id: 1,
        title: 'Angular'
    },
    {
        id: 2,
        title: 'TypeScript'
    },
    {
        id: 3,
        title: 'Node.js'
    },
    {
        id: 4,
        title: 'Express.js'
    },
    {
        id: 5,
        title: 'MySql'
    },
    {
        id: 6,
        title: 'Php'
    },
    {
        id: 7,
        title: 'JQuery'
    },
    {
        id: 8,
        title: 'Bootstrap'
    },
    {
        id: 9,
        title: "Git",
    },
    {
        id: 10,
        title: "Wordpress",
    },
    {
        id: 11,
        title: "WooCommerce",
    }

]

const Jobs: Array<IJob>= [
    {
        id:1,
        title: 'Web Developer @ Academia Global',
        skills: skillsAg,
        description: ` Desarrollo de aplicaciones integrales, desde la configuración de bases de datos hasta la 
        implementación del frontend, utilizando diversas librerías y frameworks tanto en el backend 
        (como Node.js y Express) como en el frontend (como Angular).`,
        duration: `Mayo 2021 - Presente`,
        position: 'Culiacan, Sinaloa, México'
    },
    {
        id: 2,
        title: 'Web Developer @ El Girasol',
        skills: skillsElGirasol,
        description: ` Desarrollo de aplicaciones integrales, desde la configuración de bases de datos hasta la 
        implementación del frontend, utilizando diversas librerías y frameworks tanto en el backend 
        (como Node.js y Express) como en el frontend (como Angular).`,
        duration: `Marzo 2022 - Octubre 2022`,
        position: 'Gomez Palacio, Durango, México'
    }
]

const getJobs = (lang: string) => {
    return [
        {
            id:1,
            title: 'Web Developer @ Academia Global',
            skills: skillsAg,
            description: `${lang == 'es' ? `Desarrollo de aplicaciones integrales, desde la configuración de bases de datos hasta la 
            implementación del frontend, utilizando diversas librerías y frameworks tanto en el backend 
            (como Node.js y Express) como en el frontend (como Angular).`: `Development of comprehensive applications, from database configuration to
            frontend implementation, using various libraries and frameworks both in the backend
            (like Node.js and Express) as on the frontend (like Angular)`}`,
            duration: `${lang == 'es' ? `Mayo 2021 - Presente`: `May 2021 - To date`}`,
            position: 'Culiacan, Sinaloa, México'
        },
        {
            id: 2,
            title: 'Web Developer @ El Girasol',
            skills: skillsElGirasol,
            description: `${lang == 'es' ? `Desarrollo de funcionalidades para plataformas wordpress y woocommerce. 
            Ademas tambien colabore en el desarrollo de una app para medir el NPS de las sucursales.` : `Development of functionalities for WordPress and WooCommerce platforms.
            In addition, I also collaborated in the development of an app to measure the NPS of the branches.`}`,
            duration: `${lang == 'es' ? `Marzo 2022 - Octubre 2022`: `March 2022 - October 2022`}`,
            position: 'Gomez Palacio, Durango, México'
        }
    ]
}

export async function GET(request: Request){
    console.log("🚀 ~ GET ~ request:", request.headers.get('accept-language'));

    const lang = request.headers.get('accept-language') || 'es';

    return Response.json( getJobs(lang) );
    // return Response.json( Jobs )
}