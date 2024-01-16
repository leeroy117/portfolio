import { Introduction } from '@/components/About/Introduction';
import styles from './About.module.sass';
import { Education } from '@/components/About/Education';
import { Tooling } from '@/components/About/Tooling';
import { Experience } from '@/components/About/Experience';

function About() {
    return (
        <main className={styles.About}>
            <Introduction />
            <Tooling />
            <Experience />
            <Education />
        </main>
    );
}

export default About;