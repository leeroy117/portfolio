const Projects: Array<IProject>= [
    {
        id: 1,
        name: 'Encuestas El Girasol',
        slug: 'encuestas-el-girasol',
        description: 'El Girasol es una tienda naturista con presencia nacional en mas de 20 estados de la republica. El software de encuestas facilita a la empresa saber que es lo que sus clientes piensan acerca de el servicio que El Girasol brinda y sus productos. El softare muestra la información de forma clara y concisa para que los directivos puedan tomar decisiones basadas en la información real capturada de los clientes',
        image: '/images/img_projects/elgirasol/main.png',
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
            // {
            //     id: 3,
            //     url: '/images/img_projects/elgirasol/3.png',
            //     alt: 'Imagen de sistema'
            // },
            // {
            //     id: 4,
            //     url: '/images/img_projects/elgirasol/4.png',
            //     alt: 'Imagen de sistema'
            // },
            // {
            //     id: 5,
            //     url: '/images/img_projects/elgirasol/5.png',
            //     alt: 'Imagen de sistema'
            // },
            {
                id: 6,
                url: '/images/img_projects/elgirasol/6.png',
                alt: 'Imagen de sistema'
            },
            // {
            //     id: 7,
            //     url: '/images/img_projects/elgirasol/7.png',
            //     alt: 'Imagen de sistema'
            // },
        ],
        role: 'Full Stack Web Developer',
        technologies: ['Angular','Bootstrap','Express.js','Node.js','MySql']
    },
    {
        id: 1,
        name: 'ERP Academia Global',
        slug: 'erp-ag',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit interdum in ullamcorper, penatibus mattis phasellus lacinia tristique cum ut nascetur. Fringilla sollicitudin aptent aenean ultrices aliquet ullamcorper class feugiat hendrerit vestibulum, sociosqu condimentum platea justo tristique cubilia rhoncus iaculis cursus imperdiet lacus, potenti mi conubia euismod nullam ante ad non placerat. Ac accumsan turpis commodo nisl velit nam congue nascetur morbi eu, vehicula eget aenean habitant ut per erat quam.',
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

export async function GET() {
    return Response.json(Projects)
}