import Link  from 'next/link';
import {useLocale, useTranslations} from 'next-intl';
import { usePathname } from 'next/navigation';
import styles from './Sidebar.module.sass';
import { CloseSidebar } from '../CrossSidebar';
import { LinkItem } from './LinkItem/LinkItem';
import { getLocale } from 'next-intl/server';
import NavigationLink from '../Navigation/NavigationLink';

export const Sidebar = () => {
    // const pathname = usePathname();
    // const regex = /\/portfolio/
    const t = useTranslations('Sidebar');

    console.log('translation',t('home'));
    
    const locale = useLocale();
    return ( 

        <aside className="Sidebar">
            {/* <CloseSidebar /> */}
            {/* <nav className='Sidebar__Nav'> */}
                <ul className="Sidebar__Menu animate__animated animate__backInLeft">
                    <li>
                        {/* <Link className={`Sidebar__Link${pathname === '/' ? '--Active' : ''}`} href="/">
                            Inicio
                        </Link> */}

                        {/* <LinkItem href={`/`} description={t('home')} /> */}

                        <NavigationLink href='/'>{t('home')}</NavigationLink>

                    </li>
                    <li>
                        {/* <Link className={`Sidebar__Link${pathname === '/about' ? '--Active' : ''}`} href="/about">
                            Acerca de
                        </Link> */}
                        {/* <LinkItem href={`/about`} description={t('about')} /> */}
                        <NavigationLink href='/about'>{t('about')}</NavigationLink>
                    </li>
                    <li>
                        {/* <Link className={`Sidebar__Link${regex.test(pathname) ? '--Active' : ''}`} href="/portfolio">
                            Portafolio
                        </Link> */}
                        {/* <LinkItem href={`/portfolio`}  description={t('portfolio')} /> */}
                        <NavigationLink href='/portfolio'>{t('portfolio')}</NavigationLink>
                    </li>
                    {/* <Link className={`Sidebar__Link${pathname === '/portfolio' ? '--Active' : ''}`} href="/portfolio">
                        Portfolio
                    </Link> */}
                    <li>
                        {/* <Link className={`Sidebar__Link${pathname === '/contact' ? '--Active' : ''}`} href="/contact">
                            Contacto
                        </Link> */}
                        {/* <LinkItem href={`/contact`} description={t('contact')} /> */}
                        <NavigationLink href='/contact'>{t('contact')}</NavigationLink>
                    </li>
                </ul>
            {/* </nav> */}
        </aside>
     );
}
