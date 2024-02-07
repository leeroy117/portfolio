import { Projects } from '@/components/Portfolio/Projects';
import styles from './Portfolio.module.sass';

export default function Portfolio() {
    return (
        <main className={styles.Portfolio}>
            <Projects />
        </main>
    )
}