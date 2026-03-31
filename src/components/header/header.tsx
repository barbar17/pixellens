'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import FullNav from './FullNav';
import MobileNav from './MobileNav';

const Header = () => {
  const pathName = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const isActive = (path: string) => pathName === path;

  useEffect(() => {
    const onScroll: any = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 h-17 transition-all duration-500
    ${scrolled
          ? 'bg-[rgba(8,8,8,0.96)] backdrop-blur-md border-b border-gold/15'
          : 'bg-transparent border-b border-transparent'
        }`}
    >
      <div className="h-full max-w-6xl mx-auto px-10 flex items-center justify-between">
        <Link href="/" className="font-heading text-xl font-light tracking-[0.12em] text-[#f5f0e8]">
          Pixel<span className="text-gold">Lens</span>
        </Link>

        <FullNav isActive={isActive} className='hidden md:block' />
        <MobileNav isActive={isActive} className='block md:hidden' />

      </div>
    </header>
  );
};

export default Header;