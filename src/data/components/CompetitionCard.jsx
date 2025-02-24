import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TechnologyCard from "./TechnologyCard";
import { faArrowRight, faCode, faFile, faLaptop, faLink, faLocationDot } from "@fortawesome/free-solid-svg-icons";

function LinkButton({ icon, link, children }) {
    return <a href={link}><button className="bg-sky-700 p-1 w-fit h-fit rounded-xl flex flex-row gap-1 items-center align-middle text-sm"><FontAwesomeIcon icon={icon} />{children}<FontAwesomeIcon icon={faArrowRight} /></button></a>;
}

export default function CompetitionCard(competition) {
    return (
        <div className="bg-sky-700 bg-opacity-50 p-4 h-full rounded-xl flex flex-col gap-1">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                    <h2 className="text-xl font-semibold">{competition.name}</h2>
                    <h2 className="text-lg font-semibold">{competition.award}</h2>
                </div>
                <div className="flex flex-col text-right">
                    <h2 className="text-lg font-medium flex flex-row items-center gap-1 justify-end">
                        <FontAwesomeIcon icon={faLocationDot} />
                        {competition.location}
                    </h2>
                    <h2 className="text-lg font-medium">{competition.time}</h2>
                </div>
            </div>
            <p className="font-medium">{competition.desc}</p>
            <div className="flex flex-wrap gap-1">{competition.technologies.map(TechnologyCard)}</div>
            <div className="flex flex-wrap gap-1">
                {competition.links.project && <LinkButton icon={faCode} link={competition.links.project}>Project</LinkButton>}
                {competition.links.article && <LinkButton icon={faFile} link={competition.links.article}>Article</LinkButton>}
            </div>
        </div>
    );
}