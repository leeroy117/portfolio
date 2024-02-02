import styles from './Social.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const Social = () => {
    return (
        <section className={styles.Social}>
             <ul className={styles.Social__Menu}>
                <li className={`${styles.Social__ListItem} animate__animated animate__backInLeft `}>
                    <a 
                        className={styles.Social__Link} 
                        href="https://github.com/leeroy117" 
                        target="_blank"
                    >
                        {/* <FontAwesomeIcon className={styles.Social__Icon} icon={faFacebookF} /> */}
                        <FontAwesomeIcon className={styles.Social__Icon} icon={faGithub} />
                    </a>
                </li>
                {/* <li className={styles.Social__ListItem}>
                    <a className={styles.Social__Link} href="#">
                        <FontAwesomeIcon className={styles.Social__Icon}  icon={faTwitter} />
                    </a>
                </li> */}
                <li className={`${styles.Social__ListItem} animate__animated animate__backInLeft `}>
                    <a 
                        className={styles.Social__Link} 
                        href="https://www.linkedin.com/in/leeroy-uziel-garc%C3%ADa-gonz%C3%A1lez-30966a23a/"
                        target="_blank"
                    >
                        <FontAwesomeIcon className={styles.Social__Icon}  icon={faLinkedin} />
                    </a>
                </li>
                {/* <li className={styles.Social__ListItem}>
                    <a className={styles.Social__Link} href="#">
                        <FontAwesomeIcon className={styles.Social__Icon}  icon={faGooglePlusG} />
                    </a>
                </li> */}
            </ul>
        </section>
    );
}