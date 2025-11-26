import Herobanner from "@/app/components/shared/hero-banner";
import TermsAndCondition from "@/app/components/terms-and-condition";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Terms & Condition | Assignment Solutions",
};

export default function Page() {
    return (
        <main>
            <Herobanner
                bannerimage="/images/terms-conditions/terms-and-condition.webp"
                heading="Terms & Conditions"
                desc="Understand the <span>Rules & Guidelines</span> Before Using Our Services" />
            <TermsAndCondition />
        </main>
    );
};
