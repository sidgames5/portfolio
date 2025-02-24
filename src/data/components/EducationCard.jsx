import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function EducationCard(school) {
    return <div className="bg-sky-700 bg-opacity-50 p-4 h-full w-1/3 rounded-xl flex flex-col gap-1">
        <div className="flex flex-row">
            <div className="flex flex-col">
                <div className="flex flex-row justify-between">
                    <h2 className="text-xl font-semibold">{school.name}</h2>
                    <h2 className="text-lg font-medium">{school.time}</h2>
                </div>
                <div className="flex flex-row justify-between">
                    <h2 className="text-lg font-semibold">{school.title}</h2>
                    <h2 className="text-lg font-medium flex flex-row items-center gap-1"><FontAwesomeIcon icon={faLocationDot} />{school.location}</h2>
                </div>
                <p className="font-medium">{school.desc}</p>
            </div>
        </div>
    </ div>;
}