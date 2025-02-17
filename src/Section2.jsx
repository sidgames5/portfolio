function EducationCard({ institution, date, title, location, children }) {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row gap-8 justify-between">
                <span className="font-bold">{institution}</span>
                <span>{date}</span>
            </div>
            <div className="flex flex-row gap-8 justify-between">
                <span className="font-bold">{title}</span>
                <span>{location}</span>
            </div>
            {children}
        </div>
    );
}
export default function Section2() {
    return (
        <div
            id="section-2"
            className="flex flex-row items-center justify-center align-top p-16 gap-32"
        >
            <div className="flex flex-col items-center justify-center align-middle p-16 gap-32">
                <div>
                    <h1 className="text-5xl font-extrabold">My Education</h1>
                </div>
                <div className="flex flex-col gap-8 *:max-w-[30vw]">
                    <EducationCard
                        institution="Fox Chapel Area High School"
                        date="Aug 2024 - Jun 2028"
                        title="HS Diploma"
                        location="Pittsburgh, PA"
                    ></EducationCard>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center align-middle p-16 gap-32">
                <div>
                    <h1 className="text-5xl font-extrabold">My Experience</h1>
                </div>
                <div className="flex flex-col gap-8 *:max-w-[30vw]">
                    <EducationCard
                        institution="Self-employed"
                        date="Jul 2020 - now"
                        title="Open Source Developer"
                        location="Remote"
                    >
                        <ul>
                            <li>Worked on several open-source projects</li>
                            <li>Languages: Java, Python, JavaScript, Haxe</li>
                        </ul>
                    </EducationCard>
                </div>
            </div>
        </div>
    );
}
