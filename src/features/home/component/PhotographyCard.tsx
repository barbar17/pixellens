import Image from 'next/image'

type props = {
  src: string,
  alt: string,
  title: string,
}

const PhotographyCard = (props: props) => {
  return (
    <div className="bg-red-500 row-span-4 relative rounded-lg overflow-hidden group">
      <Image src={props.src} className="object-cover" fill alt={props.alt}></Image>
      <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center w-full h-full backdrop-blur-xs bg-black/10 text-white font-semibold font-heading opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-2xl tracking-wider">{props.title}</span>
        <button className="font-normal border-2 border-white py-2 px-4 rounded-full hover:bg-white text-white hover:text-black transition-all cursor-pointer">See More</button>
      </div>
    </div>
  )
}

export default PhotographyCard