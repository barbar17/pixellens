interface MenuInterface {
    title: string,
    href: string,
    children?: MenuInterface[],
}

const servicesList: MenuInterface[] = [
    {title: "Photography", href: "photography"},
    {title: "Videography", href: "videography"},
]

export const menuList: MenuInterface[] = [
    {title: "Services", href: "services", children: servicesList},
    {title: "Our Journey", href: "journey"},
    {title: "About", href: "about"},
    {title: "Work With Us", href: "contact"},
]