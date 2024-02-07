import styles from './Heading.module.sass';

interface IHeadingProps {
    title: string
}

export const Heading = ({ title }: IHeadingProps) => {
    return (
        <div className={`${styles.Heading} animate__animated animate__bounceInRight`}>
            <h2 className={styles.Heading__Title}>{title}</h2>
        </div>
    );
}