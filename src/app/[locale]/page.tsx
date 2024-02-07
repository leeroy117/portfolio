import styles from './page.module.sass';
import { Hero } from '@/components/Home/Hero';

export default function Page() {
  
  return (
    <div className={styles.Home}>
      <Hero />
    </div>
  );
}