import { Position } from '../Position/Position';
import { Social } from '../Social';
import styles from './Hero.module.sass';
import Image  from 'next/image';
import  Link  from 'next/link';


export const Hero = () => {
    const brace = '{';
    const title = 'Leeroy Garcia';
    const closeBrace = '}';
    return (
        <div className={styles.Hero}>
            <Link href="/about" className={styles.Hero__Link}>
                <Image 
                    className={`${styles.Hero__Image} animate__animated animate__bounceInRight animate_faster`}
                    src="/images/pp.png"
                    alt="Foto de desarrollador"
                    width={400} 
                    height={267} 
                    priority={true}
                />
                
            </Link>

            <section className={styles.Hero__Info}>
                <Link href="/about" className={`${styles.Hero__Heading}`}>
                    {/* <span className={styles.Hero__Brace}>Hola, soy</span> */}
                    <span className={`${styles.Hero__Brace} animate__animated animate__backInLeft`}>{brace}</span>
                    <span className={`${styles.Hero__Name} animate__animated animate__backInRight`}>{title}</span>
                    <span className={`${styles.Hero__Brace} animate__animated animate__backInLeft`}>{closeBrace}</span>
                </Link>
                <Position />
                <Social />
            </section>


        </div>
    );
}