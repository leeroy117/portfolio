"use client"
import { useTranslations } from 'next-intl';
import styles from './Position.module.sass';
import { Typewriter } from 'react-simple-typewriter'

export const Position = () => {

    const t = useTranslations('Home');

    const coffee = t('coffee.title');
    const developer = t('developer.title');
    const photographer = t('photographer.title');
    
    return (
        <span className={styles.Position}>
            {/* <span className={styles.Position__Iam}>I'm</span> */}
            <span className={`${styles.Position__Ocuppation} animate__animated animate__pulse`}>
                <Typewriter 
                    words={[coffee, developer, photographer]}  
                    loop={0}
                />
            </span>
        </span>
        
    );
}