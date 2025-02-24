import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TechnologyCard from "./TechnologyCard";
import { faArrowRight, faCode, faFile, faLaptop, faLink } from "@fortawesome/free-solid-svg-icons";

function LinkButton({ icon, link, children }) {
    return <a href={link}><button className="bg-sky-700 p-1 w-fit h-fit rounded-xl flex flex-row gap-1 items-center align-middle text-sm"><FontAwesomeIcon icon={icon} />{children}<FontAwesomeIcon icon={faArrowRight} /></button></a>;
}

export default function ProjectCard(project) {
    return <div className="bg-sky-700 bg-opacity-50 p-4 h-full w-[45%] 2xl:w-[30%] rounded-xl flex flex-col gap-1">
        <div className="flex flex-row">
            <div className="flex flex-col">
                <h2 className="text-xl font-semibold flex flex-row gap-1 align-middle items-center">{project.purposes.map((p) => <FontAwesomeIcon icon={p} />)}{project.name}</h2>
                <p className="font-medium">{project.desc}</p>
            </div>
            <img src={project.logo} alt="Logo" className="w-auto h-20" />
        </div>
        <div className="flex flex-wrap gap-1">{project.technologies.map(TechnologyCard)}</div>
        <div className="flex flex-wrap gap-1">
            {project.links.source && <LinkButton icon={faCode} link={project.links.source}>Source</LinkButton>}
            {project.links.homepage && <LinkButton icon={faLink} link={project.links.homepage}>Homepage</LinkButton>}
            {project.links.demo && <LinkButton icon={faLaptop} link={project.links.demo}>Live Demo</LinkButton>}
            {project.links.article && <LinkButton icon={faFile} link={project.links.article}>Article</LinkButton>}
        </div>
    </ div>;
}