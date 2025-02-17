function EducationCard({ institution, date, title, gpa, children }) {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row gap-8 justify-between">
                <span className="font-bold">{institution}</span>
                <span>{date}</span>
            </div>
            <div className="flex flex-row gap-8 justify-between">
                <span className="font-bold">{title}</span>
                <span>{gpa}</span>
            </div>
            {children}
        </div>
    );
}
export default function Section2() {
    return (
        <div
            id="section-2"
            className="flex flex-row items-center justify-center align-middle p-16 gap-32"
        >
            <div>
                <h1 className="text-8xl font-extrabold">My Education</h1>
            </div>
            <div className="flex flex-col gap-8">
                <EducationCard
                    institution="Some College"
                    date="Aug 2028 - Jun 2032"
                    title="BSc in Mechanical Engineering"
                    gpa="N/A"
                ></EducationCard>
                <EducationCard
                    institution="Fox Chapel Area High School"
                    date="Aug 2024 - Jun 2028"
                    title="HS Diploma"
                    gpa="N/A"
                ></EducationCard>
            </div>
        </div>
    );
}
