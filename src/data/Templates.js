import { faAndroid, faDartLang, faDocker, faFlutter, faGitAlt, faJava, faJs, faLinux, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import Language from "./models/Language";
import Technology from "./models/Technology";
import Interest from "./models/Interest";
import { faBriefcase, faCamera, faChartDiagram, faFlask, faKey, faMessage, faMusic, faScrewdriverWrench, faShield, faTrophy, faUsers } from "@fortawesome/free-solid-svg-icons";

const Templates = {
    languages: {
        javascript: new Language("JavaScript", faJs),
        python: new Language("Python", faPython),
        java: new Language("Java", faJava),
        haxe: new Language("Haxe"),
        kotlin: new Language("Kotlin"),
        dart: new Language("Dart", faDartLang)
    },
    technologies: {
        react: new Technology("React", faReact),
        flask: new Technology("Flask", faFlask),
        flutter: new Technology("Flutter", faFlutter),
        android: new Technology("Android", faAndroid),
        linux: new Technology("Linux", faLinux),
        docker: new Technology("Docker", faDocker),
        git: new Technology("Git", faGitAlt)
    },
    interests: {
        privacy: new Interest("Privacy", faShield),
        cybersecurity: new Interest("Cybersecurity", faKey),
        llms: new Interest("LLMs", faMessage),
        algorithms: new Interest("Algorithms", faChartDiagram),
        music: new Interest("Music", faMusic),
        photography: new Interest("Photography", faCamera)
    },
    purposes: {
        made_by_me: faScrewdriverWrench,
        contributed_to: faUsers,
        work_related: faBriefcase,
        competition: faTrophy
    }
};

export default Templates;