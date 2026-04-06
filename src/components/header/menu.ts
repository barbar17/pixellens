interface MenuInterface {
    title: string,
    href: string,
    children?: MenuInterface[],
}

// const servicesList: MenuInterface[] = [
//     {title: "Photography", href: "photography"},
//     {title: "Videography", href: "videography"},
// ]

export const menuList: MenuInterface[] = [
    {title: "Package", href: "package"},
    {title: "Our Journey", href: "journey"},
]