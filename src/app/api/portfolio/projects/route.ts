
const getProjects = (lang: string) => {

    const projects: Array<IProject>= [
        {
            id: 1,
            name: 'Encuestas El Girasol',
            slug: 'encuestas-el-girasol',
            description: `${ lang == 'es' ? `El Girasol es una tienda naturista con presencia nacional en mas de 20 estados de la republica. El software de encuestas facilita a la empresa saber que es lo que sus clientes piensan acerca de el servicio que El Girasol brinda y sus productos. El softare muestra la información de forma clara y concisa para que los directivos puedan tomar decisiones basadas en la información capturada de los clientes` : `El Girasol is a health food store with a national presence in more than 20 states of the republic. The survey software makes it easier for the company to know what its customers think about the service that El Girasol provides and its products. The software displays information in a clear and concise way so that managers can make decisions based on the information captured from customers.`}`,
            image: '/images/img_projects/elgirasol/1.png',
            imageAlt: 'Imagen de sistema El Girasol',
            images: [
                {
                    id: 1,
                    url: '/images/img_projects/elgirasol/1.png',
                    alt: 'Imagen de Login'
                },
                {
                    id: 2,
                    url: '/images/img_projects/elgirasol/2.png',
                    alt: 'Imagen de sistema'
                },
                {
                    id: 6,
                    url: '/images/img_projects/elgirasol/6.png',
                    alt: 'Imagen de sistema'
                },
            ],
            role: 'Full Stack Web Developer',
            technologies: ['Angular','Bootstrap','Express.js','Node.js','MySql']
        },
        {
            id: 1,
            name: 'ERP Academia Global',
            slug: 'erp-ag',
            description: `${ lang == 'es' ? `El sistema ERP de academia global facilita a los usuarios tener todas las herramientas internas con las que trabajan día a día en un solo lugar.` : `The global academy ERP system makes it easy for users to have all the internal tools they work with every day in one place.`}`,
            image: '/images/img_projects/erp_ag/main.png',
            imageAlt: 'Imagen de sistema ERP de Academia Global',
            images: [
                {
                    id: 1,
                    url: '/images/img_projects/erp_ag/main.png',
                    alt: 'Imagen de Login'
                },
                
            ],
            role: 'Full Stack Web Developer',
            technologies: ['Angular','SaSS','Nest.js','Node.js','MySql','AWS',]
        },
    ]

    return projects;
}


export async function GET(request : Request) {
    const lang  = request.headers.get('accept-language') || 'en';
    const projects = getProjects(lang);
    return Response.json(projects)
}