import { Position } from '../Position/Position';
import { Social } from '../Social';
import styles from './Hero.module.sass';
import Image  from 'next/image';

export const Hero = () => {
    return (
        <div className={styles.Hero}>
            <Image 
                className={styles.Hero__Image}
                src="/images/pp.png"
                alt="Foto de desarrollador"
                width={400} 
                height={267} 
                priority={true}
            />

            <section className={styles.Hero__Info}>
                <span className={styles.Hero__Name}>Leeroy Garcia</span>
                <Position />
                <Social />
            </section>


        </div>
    );
}