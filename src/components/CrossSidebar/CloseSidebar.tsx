import styles from './CloseSidebar.module.sass';

export const CloseSidebar = () => {
    return (
        <div className={styles.CloseSidebar}>
            <svg className={styles.CloseSidebar__Icon} width="800px" height="800px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 21.32L21 3.32001" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 3.32001L21 21.32" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    );
}