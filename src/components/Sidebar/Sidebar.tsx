"use client"
import Link  from 'next/link';
import styles from './Sidebar.module.sass';
import { usePathname } from 'next/navigation';
import { CloseSidebar } from '../CrossSidebar';

export const Sidebar = () => {
    const pathname = usePathname();
    const regex = /\/portfolio/

    return ( 

        <aside className="Sidebar">
            {/* <CloseSidebar /> */}
            {/* <nav className='Sidebar__Nav'> */}
                <ul className="Sidebar__Menu animate__animated animate__backInLeft">
                    <li>
                        <Link className={`Sidebar__Link${pathname === '/' ? '--Active' : ''}`} href="/">
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link className={`Sidebar__Link${pathname === '/about' ? '--Active' : ''}`} href="/about">
                            Acerca de
                        </Link>
                    </li>
                    <li>
                        <Link className={`Sidebar__Link${regex.test(pathname) ? '--Active' : ''}`} href="/portfolio">
                            Portafolio
                        </Link>
                    </li>
                    {/* <Link className={`Sidebar__Link${pathname === '/portfolio' ? '--Active' : ''}`} href="/portfolio">
                        Portfolio
                    </Link> */}
                    <li>
                        <Link className={`Sidebar__Link${pathname === '/contact' ? '--Active' : ''}`} href="/contact">
                            Contacto
                        </Link>

                    </li>
                </ul>
            {/* </nav> */}
        </aside>
     );
}
