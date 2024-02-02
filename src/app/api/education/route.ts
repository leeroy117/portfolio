const courses: Array<ICourse> = [
    {
        id: 5,
        name: 'Curso de ReactJS: Manejo profesional del estado',
        description: '',
        certification: '',
        img: '/images/img_courses/diploma-react-estado_page-0001.jpg',
        imgAlt: 'Imagen ',
        platform: 'Platzi'
    },
    {
        id: 2,
        name: 'Curso de closures y scope en JavaScript',
        description: '',
        certification: 'https://drive.google.com/file/d/1R3rF3u9Yk9LIYZkq0XzADuofwb4SOB6U/view?usp=sharing',
        img: '/images/img_courses/diploma-javascript-closures-scope_page-0001.jpg',
        imgAlt: 'Imagen curso de closures y scope en JavaScript',
        platform: 'Platzi',
    },
    {
        id: 3,
        name: 'Curso de modelamiento de datos con MongoDB',
        description: '',
        certification: 'https://drive.google.com/file/d/12N82Byl_2bJfvoAGJubGkVznls2wDCiJ/view?usp=sharing',
        img: '/images/img_courses/diploma-mongodb-modelado_page-0001.jpg',
        imgAlt: 'Imagen curso de modelamiento de datos con MongoDB',
        platform: 'Platzi'
    },
    {
        id: 4,
        name: 'Curso de Introducción a MongoDB',
        description: '',
        certification: '',
        img: '/images/img_courses/diploma-mongodb_page-0001.jpg',
        imgAlt: 'Imagen ',
        platform: 'Platzi'
    },
    {
        id: 6,
        name: 'Curso de ReactJS: Patrones de render y composición',
        description: '',
        certification: '',
        img: '/images/img_courses/diploma-react-patrones-render_page-0001.jpg',
        imgAlt: 'Imagen ',
        platform: 'Platzi'
    },
    {
        id: 7,
        name: 'Curso profesional de ReactJS y Redux',
        description: '',
        certification: '',
        img: '/images/img_courses/diploma-react-redux-profesional_page-0001.jpg',
        imgAlt: 'Imagen ',
        platform: 'Platzi'
    },
    {
        id: 8,
        name: 'Curso de ReactJS: Navegación con React Router',
        description: '',
        certification: '',
        img: '/images/img_courses/diploma-react-router_page-0001.jpg',
        imgAlt: 'Imagen ',
        platform: 'Platzi'
    },
    {
        id: 9,
        name: 'Curso de State machines en ReactJS',
        description: '',
        certification: '',
        img: '/images/img_courses/diploma-react-state-machines_page-0001.jpg',
        imgAlt: 'Imagen ',
        platform: 'Platzi'
    },
    {
        id: 10,
        name: 'Curso de Webpack',
        description: '',
        certification: '',
        img: '/images/img_courses/diploma-webpack_page-0001.jpg',
        imgAlt: 'Imagen ',
        platform: 'Platzi'
    },
    {
        id: 1,
        name: 'Curso básico de JavaScript',
        description: '',
        certification: 'https://drive.google.com/file/d/1U7VNtXKskD9bpOcLChMKTAvR7B9zhQnX/view?usp=sharing',
        img: '/images/img_courses/diploma-basico-javascript_page-0001.jpg',
        imgAlt: 'Imagen curso de closures y scope en JavaScript',
        platform: 'Platzi'
    },
]

export async function GET(){
    return Response.json(  courses  )
}