"use client";
import { GoChevronRight } from "react-icons/go";
import { menuList } from "./menu";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import {
  NavigationMenu, NavigationMenuItem,
  NavigationMenuLink, NavigationMenuList
} from '../ui/navigation-menu';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

export default function MobileNav({ isActive, className }: { isActive: (menu: string) => boolean, className: string }) {
  const [show, setShow] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  //to prevent radix id mismatch between server and client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={className}>
      <Sheet open={show} onOpenChange={setShow}>
        <SheetTrigger asChild>
          <CiMenuFries className="text-white" size={26} />
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle className="text-white font-heading">
              Pixel<span className="text-gold">Lens</span>
            </SheetTitle>
            <SheetDescription>Menu</SheetDescription>
          </SheetHeader>

          <div>
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col items-start content-start gap-1">
                <li>
                  <Link href="/" onClick={() => setShow(false)} className={`relative text-[11px] tracking-[0.2em] uppercase font-light px-3.5 py-2
                        transition-colors duration-250
                        ${isActive(`/`)
                      ? 'text-gold after:absolute after:bottom-0 after:left-3.5 after:right-3.5 after:h-px after:bg-gold'
                      : 'text-white/70'
                    }`}>
                    Home
                  </Link>
                </li>

                {menuList.map(menu =>
                  !menu.children ? (
                    <NavigationMenuItem key={menu.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={`/${menu.href}`}
                          onClick={() => setShow(false)}
                          className={`relative text-[11px] tracking-[0.2em] uppercase font-light px-3.5 py-2
                        transition-colors duration-250
                        ${isActive(`/${menu.href}`)
                              ? 'text-gold after:absolute after:bottom-0 after:left-3.5 after:right-3.5 after:h-px after:bg-gold'
                              : 'text-white/70'
                            }`}
                        >
                          {menu.title}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ) : (
                    <Collapsible key={menu.href}>
                      <CollapsibleTrigger asChild>
                        <Button
                          variant="ghost"
                          className="text-white/70 relative text-[11px] tracking-[0.2em] uppercase font-light px-3.5 py-2
                        transition-colors duration-250 w-full justify-start transition-none group">
                          <span className="pl-0.5">{menu.title}</span>
                          <GoChevronRight className="text-white group-data-[state=open]:rotate-90 transition-all duration-200" />
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
                        {menu.children.map(child => (
                          <Link
                            key={child.href}
                            onClick={() => setShow(false)}
                            href={`/${menu.href}/${child.href}`}
                            className={`group flex items-center gap-3 py-3
                            text-[11px] tracking-[0.18em] uppercase font-light
                            transition-all duration-200
                            ${isActive(`/${menu.href}/${child.href}`)
                                ? 'text-gold'
                                : 'text-white/60'
                              }`}
                          >
                            <span className="w-3.5 h-px bg-gold opacity-0 transition-opacity shrink-0" />
                            {child.title}
                          </Link>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  )
                )}

                <li>
                  <Link href="/contact" onClick={() => setShow(false)} className={`relative text-[11px] tracking-[0.2em] uppercase font-light px-3.5 py-2
                        transition-colors duration-250
                        ${isActive(`/contact`)
                      ? 'text-gold after:absolute after:bottom-0 after:left-3.5 after:right-3.5 after:h-px after:bg-gold'
                      : 'text-white/70'
                    }`}>
                    Booking Now
                  </Link>
                </li>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}