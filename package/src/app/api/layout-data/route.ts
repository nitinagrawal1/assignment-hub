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
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 5,
    title: "Services",
    path: "/#services",
    newTab: false,
  },
  {
    id: 6,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 7,
    title: "Docs",
    path: "/documentation",
    newTab: false,
  }
];


const footerData = {
    name: "Studiova",
    tagline: "Build something together?",
    info: [
        {
            icon: "/images/footer/email-arrow.svg",
            link: "info@wrappixel.com",
            href: "https://assignment-hub-rosy.vercel.app/"
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
        { name: "Terms", href: "/terms-and-conditions" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Error 404", href: "/not-found" }
    ],
    socialLinks: [
        { name: "Facebook", href: "https://www.facebook.com/share/17c2LKB1FE/" },
        { name: "Instagram", href: "https://www.instagram.com/assignment_helper_914?igsh=bTAwbWoxbWExcDZo" },
    ],
    copyright: "© Assignment Hub copyright 2028. All Rights Reserved."
};

export const GET = async () => {
    return NextResponse.json({
        footerData,
        MenuData
    });
};