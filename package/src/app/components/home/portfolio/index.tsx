import "swiper/css";
import Projectswiper from "./projectswiper";
import Link from "next/link";


function Portfolio() {
    return (
        <section className="bg-lightgray dark:bg-darkblack py-20 md:py-40">
            <div className="flex flex-col gap-24">
                <div className="container">
                    <div className="flex flex-col gap-24">
<div className="flex flex-col xl:flex xl:flex-row items-start gap-8">
    <div className="flex items-center py-3 gap-4 md:gap-8 w-full max-w-xl">
        <span className="bg-primary py-1.5 px-2.5 text-base font-medium rounded-full dark:text-secondary">04</span>
        <div className="h-px w-16 bg-black/12 dark:bg-white/12" />
        <p className="section-bedge py-1.5 px-4 rounded-full">Portfolio</p>
    </div>

    <div className="flex flex-col gap-11">
        <div className="flex flex-col gap-5 ">
            <h2 className="max-w-3xl">Client Testimonials and Work Results</h2>

            <p className="max-w-2xl text-secondary/70 dark:text-white/70">
                This section highlights real conversations and appreciation shared by our clients. These messages reflect the trust, satisfaction, and positive experiences they have had while working with us. From presentations and documents to urgent tasks and ongoing support, the feedback shown here represents the quality and care we bring to every project.
            </p>
        </div>
    </div>
</div>

                    </div>
                </div>

                <div className="px-3.5">
                    <Link href="/projects">
    <div className="cursor-pointer">
        <Projectswiper />
    </div>
</Link>

                </div>
            </div>
        </section>
    );
}

export default Portfolio;
