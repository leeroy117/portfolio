import Link  from 'next/link';
import styles from './Sidebar.module.sass';

export const Sidebar = () => {
    return ( 

        <aside className="Sidebar">
            <ul className="Sidebar__Menu">
                <Link className="Sidebar__Link" href="/">
                    Home
                </Link>
                <Link className="Sidebar__Link" href="/about">
                    About
                </Link>
                <Link className="Sidebar__Link" href="/about">
                    Portfolio
                </Link>
                <Link className="Sidebar__Link" href="/about">
                    Contact
                </Link>
            </ul>
        </aside>
     );
}
