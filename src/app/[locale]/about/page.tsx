import { Introduction } from '@/components/About/Introduction';
import styles from './About.module.sass';
import { Education } from '@/components/About/Education';

import { Tooling } from '@/components/About/Tooling';
import { Experience } from '@/components/About/Experience';
import { useTranslations } from 'next-intl';

export default function About() {
    // const t = useTranslations('About.Education');
    // const title = t('Title');
    // console.log("🚀 ~ About ~ title:", title)
    return (
        <main className={styles.About}>
            <Introduction />
            <Tooling />
            <Experience />
            <Education />
        </main>
    );
}