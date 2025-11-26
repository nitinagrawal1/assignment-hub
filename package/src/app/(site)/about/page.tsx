import AboutusDetail from "@/app/components/about/aboutus-detail";
import AboutusFullimg from "@/app/components/about/aboutus-fullimg";
import AboutusStats from "@/app/components/about/aboutus-stats";
import Team from "@/app/components/home/team";
import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | WriteSmart Solutions",
};

export default function Page() {
    return (
        <main>
            <Herobanner
                bannerimage="/images/about-us/banner/aboutus-banner.webp"
                heading="About Us"
                desc="We help <span>students worldwide</span> excel with top-quality, plagiarism-free assignments crafted by experienced academic writers." 
            />
            <AboutusDetail />
            <AboutusStats />
            <AboutusFullimg />
            <Team teamdataNumber="01" />
        </main>
    );
};
