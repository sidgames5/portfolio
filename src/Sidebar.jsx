import { faGithub } from "@fortawesome/free-brands-svg-icons";
import SocialMediaCard from "./SocialMediaCard";
import IconCard from "./IconCard";
import { faClock, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
import PersonalData from "./data/PersonalData";
import LanguageCard from "./data/components/LanguageCard";
import TechnologyCard from "./data/components/TechnologyCard";
import InterestCard from "./data/components/InterestCard";

function TimeDisplay({ timeZone }) {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const zonedTime = toZonedTime(currentTime, timeZone);
    const formattedTime = format(zonedTime, 'hh:mm');

    const tz = -zonedTime.getTimezoneOffset() / 60;

    if (tz < 0) {
        return `${formattedTime} (GMT${tz})`;
    } else {
        return `${formattedTime} (GMT+${tz})`;
    }
}

export default function Sidebar() {
    return <div className="flex flex-col gap-2 bg-sky-700 bg-opacity-50 p-4 rounded-xl lg:max-w-[25%] w-full">
        <div className="flex flex-col">
            <h1 className="text-3xl font-bold">Siddarth Srinivasan</h1>
            <p className="text-xl font-medium">@thefossrant</p>
        </div>
        <div className="flex flex-col">
            <SocialMediaCard icon={faGithub} name="@sidgames5" link="https://github.com/sidgames5" />
            <SocialMediaCard icon={faEnvelope} name="sid@thefossrant.com" link="mailto:sid@thefossrant.com" />
            <IconCard icon={faLocationDot}>Pittsburgh, PA, USA</IconCard>
            <IconCard icon={faClock}><TimeDisplay timeZone="America/New_York" /></IconCard>
        </div>
        <h2 className="text-lg font-semibold">Languages</h2>
        <div className="flex flex-wrap gap-1">
            {PersonalData.languages.map(LanguageCard)}
        </div>
        <h2 className="text-lg font-semibold">Technologies</h2>
        <div className="flex flex-wrap gap-1">
            {PersonalData.technologies.map(TechnologyCard)}
        </div>
        <h2 className="text-lg font-semibold">Interests</h2>
        <div className="flex flex-wrap gap-1">
            {PersonalData.interests.map(InterestCard)}
        </div>
    </div>;
}