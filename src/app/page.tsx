import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './page.module.sass';
import { Hero } from '@/components/Home/Hero';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


export default function Page() {
  return (
    <div className={styles.Home}>
      <Hero />
    </div>
  );
}