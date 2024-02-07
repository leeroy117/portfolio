import { Heading } from '@/components/Shared/Heading';
import styles from './Introduction.module.sass';
import { useTranslations } from 'next-intl';

export const Introduction = () => {

    const t = useTranslations('About.Introduction');
    const title = t('Title');
    const content = t.raw('Content')
    // const content = t.markup('Content', {
    //     important: (chunks) => `<b>${chunks}</b>`
    // });
    // const content = t.markup('Content');
    console.log("🚀 ~ Introduction ~ content:", content)

    return(
        <section className={`${styles.Introduction} animate__animated animate__bounceInUp`}>
            <Heading title={title}/>
            <p className={styles.Introduction__Paragraph}
                dangerouslySetInnerHTML={{ __html: content }} 
            >
            </p>
        </section>
    );
}