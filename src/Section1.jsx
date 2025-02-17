import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./Header";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import TextBlock from "./TextBlock";

function FancyLink({ to, children }) {
    return (
        <div className="pl-8">
            <a
                href={to}
                className="border-white text-white p-1 w-full underline decoration-transparent hover:decoration-white hover:font-bold duration-300"
            >
                <div className="flex flex-row align-middle items-center gap-16 w-full">
                    {children}
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </a>
        </div>
    );
}

export default function Section1() {
    return (
        <div id="section-1" className="flex flex-col items-center align-middle">
            <Header />

            <div className="flex flex-row">
                <div className="w-2/5 opacity-50">
                    <img
                        src="main-tools-7.jpg"
                        alt="Stuff"
                        className="w-full h-auto"
                    />
                </div>
                <div className="bg-red-700 bg-opacity-50 -translate-x-1/2 h-fit">
                    <div className="flex flex-col bg-red-700 bg-opacity-90 w-full translate-x-1/2">
                        <FancyLink to="">Resume</FancyLink>
                        <FancyLink to="mailto:sid@thefossrant.com">
                            Contact
                        </FancyLink>
                        <FancyLink to="https://github.com/sidgames5">
                            GitHub
                        </FancyLink>
                    </div>
                    <div className="flex flex-col bg-red-700 bg-opacity-90 text-white ml-8 h-fit p-8 align-middle justify-center w-[calc(150%-2rem)]">
                        <h1 className="text-8xl font-extrabold">
                            Siddarth Srinivasan
                        </h1>
                        <p className="ml-32 mt-20 text-xl">
                            Front-end developer
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col mt-16 w-1/2" id="about">
                <div className="flex flex-row gap-4 items-stretch">
                    <div>
                        <h1 className="text-3xl text-left">
                            <strong>About</strong>
                        </h1>
                        <TextBlock title="About Me">
                            I am a high school student interested in computers
                            and 3D printing.
                        </TextBlock>
                        <TextBlock title="Interests">
                            I am passionate about coding and 3D printing, with a
                            small interest in tech tinkering. I love pushing
                            boundaries and finding limits. I enjoy creating and
                            crafting projects from scratch. I also do
                            photography and mapping as side hobbies.
                        </TextBlock>
                    </div>
                    {/* <div className="flex justify-center items-center">
                        <img
                            src="c531f98a-7b11-4ed4-8707-fd49a00f77ba.jpeg"
                            alt="Me"
                            className="object-contain"
                        />
                    </div> */}
                </div>
            </div>
            <div className="h-0.5 w-3/4 bg-gray-300 mt-32">&nbsp;</div>
        </div>
    );
}
