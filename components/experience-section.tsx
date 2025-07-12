export default function ExperienceSection() {
    const experiences = [
        {
            company: "Self-Employed, Brisbane",
            date: "Sep 2016 - Aug 2014", // Note: This appears reversed in the image
            role: "Visual Designer",
            color: "bg-emerald-500",
            description:
                "A visual designer designs for a variety of platforms, which may include Internet and intranet sites, games, movies, kiosks and wearables. In short, they create the concepts.",
        },
        {
            company: "New Man Services",
            date: "Jan 17 - Mar 2018",
            role: "UI/UX Designer",
            color: "bg-orange-500",
            description:
                "User interface design or user interface engineering is the design of user interfaces for machines and software, such as computers, home appliances, mobile devices.",
        },
        {
            company: "Global Solution",
            date: "Feb 2019 - Mar 2020",
            role: "Sr. Product Designer",
            color: "bg-yellow-500",
            description:
                "Find Product Photography Canada. Large Selection. Always Sale. Cheap Prices. Full Offer. Save Online. Compare Online. Simple Search. The Best Price. Compare Simply.",
        },
    ]

    return (
        <section id="experience" className="px-6 py-16 bg-[#f8f7f1]">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-800 text-center mb-16">My Work Experience</h2>

                {/* Timeline Container */}
                <div className="flex md:flex-row items-center justify-center w-full">
                    <div className="hidden md:inline-block w-full">
                        {experiences.map((exp, index) => (
                            <div key={index} className="mb-20 ml-8 relative w-full">

                                {/* Timeline Item */}
                                <div className="flex flex-col md:flex-row md:items-start gap-6">
                                    {/* Left - Date & Company */}
                                    <div className="md:w-full text-left mr-16 pr-5">
                                        <h4 className="font-semibold text-slate-800">{exp.company}</h4>
                                        <p className="text-sm text-slate-600">{exp.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="relative border-l-2 border-dashed border-slate-300 w-full">
                        {experiences.map((exp, index) => (
                            <div key={index} className="mb-12 ml-8 relative">
                                {/* Dot marker */}
                                <div className="border-1 border-dashed border-slate-300 w-5 h-5 rounded-full p-1 bg-white absolute -left-11">
                                    <div
                                        className={`w-full h-full rounded-full ${exp.color}`}
                                    ></div>
                                </div>

                                {/* Right - Role & Description */}
                                <div className="md:w-full pl-2 md:pl-5">
                                    <h5 className="font-semibold text-slate-800 mb-1">{exp.role}</h5>
                                    <p className="text-sm text-slate-600">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </section>
    )
}
