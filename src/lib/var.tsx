import { ENGAGEMENT_PACKAGES } from "./package/engagement";
import {
  GROUP_GRADUATION_PACKAGES,
  PERSONAL_GRADUATION_PACKAGES,
} from "./package/graduation";
import { PREWEDDING_PACKAGES } from "./package/preWedding";
import { WEDDING_PACKAGES } from "./package/wedding";

export const PHONE_NUMBER = [
  {
    name: "Pixellens",
    phone: "6288287485157"
  },
  {
    name: "Pixellens 2",
    phone: "6282197759506"
  },
  {
    name: "Bagus",
    phone: "6285709645040"
  },
]

export const INSTAGRAM = "https://www.instagram.com/pixellens.photography/";

export const ADDRESS = {
  text:
    <>
      Jl. Sisingamangaraja, Gg. Kelinci No.25 A,<br />
      Gedong air, Tanjung Karang Barat,<br />
      Bandar Lampung, Lampung
    </>,
  url: "https://maps.app.goo.gl/FWfCH7LAMTyyMos9A?g_st=aw",
};

export const PACKAGES = [
  {
    name: "Engagement",
    portfolio: [
      "/home/photography/1.jpg",
      "/home/photography/2.jpg",
      "/home/photography/3.jpg",
      "/home/photography/4.jpg",
    ],
    packages: ENGAGEMENT_PACKAGES,
    href: "/package#Engagement",
    alt: "engagement"
  },
  {
    name: "Pre-Wedding",
    portfolio: [
      "/home/photography/1.jpg",
      "/home/photography/2.jpg",
      "/home/photography/3.jpg",
      "/home/photography/4.jpg",
    ],
    packages: PREWEDDING_PACKAGES,
    href: "/package#Pre-Wedding",
    alt: "pre-wedding"
  },
  {
    name: "Wedding",
    portfolio: [
      "/home/photography/1.jpg",
      "/home/photography/2.jpg",
      "/home/photography/3.jpg",
      "/home/photography/4.jpg",
    ],
    packages: WEDDING_PACKAGES,
    href: "/package#Wedding",
    alt: "wedding"
  },
  {
    name: "Personal Graduation",
    portfolio: [
      "/home/photography/1.jpg",
      "/home/photography/2.jpg",
      "/home/photography/3.jpg",
      "/home/photography/4.jpg",
    ],
    packages: PERSONAL_GRADUATION_PACKAGES,
    href: "/package#Personal Graduation",
    alt: "personal gradiation"
  },
  {
    name: "Group Graduation",
    portfolio: [
      "/home/photography/1.jpg",
      "/home/photography/2.jpg",
      "/home/photography/3.jpg",
      "/home/photography/4.jpg",
    ],
    packages: GROUP_GRADUATION_PACKAGES,
    href: "/package#Group Graduation",
    alt: "group graduation"
  },
];
