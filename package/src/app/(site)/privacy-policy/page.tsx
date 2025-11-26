import PrivacyPolicy from "@/app/components/privacy-policy";
import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Privacy Policy | Assignment Solutions",
};

export default function Page() {
    return (
        <main>
             <Herobanner
                bannerimage="/images/privacy-policy/privacy-policy.webp"
                heading="Privacy Policy"
                desc="Understand the <span>Rules & Guidelines</span> Before Using Our Services" /> 
            <PrivacyPolicy/>
        </main>
    );
};
