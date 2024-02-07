'use client';
 
import {useSelectedLayoutSegment} from 'next/navigation';
import {ComponentProps} from 'react';
import {Link, pathnames} from '@/navigation';
 
export default function NavigationLink<
  Pathname extends keyof typeof pathnames
>({href, ...rest}: ComponentProps<any>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;
 
  return (
    <Link
        aria-current={isActive ? 'page' : undefined}
        href={href}
    //   style={{fontWeight: isActive ? 'bold' : 'normal'}}
        className={`Sidebar__Link${isActive ? '--Active' : ''}`}
        
      {...rest}
    />
  );
}