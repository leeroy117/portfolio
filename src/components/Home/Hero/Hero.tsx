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
            <Link href="/about">
                <Image 
                    className={styles.Hero__Image}
                    src="/images/pp.png"
                    alt="Foto de desarrollador"
                    width={400} 
                    height={267} 
                    priority={true}
                />
                
            </Link>

            <section className={styles.Hero__Info}>
                <div className={styles.Hero__Heading}>
                    <span className={styles.Hero__Brace}>{brace}</span>
                    <span className={styles.Hero__Name}>{title}</span>
                    <span className={styles.Hero__Brace}>{closeBrace}</span>
                </div>
                <Position />
                <Social />
            </section>


        </div>
    );
}