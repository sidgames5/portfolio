import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProjectCard({ name, award, link, date, children }) {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row gap-8 justify-between">
                <span className="font-bold">{name}</span>
                <span>
                    <a href={link}>
                        <FontAwesomeIcon icon={faLink} />
                        Link
                    </a>
                </span>
            </div>
            <div className="flex flex-row gap-8 justify-between">
                <span className="font-bold">{award}</span>
                <span>{date}</span>
            </div>
            {children}
        </div>
    );
}

export default function Section3() {
    return (
        <div
            id="section-3"
            className="flex flex-col items-center justify-center align-middle p-16 gap-32"
        >
            <h1 className="text-5xl font-extrabold">My Projects & Awards</h1>
            <div className="grid grid-cols-2 gap-8 *:max-w-[30vw]">
                <ProjectCard
                    name="Board Game Design (Competition)"
                    date="Jan 2025"
                    link=""
                    award="3rd Place @ PA TSA Region 1"
                ></ProjectCard>
                <ProjectCard
                    name="Coding (Competition)"
                    date="Jan 2025"
                    link=""
                    award="4th Place @ PA TSA Region 1"
                ></ProjectCard>
                <ProjectCard
                    name="RecycleWise"
                    date="Jan 2024"
                    link="https://www.fcasd.edu/post-details/~board/fox-chapel-area-school-district/post/dms-students-tops-in-stem-competition"
                    award="1st Place @ Hack The Ram 2024"
                >
                    This website provides information on recycling and has a map
                    displaying near-by recycling facilities.
                </ProjectCard>
            </div>
        </div>
    );
}
