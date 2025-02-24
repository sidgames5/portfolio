import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IconCard({ icon, children }) {
    return <div className="flex flex-row items-center align-middle gap-1">
        <FontAwesomeIcon icon={icon} />
        {children}
    </div>;
}