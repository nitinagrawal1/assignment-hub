import { NextResponse } from "next/server";

const avatarList = [
  {
    image: "/images/avatar/avatar_1.jpg",
    title: "Sarah Johnson",
  },
  {
    image: "/images/avatar/avatar_2.jpg",
    title: "Olivia Miller",
  },
  {
    image: "/images/avatar/avatar_3.jpg",
    title: "Sophia Roberts",
  },
  {
    image: "/images/avatar/avatar_4.jpg",
    title: "Isabella Clark",
  },
];

const statsFactData = {
  number: "01",
  name: "Stats & Facts",
  heading: "Top-quality assignment writing services you can rely on.",
  description:
    "Get expert help for dissertations, case studies, reports, and more — all 100% plagiarism-free and tailored to your academic needs.",
  scoreData: [
    {
      number: 15,
      numberValue: "K",
      scoreDescp: "Students who received expert assignment help",
    },
    {
      number: 120,
      scoreDescp: "Professional academic writers on our team",
    },
    {
      number: 4,
      numberValue: "K",
      scoreDescp: "Assignments delivered across multiple countries",
    },
  ],
};

const servicesData = {
  number: "02",
  name: "Services",
  heading: "What We Offer",
  description:
    "Get your assignments, dissertations, and reports written by professionals with 100% originality and top-notch quality.",
  data: [
    {
      id: 1,
      image: "/images/home/services/Dissertations & Thesis.webp",
      heading: "Dissertations & Thesis",
      descp:
        "Expertly crafted dissertations and thesis papers that are well-researched, properly formatted, and plagiarism-free.",
    },
    {
      id: 2,
      image: "/images/home/services/Case Studies & Reports.webp",
      heading: "Case Studies & Reports",
      descp:
        "Detailed, insightful, and properly structured case studies and reports tailored to your academic requirements.",
    },
    {
      id: 3,
      image: "/images/home/services/Presentations & Infographics.webp",
      heading: "Presentations & Infographics",
      descp:
        "Visually appealing PowerPoint presentations and infographics designed to make your academic work stand out.",
    },
    {
      id: 4,
      image: "/images/home/services/Essay & Assignment Writing.webp",
      heading: "Essay & Assignment Writing",
      descp:
        "High-quality essays and assignments written by professionals — customized, well-structured, and plagiarism-free.",
    },
  ],
};

const testimonialData = {
  data_1: {
    preTitle: "Hear from Students",
    title:
      "My dissertation was completed with excellent clarity and delivered well before the deadline. Truly dependable service.",
    author: "Aarav Sharma",
    company: "University of Mumbai",
  },
  data_2: {
    preTitle: "Hear from Students",
    title:
      "Got my case study completed in just two days with proper formatting and no plagiarism issues at all. Totally worth it.",
    author: "Saanvi Patel",
    company: "Delhi University",
  },
  data_3: {
    preTitle: "Hear from Students",
    title:
      "The writing quality was impressive and the support team helped me every step of the way. Made my submission absolutely stress-free.",
    author: "Rahul Mehta",
    company: "Christ University Bengaluru",
  },
};

const teamData = {
  number: "06",
  data: [
    {
      image: "/images/home/team/team-img-1.jpg",
      name: "Vishal Chamoli",
      position: "CTO & Content Writer",
      socialLinks: [
        {
          icon: "/images/socialIcon/WhatsApp.svg",
          link: "https://wa.me/919079008119",
        },
        {
          icon: "/images/socialIcon/Instagram_logo.svg",
          link: "https://www.instagram.com/assignment_helper_914/?igsh=bTAwbWoxbWExcDZo",
        },
        {
          icon: "/images/socialIcon/Gmail_icon.svg",
          link: "mailto:assignsolutionscomp@gmail.com",
        },
      ],
    },
    {
      image: "/images/home/team/team-img-2.jpg",
      name: "Mohit Kumar",
      position: "CEO & Founder",
      socialLinks: [
        {
          icon: "/images/socialIcon/WhatsApp.svg",
          link: "https://wa.me/919079008119",
        },
        {
          icon: "/images/socialIcon/Instagram_logo.svg",
          link: "https://www.instagram.com/assignment_helper_914/?igsh=bTAwbWoxbWExcDZo",
        },
        {
          icon: "/images/socialIcon/Gmail_icon.svg",
          link: "mailto:assignsolutionscomp@gmail.com",
        },
      ],
    },
        {
      image: "/images/home/team/team-img-3.jpg",
      name: "Nitin Agrawal",
      position: "Developer & Content Writer",
      socialLinks: [
        {
          icon: "/images/socialIcon/WhatsApp.svg",
          link: "https://wa.me/919079008119",
        },
        {
          icon: "/images/socialIcon/Instagram_logo.svg",
          link: "https://www.instagram.com/assignment_helper_914/?igsh=bTAwbWoxbWExcDZo",
        },
        {
          icon: "/images/socialIcon/Gmail_icon.svg",
          link: "mailto:assignsolutionscomp@gmail.com",
        },
      ],
    },
  ],
};

