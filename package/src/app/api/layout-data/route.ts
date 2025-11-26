import { NextResponse } from "next/server";

const MenuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Projects",
    path: "/projects",
    newTab: false,
  },
  {
    id: 4,
    title: "Services",
    path: "/#services",
    newTab: false,
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
    newTab: false,
  }
];

const footerData = {
    name: "Assignment Solutions",
    tagline: "Build something together?",
    info: [
        {
            icon: "/images/footer/email-arrow.svg",
            link: "assignsolutionscomp@gmail.com",
            href: "mailto:assignsolutionscomp@gmail.com"
        },
        {
            icon: "/images/footer/Location.svg",
            link: "Swarn Path, Mansarovar, Jaipur",
            href: "https://maps.app.goo.gl/YvdgV2Y8jZ9VZpbK7"
        }
    ],
    links: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/#services" },
        { name: "Work", href: "/projects" },
        { name: "Terms & Conditions", href: "/terms-and-conditions" },
        { name: "Privacy Policy", href: "/privacy-policy" },
    ],
socialLinks: [
    {
        name: "Whatsapp",
        href: "https://wa.me/919079008119",
        icon: "/images/socialIcon/WhatsApp.svg"
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/assignment_helper_914?igsh=bTAwbWoxbWExcDZo",
        icon: "/images/socialIcon/Instagram_logo.svg"
    },
],

    copyright: "© Assignment Solutions copyright 2022-2025. All Rights Reserved."
};

export const GET = async () => {
    return NextResponse.json({
        footerData,
        MenuData
    });
};
