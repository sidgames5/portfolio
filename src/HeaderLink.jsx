export default function HeaderLink({ to, children }) {
    return (
        <a
            href={to}
            className="header-link hover:text-sky-700 underline decoration-transparent hover:decoration-sky-700 duration-300"
        >
            {children}
        </a>
    );
}
