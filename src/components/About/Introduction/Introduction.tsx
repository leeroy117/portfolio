import { Heading } from '@/components/Shared/Heading';
import styles from './Introduction.module.sass';

export const Introduction = () => {
    return(
        <section className={styles.Introduction}>
            <Heading title='Acerca'/>
            <p className={styles.Introduction__Paragraph}>
                <span className={styles.Introduction__Accent}>¡Hola!</span> Soy Leeroy García, un apasionado 
                <b className={styles.Introduction__Accent}> desarrollador web full stack</b> con 
                <b className={styles.Introduction__Accent}> tres años de experiencia </b>
                en 
                la creación de soluciones digitales robustas y eficientes. Mi enfoque se centra en construir aplicaciones
                web que no solo sean funcionales, sino también atractivas y fáciles de usar. A lo largo de mi carrera, he 
                tenido el privilegio de trabajar en diversos proyectos, desde plataformas educativas hasta sistemas de 
                gestión interna. Estoy comprometido con el aprendizaje continuo y la adopción de las últimas tecnologías
                para ofrecer productos de alta calidad. ¡Estoy emocionado de seguir contribuyendo al mundo del desarrollo 
                web y enfrentar nuevos desafíos emocionantes!
            </p>
        </section>
    );
}