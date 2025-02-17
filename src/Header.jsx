import HeaderLink from "./HeaderLink";

export default function Header() {
    return (
        <div id="header">
            <div className="header-left flex flex-row gap-12 text-2xl p-8">
                <HeaderLink to="#section-1">
                    <strong>About</strong>
                </HeaderLink>
                <HeaderLink to="#section-2">
                    <strong>Education</strong>
                </HeaderLink>
                <HeaderLink to="#section-3">
                    <strong>Projects</strong>
                </HeaderLink>
                <HeaderLink to="#section-4">Activities</HeaderLink>
                <HeaderLink to="#section-5">Contact</HeaderLink>
                <HeaderLink to="https://blog.thefossrant.com">Blog</HeaderLink>
            </div>
            <div className="header-right"></div>
        </div>
    );
}
