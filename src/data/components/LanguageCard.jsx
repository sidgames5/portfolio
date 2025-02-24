import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LanguageCard(language) {
    return <div className="bg-sky-700 p-1 w-fit h-fit rounded-xl flex flex-row gap-1 items-center align-middle text-sm"><FontAwesomeIcon icon={language.icon} />{language.name}</div>;
}