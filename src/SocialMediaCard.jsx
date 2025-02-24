import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconCard from "./IconCard";

export default function SocialMediaCard({ icon, link, name }) {
    return <IconCard icon={icon}>
        <a href={link}>{name}</a>
    </IconCard>
}