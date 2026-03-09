import Link from 'next/link'
import { menuList } from './menu'
import { NavigationMenu, NavigationMenuLink, navigationMenuTriggerStyle, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from '../ui/navigation-menu'

const Header = () => {
	return (
		<header className='sticky top-0 w-full bg-neutral-800 h-12'>
			<section className='flex h-full mx-auto max-w-6xl justify-between items-center'>
				<Link href={"/"}>
					<span className='text-xl font-bold text-white'>Pixellens</span>
				</Link>
				<NavigationMenu className='flex flex-row gap-2'>
					<NavigationMenuList>
						{
							menuList.map(menu => (
								!menu.children
									?
									<NavigationMenuLink key={menu.href} asChild className={navigationMenuTriggerStyle()}>
										<Link href={menu.href} className='px-2 text-base font-medium text-white hover:text-amber-400 transition-all'>
											{menu.title}
										</Link>
									</NavigationMenuLink>
									:
									<NavigationMenuItem key={menu.href}>
										<NavigationMenuTrigger>{menu.title}</NavigationMenuTrigger>
										<NavigationMenuContent>
											<ul>
												{
													menu.children.map(child => (
														<li key={child.href}>
															<NavigationMenuLink className={navigationMenuTriggerStyle()}>
																<Link href={child.href} >{child.title}</Link>
															</NavigationMenuLink>
														</li>
													))
												}
											</ul>
										</NavigationMenuContent>
									</NavigationMenuItem>
							))
						}
					</NavigationMenuList>
				</NavigationMenu>
			</section>
		</header>
	)
}

export default Header