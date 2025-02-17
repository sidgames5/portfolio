export default function HeaderLink({ to, children }) {
    return (
        <a
            href={to}
            className="header-link hover:text-red-700 underline decoration-transparent hover:decoration-red-700 duration-300"
        >
            {children}
        </a>
    );
}
