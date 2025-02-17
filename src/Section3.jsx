import { faCode, faFile, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProjectCard({
    name,
    award,
    link,
    paper,
    source,
    date,
    location,
    children,
}) {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row gap-8 justify-between">
                <span className="font-bold">{name}</span>
                <span className="flex flex-row gap-2">
                    {link != null && (
                        <a href={link}>
                            <FontAwesomeIcon icon={faLink} />
                            Link
                        </a>
                    )}
                    {source != null && (
                        <a href={source}>
                            <FontAwesomeIcon icon={faCode} />
                            Source
                        </a>
                    )}
                    {paper != null && (
                        <a href={paper}>
                            <FontAwesomeIcon icon={faFile} />
                            Paper
                        </a>
                    )}
                </span>
            </div>
            <div className="flex flex-row gap-8 justify-between">
                <span className="font-bold">{award}</span>
                <span>
                    {date}, {location}
                </span>
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
                    award="🥉3rd Place @ PA TSA Region 1"
                    location="Beaver Falls, PA"
                ></ProjectCard>
                <ProjectCard
                    name="Coding (Competition)"
                    date="Jan 2025"
                    award="🏆4th Place @ PA TSA Region 1"
                    location="Beaver Falls, PA"
                ></ProjectCard>
                <ProjectCard
                    name="The Gaming Hub"
                    date="Feb 2024"
                    award="🥉3rd Place @ HackNA 2024"
                    location="Wexford, PA"
                >
                    This website provides information on recycling and has a map
                    displaying near-by recycling facilities.
                </ProjectCard>
                <ProjectCard
                    name="RecycleWise"
                    date="Jan 2024"
                    link="https://www.fcasd.edu/post-details/~board/fox-chapel-area-school-district/post/dms-students-tops-in-stem-competition"
                    award="🥇1st Place @ Hack The Ram 2024"
                    location="Gibsonia, PA"
                >
                    This website provides information on recycling and has a map
                    displaying near-by recycling facilities.
                </ProjectCard>
            </div>
            <div className="h-0.5 w-3/4 bg-gray-300">&nbsp;</div>
        </div>
    );
}
