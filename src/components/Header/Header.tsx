"use client"
import { useLocale } from 'next-intl';
// import {useRouter} from 'next/navigation';
// import Link from 'next/link';
import styles from './Header.module.sass';
import { Link, usePathname, useRouter } from '@/navigation';
import { FormEvent } from 'react';

export const Header = () => {
    const pathname = usePathname(); // initialize pathname in the global state
    const router = useRouter();
    const locale = useLocale();

    const onChangeHandle = (event: FormEvent<HTMLSelectElement>) => {
        const lang = event.currentTarget.value;
        router.replace(pathname, {locale: lang});
    }

    return (
        <>
            <input type="checkbox" id="toggle" />
            <header className={styles.Header}>
                <label className={styles.Header__Icon} htmlFor="toggle">
                    <svg 
                        width="50px"
                        height="50px" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="style=stroke">
                        <g id="menu-fries">
                        <path id="vector (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M2.25 6C2.25 5.58579 2.58579 5.25 3 5.25H21C21.4142 5.25 21.75 5.58579 21.75 6C21.75 6.41421 21.4142 6.75 21 6.75H3C2.58579 6.75 2.25 6.41421 2.25 6Z" fill="#f7f3f3"/>
                        <path id="vector (Stroke)_2" fillRule="evenodd" clipRule="evenodd" d="M8.25 12C8.25 11.5858 8.58579 11.25 9 11.25L21 11.25C21.4142 11.25 21.75 11.5858 21.75 12C21.75 12.4142 21.4142 12.75 21 12.75L9 12.75C8.58579 12.75 8.25 12.4142 8.25 12Z" fill="#f7f3f3"/>
                        <path id="vector (Stroke)_3" fillRule="evenodd" clipRule="evenodd" d="M2.25 18C2.25 17.5858 2.58579 17.25 3 17.25H21C21.4142 17.25 21.75 17.5858 21.75 18C21.75 18.4142 21.4142 18.75 21 18.75H3C2.58579 18.75 2.25 18.4142 2.25 18Z" fill="#f7f3f3"/>
                        </g>
                        </g>
                    </svg>

                </label>

                <label
                    className={styles.Header__Lang}
                >
                    <select onChange={onChangeHandle} defaultValue={0}>
                        <option value="es" key="0" selected={locale ==  'es' ? true : false}>Es-Español</option>
                        <option value="en" key="1" selected={locale ==  'en' ? true : false}>En-English</option>
                    </select>
                </label>
                    
            </header>
        </>
    ); 
}