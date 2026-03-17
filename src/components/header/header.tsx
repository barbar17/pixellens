'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { menuList } from './menu';
import {
  NavigationMenu, NavigationMenuContent, NavigationMenuItem,
  NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger,
} from '../ui/navigation-menu';

const Header = () => {
  const pathName = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const isActive = (path: string) => pathName.startsWith(path);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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

        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-1">
            {menuList.map(menu =>
              !menu.children ? (
                <NavigationMenuItem key={menu.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={`/${menu.href}`}
                      className={`relative text-[11px] tracking-[0.2em] uppercase font-light px-3.5 py-2
                        transition-colors duration-250
                        ${isActive(`/${menu.href}`)
                          ? 'text-gold after:absolute after:bottom-0 after:left-3.5 after:right-3.5 after:h-px after:bg-gold'
                          : 'text-white/70 hover:text-gold'
                        }`}
                    >
                      {menu.title}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={menu.href}>
                  <NavigationMenuTrigger
                    className="text-[11px] tracking-[0.2em] uppercase font-light px-3.5 py-2
                      bg-transparent hover:bg-transparent focus:bg-transparent
                      data-[state=open]:bg-transparent
                      text-white/70 hover:text-gold data-[state=open]:text-gold
                      transition-colors duration-250 [&>svg]:hidden
                      after:content-[''] after:inline-block after:w-1.5 after:h-1.5
                      after:border-r after:border-b after:border-current
                      after:rotate-45 after:ml-2 after:self-center
                      data-[state=open]:after:rotate-[-135deg]
                      after:transition-transform after:duration-250"
                  >
                    {menu.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="relative min-w-50 bg-[rgba(10,10,10,0.97)] border border-gold/20 py-2
                      before:absolute before:top-0 before:left-0 before:right-0 before:h-px
                      before:bg-linear-to-r before:from-transparent before:via-gold before:to-transparent">
                      {menu.children.map(child => (
                        <Link
                          key={child.href}
                          href={`/${menu.href}/${child.href}`}
                          className={`group flex items-center gap-3 px-6 py-3
                            text-[11px] tracking-[0.18em] uppercase font-light
                            transition-all duration-200 hover:pl-7
                            ${isActive(`/${menu.href}/${child.href}`)
                              ? 'text-gold'
                              : 'text-white/60 hover:text-gold'
                            }`}
                        >
                          <span className="w-3.5 h-px bg-gold opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              )
            )}

            <li>
              <Link
                href="/contact"
                className="ml-2 text-[10px] tracking-[0.25em] uppercase font-medium
                  text-gold border border-gold/40 px-5 py-2.5
                  hover:bg-gold hover:text-black hover:border-gold
                  transition-all duration-250"
              >
                Work With Us
              </Link>
            </li>
          </NavigationMenuList>
        </NavigationMenu>

      </div>
    </header>
  );
};

export default Header;