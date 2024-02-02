"use client"
import styles from './Position.module.sass';
import { Typewriter } from 'react-simple-typewriter'

export const Position = () => {
    
    return (
        <span className={styles.Position}>
            {/* <span className={styles.Position__Iam}>I'm</span> */}
            <span className={`${styles.Position__Ocuppation} animate__animated animate__pulse`}>
                <Typewriter 
                    words={['Cafetero','Desarrollador Web Full Stack','Fotografo', ]}  
                    loop={0}
                />
            </span>
        </span>
        
    );
}