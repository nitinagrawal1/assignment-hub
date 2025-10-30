const AboutusDetail = () => {
    return (
        <section className="py-10 md:py-20 xl:py-40 dark:bg-secondary">
            <div className='container'>
                <div className='flex flex-col xl:flex-row gap-8'>
                    <div className='max-w-xl w-full'>
                        <h2 className='text-56'>Assignment Hub</h2>
                    </div>
                    <div className='flex flex-col gap-12'>
                        <p className="text-secondary dark:text-white">
                            At Assignment Hub, we specialize in delivering top-quality, plagiarism-free academic content for students across the globe. 
                            From case studies and reports to dissertations, essays, and presentations — our expert writers ensure every project is well-researched, properly structured, and submitted on time.
                        </p>
                        <p className='text-secondary dark:text-white'>
                            We know how challenging it can be to manage tight deadlines and multiple subjects. That’s why Assignment Hub provides personalized writing support for every academic need. 
                            Our mission is to help students achieve better grades with authentic, well-written, and professionally formatted content — so you can focus on learning while we take care of the writing.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutusDetail;
