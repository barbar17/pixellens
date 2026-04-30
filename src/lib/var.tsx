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
    portofolio: [
      "/engagement/engagement_1.avif",
      "/engagement/engagement_2.avif",
      "/engagement/engagement_3.avif",
      "/engagement/engagement_4.avif",
      "/engagement/engagement_5.avif",
      "/engagement/engagement_6.avif",
      "/engagement/engagement_7.avif",
    ],
    packages: ENGAGEMENT_PACKAGES,
    href: "/package#Engagement",
    alt: "engagement"
  },
  {
    name: "Pre-Wedding",
    portofolio: [
      "/prewedding/prewedding_1.avif",
      "/prewedding/prewedding_2.avif",
      "/prewedding/prewedding_3.avif",
      "/prewedding/prewedding_4.avif",
      "/prewedding/prewedding_5.avif",
      "/prewedding/prewedding_6.avif",
      "/prewedding/prewedding_7.avif",
      "/prewedding/prewedding_8.avif",
      "/prewedding/prewedding_9.avif",
      "/prewedding/prewedding_10.avif",
    ],
    packages: PREWEDDING_PACKAGES,
    href: "/package#Pre-Wedding",
    alt: "pre-wedding"
  },
  {
    name: "Wedding",
    portofolio: [
      "/wedding/wedding_1.avif",
      "/wedding/wedding_2.avif",
      "/wedding/wedding_3.avif",
      "/wedding/wedding_4.avif",
      "/wedding/wedding_5.avif",
      "/wedding/wedding_6.avif",
      "/wedding/wedding_7.avif",
      "/wedding/wedding_8.avif",
      "/wedding/wedding_9.avif",
      "/wedding/wedding_10.avif",
    ],
    packages: WEDDING_PACKAGES,
    href: "/package#Wedding",
    alt: "wedding"
  },
  {
    name: "Personal Graduation",
    portofolio: [
      "/graduation/personal/wisuda_1.avif",
      "/graduation/personal/wisuda_2.avif",
      "/graduation/personal/wisuda_3.avif",
      "/graduation/personal/wisuda_4.avif",
      "/graduation/personal/wisuda_5.avif",
      "/graduation/personal/wisuda_6.avif",
      "/graduation/personal/wisuda_7.avif",
      "/graduation/personal/wisuda_8.avif",
      "/graduation/personal/wisuda_9.avif",
      "/graduation/personal/wisuda_10.avif",
    ],
    packages: PERSONAL_GRADUATION_PACKAGES,
    href: "/package#Personal Graduation",
    alt: "personal gradiation"
  },
  {
    name: "Group Graduation",
    portofolio: [
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
