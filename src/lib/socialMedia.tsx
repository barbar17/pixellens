import { RiInstagramFill } from "react-icons/ri";
import { FaWhatsapp, FaFacebook  } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { PHONE_NUMBER } from "./var";

export const SOCIAL_MEDIA = [
  { 
    icon: <RiInstagramFill size={16} />,
    label: "Instagram",
    url: "https://www.instagram.com/pixellens.photography/" 
  },
  { 
    icon: <FaWhatsapp size={16} />,
    label: "Whatssapp",
    url: `https://wa.me/${PHONE_NUMBER[0].phone}` 
  },
  { 
    icon: <FaFacebook size={16} />,
    label: "Facebook",
    url: "https://www.facebook.com/pixellens.photography/" 
  },
  { 
    icon: <SiLinktree size={16} />,
    label: "Linktree",
    url: "https://linktr.ee/pixellens_photography" 
  },
]