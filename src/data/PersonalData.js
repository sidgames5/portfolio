import Education from "./models/Education";
import Project from "./models/Project";
import Templates from "./Templates";

const PersonalData = {
    languages: [
        Templates.languages.javascript,
        Templates.languages.python,
        Templates.languages.java,
        Templates.languages.haxe,
        Templates.languages.kotlin,
        Templates.languages.dart
    ],
    technologies: [
        Templates.technologies.react,
        Templates.technologies.flask,
        Templates.technologies.flutter,
        Templates.technologies.android,
        Templates.technologies.linux,
        Templates.technologies.docker,
        Templates.technologies.git
    ],
    interests: [
        Templates.interests.privacy,
        Templates.interests.cybersecurity,
        Templates.interests.llms,
        Templates.interests.algorithms,
        Templates.interests.music,
        Templates.interests.photography
    ],
    projects: [
        new Project("Pallet", "https://raw.githubusercontent.com/sidgames5/pallet/refs/heads/master/src/logo.svg", "No-nonsense solution for inventory management in your home or business", [Templates.technologies.react, Templates.technologies.flask, Templates.languages.javascript, Templates.languages.python], { source: "https://github.com/sidgames5/pallet" }, [Templates.purposes.made_by_me]),
        new Project("Excalibur", "", "A simple privacy-first voice assistant", [Templates.languages.python], { source: "https://github.com/sidgames5/excalibur" }, [Templates.purposes.made_by_me])
    ],
    competitions: [],
    education: [
        new Education("Fox Chapel Area High School", "Pittsburgh, PA", "HS Diploma", "Aug 2024 - Jun 2028")
    ],
    experience: []
};

export default PersonalData;