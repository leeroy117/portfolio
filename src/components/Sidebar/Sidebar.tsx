"use client"
import Link  from 'next/link';
import styles from './Sidebar.module.sass';
import { usePathname } from 'next/navigation';

export const Sidebar = () => {
    const pathname = usePathname();

    return ( 

        <aside className="Sidebar">
            <ul className="Sidebar__Menu">
                <Link className={`Sidebar__Link${pathname === '/' ? '--Active' : ''}`} href="/">
                    Home
                </Link>
                <Link className={`Sidebar__Link${pathname === '/about' ? '--Active' : ''}`} href="/about">
                    About
                </Link>
                <Link className={`Sidebar__Link${pathname === '/portfolio' ? '--Active' : ''}`} href="/portfolio">
                    Portfolio
                </Link>
                <Link className="Sidebar__Link" href="/about">
                    Contact
                </Link>
            </ul>
        </aside>
     );
}
