import styles from './Chip.module.sass';

interface IChipProps{
    description: string;
}

export const Chip = ({ description }: IChipProps) => {
    return (
        <div className={styles.Chip}>
            <span className={styles.Chip__Description}>{description}</span>
        </div>
    );
}