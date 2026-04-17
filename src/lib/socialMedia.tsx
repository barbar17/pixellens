import { RiInstagramFill } from "react-icons/ri";
import { FaWhatsapp, FaFacebook, FaTiktok, FaYoutube  } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { PHONE_NUMBER } from "./var";

export const SOCIAL_MEDIA = [
  { 
    icon: <FaWhatsapp size={16} />,
    label: "Whatssapp",
    url: `https://wa.me/${PHONE_NUMBER[0].phone}` 
  },
  { 
    icon: <RiInstagramFill size={16} />,
    label: "Instagram",
    url: "https://www.instagram.com/pixellens.photography/" 
  },
  { 
    icon: <FaFacebook size={16} />,
    label: "Facebook",
    url: "https://www.facebook.com/pixellens.photography/" 
  },
  { 
    icon: <FaTiktok size={16} />,
    label: "TikTok",
    url: "https://www.tiktok.com/@pixellens.photography" 
  },
  { 
    icon: <FaYoutube size={16} />,
    label: "Youtube",
    url: "https://youtube.com/@pixellens.photography" 
  },
  { 
    icon: <SiLinktree size={16} />,
    label: "Linktree",
    url: "https://linktr.ee/pixellens_photography" 
  },
]