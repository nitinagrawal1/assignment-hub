import { getAllProjects } from "@/lib/markdown";

const ProjectList = () => {
    type Project = {
        title: string;
        slug: string;
        ScopeOfWork: string[];
        industry?: string;
        coverImage: string;
    };

    const projects: Project[] = getAllProjects([
        "title",
        "slug",
        "ScopeOfWork",
        "industry",
        "coverImage",
    ]);

    return (
        <section className="dark:bg-darkblack py-20 md:py-40">
            <div className="flex flex-col gap-24">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {projects.map((project, index) => (
                            <div key={index} className="flex flex-col gap-5">

                                {/* SIMPLE HOVER ZOOM EFFECT */}
                                <div className="overflow-hidden rounded-lg">
                                    <img
                                        src={project.coverImage}
                                        alt={project.title}
                                        className="w-full transition-all duration-300 hover:scale-105"
                                    />
                                </div>

                                {/* PROJECT TEXT */}
                                <div className="flex flex-col gap-3">
                                    <h3>{project.title}</h3>

                                    <div className="flex gap-3 flex-wrap">
                                        {project.ScopeOfWork.map((value, i) => (
                                            <p
                                                key={i}
                                                className="text-base border border-secondary/12 dark:border-white/12 w-fit py-1 px-4 rounded-full hover:bg-primary hover:text-secondary transition-all"
                                            >
                                                {value}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectList;
