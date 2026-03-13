'use client';
import Link from 'next/link'
import { menuList } from './menu'
import {
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '../ui/navigation-menu'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathName = usePathname();
  const isActive = (path: string) => pathName.startsWith(path);

  return (
    <header className='sticky top-0 w-full bg-neutral-800 h-16 z-50'>
      <section className='flex h-full mx-auto max-w-6xl justify-between items-center'>
        <Link href={"/"}>
          <span className='text-xl font-bold text-white font-heading'>Pixellens</span>
        </Link>
        <NavigationMenu className='flex flex-row gap-2'>
          <NavigationMenuList>
            {menuList.map(menu =>
              !menu.children ? (
                <NavigationMenuLink
                  key={menu.href}
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    href={`/${menu.href}`}
                    className={`px-2 text-[18px] font-medium ${isActive(`/${menu.href}`) ? "text-amber-500" : "text-white"}
                      bg-transparent hover:bg-transparent focus:bg-transparent
                      hover:text-gold 
                      transition-colors duration-200`}
                  >
                    {menu.title}
                  </Link>
                </NavigationMenuLink>
              ) : (
                <NavigationMenuItem key={menu.href}>
                  <NavigationMenuTrigger
                    className='text-[18px] bg-transparent hover:bg-transparent focus:bg-white/10
                      data-active:bg-white/10 data-[state=open]:bg-transparent
                      text-white hover:text-gold 
                      data-active:text-gold data-[state=open]:text-gold
                      transition-colors duration-200'
                  >
                    {menu.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul>
                      {menu.children.map(child => (
                        <li key={child.href}>
                          <NavigationMenuLink href={`/${menu.href}/${child.href}`} className={`${isActive(`/${menu.href}/${child.href}`) ? "text-amber-500" : "text-white"} text-[16px] hover:text-gold  hover:bg-transparent font-medium`}>{child.title}</NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </section>
    </header>
  )
}

export default Header