const pricingData = {
data: [
  {
    planName: "Basic",
    planPrice: "₹499",
    planDescp:
      "Perfect for short tasks, basic assignments, Q&A, or small reports with quick turnaround.",
    planIncludes: [
      "Up to 1,000 words of clean academic content",
      "Free basic plagiarism check",
      "1 minor revision included",
      "Delivery within 12–48 hours",
    ],
  },
  {
    planName: "Standard",
    tag: "Most popular",
    planPrice: "₹1,499",
    cancelPrice: "₹1,999",
    planDescp:
      "Best for essays, case studies, subject assignments, and well-researched reports.",
    planIncludes: [
      "Up to 1,500–2,000 words of well-researched content",
      "Free plagiarism & grammar check",
      "Up to 2 revisions included",
      "Delivery within 2–4 days",
    ],
  },
  {
    planName: "Premium",
    planPrice: "₹2,499",
    planDescp:
      "Ideal for final-year projects, research papers, and deeply researched academic work.",
    planIncludes: [
      "Up to 2,500–3,500 words of premium academic writing",
      "Zero plagiarism guaranteed",
      "Unlimited revisions until approval",
      "Priority support & professional formatting",
    ],
  },
],

  partnerLogo: [
    {
      light: "/images/home/pricing/partner-1.svg",
      dark: "/images/home/pricing/partner-dark-1.svg",
    },
    {
      light: "/images/home/pricing/partner-2.svg",
      dark: "/images/home/pricing/partner-dark-2.svg",
    },
    {
      light: "/images/home/pricing/partner-3.svg",
      dark: "/images/home/pricing/partner-dark-3.svg",
    },
    {
      light: "/images/home/pricing/partner-4.svg",
      dark: "/images/home/pricing/partner-dark-4.svg",
    },
    {
      light: "/images/home/pricing/partner-5.svg",
      dark: "/images/home/pricing/partner-dark-5.svg",
    },
  ],
};

const faqData = {
  data: [
    {
      faq_que: "What types of assignments do you help with?",
      faq_ans:
        "We handle a wide range of academic projects including case studies, essays, reports, PPTs, dissertations, and research papers across various subjects.",
    },
    {
      faq_que: "Is the content 100% plagiarism-free?",
      faq_ans:
        "Yes! All assignments are written from scratch and checked with plagiarism tools before delivery. We also provide a free plagiarism report for complete transparency.",
    },
    {
      faq_que: "How long does it take to complete an assignment?",
      faq_ans:
        "It depends on the type and length of the assignment. Short tasks can be delivered within 1–2 days, while detailed projects like dissertations may take 4–7 days.",
    },
    {
      faq_que: "Can I request revisions after delivery?",
      faq_ans:
        "Absolutely! We offer free revisions to ensure your assignment fully meets your requirements and academic standards.",
    },
    {
      faq_que: "How do I place an order or contact your team?",
      faq_ans:
        "You can reach us directly through WhatsApp or the contact form on our website. Once we receive your requirements, our team will get in touch to start your project.",
    },
  ],
};

const contactData = {
  keypoint: ["Always-On Customer Support", "Service Across the Globe"],
  managerProfile: {
    image: "/images/avatar/avatar_1.jpg",
    name: "Courtney Henry",
    position: "Onboarding & Success Manager",
  },
};

const aboutusStats = [
  {
    number: 10,
    postfix: "+",
    title: "Years of academic excellence",
    descp:
      "Delivering high-quality, plagiarism-free assignments and reports to students across all major disciplines.",
  },
  {
    number: 20,
    postfix: "K+",
    title: "Satisfied students globally",
    descp:
      "Helping learners from India, Canada, New Zealand, the UK, and the USA achieve top academic results.",
  },
  {
    number: 300,
    postfix: "+",
    title: "Projects delivered monthly",
    descp:
      "From dissertations to infographics — ensuring every submission meets the highest academic standards.",
  },
];

const servicesSliderData = [
  "Case Studies",
  "Reports & Essays",
  "Dissertations",
  "Presentations (PPT)",
  "Infographics",
  "Thesis Writing",
  "Management & Research Papers",
];

export const GET = async () => {
  return NextResponse.json({
    avatarList,
    statsFactData,
    servicesData,
    testimonialData,
    teamData,
    pricingData,
    faqData,
    contactData,
    aboutusStats,
    servicesSliderData,
  });
};
