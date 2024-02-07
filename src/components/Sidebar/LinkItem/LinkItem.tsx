"use client"
// import Link from "next/link";
import { Link } from '@/navigation';
import { useLocale } from 'next-intl';
import { usePathname } from "next/navigation";

interface IParams{
    href: string;
    description: string;
}

export const LinkItem = (props: IParams) => {
    const locale = useLocale();

    const { href, description } = props;
    console.log("🚀 ~ LinkItem ~ href:", href)
    const pathname = usePathname();
    console.log("🚀 ~ LinkItem ~ pathname:", pathname)
    const regex = /\/portfolio/

    const hrefLocale = "/"+locale + href;
    console.log("🚀 ~ LinkItem ~ hrefLocale:", hrefLocale)
    
    return (
        <Link 
            className={`Sidebar__Link${pathname == hrefLocale ? '--Active' : ''}`} 
            href={href}
            onClick={() => {
                console.log('linkkkkk', pathname)
                console.log('hreeeeef', href)
            }}
        >
            {description}
        </Link>
    );
}  