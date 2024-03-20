import { useTranslations } from "next-intl";
import styles from './CV.module.sass';


export const CV = () => {
    const t = useTranslations('Home');
    const title = t('cv.button');
    const filename = t('cv.filename');

    return (
        <a className={styles.Link} href={`/files/${filename}`} download={true}>
            {title}
        </a>
    );
}