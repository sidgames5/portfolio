import Competition from "./models/Competition";
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
        new Project("Pallet", "https://raw.githubusercontent.com/sidgames5/pallet/refs/heads/master/src/logo.svg", "No-nonsense solution for inventory management in your home or business", [Templates.technologies.react, Templates.technologies.flask, Templates.languages.javascript, Templates.languages.python], { source: "https://github.com/sidgames5/pallet", homepage: "https://thefossrant.com/pallet" }, [Templates.purposes.made_by_me]),
        new Project("Excalibur", "", "A simple privacy-first voice assistant", [Templates.languages.python, Templates.interests.llms], { source: "https://github.com/sidgames5/excalibur", article: "https://blog.thefossrant.com/posts/3.-i-made-a-voice-assistant/" }, [Templates.purposes.made_by_me]),
        new Project("Cobra", "", "A high-level general-purpose interpreted language", [Templates.languages.haxe], { source: "https://github.com/sidgames5/cobra" }, [Templates.purposes.made_by_me])
    ],
    competitions: [
        new Competition("PA TSA Region 1 - Board Game Design", "Beaver Falls, PA", "Jan 2025", "3rd Place", "", [], {}),
        new Competition("PA TSA Region 1 - Coding", "Beaver Falls, PA", "Jan 2025", "4th Place", "", [], {}),
        new Competition("HackNA 2024", "Wexford, PA", "Feb 2024", "3rd Place", "", [Templates.languages.javascript, Templates.languages.python], {}),
        new Competition("Hack The Ram 2024", "Gibsonia, PA", "Jan 2024", "1st Place", "We created a website that shows information on how to properly recycle as well as a map of nearby recycling facilities.", [Templates.languages.javascript, Templates.languages.python], { article: "https://www.fcasd.edu/post-details/~board/fox-chapel-area-school-district/post/dms-students-tops-in-stem-competition" })
    ],
    education: [
        new Education("Fox Chapel Area High School", "Pittsburgh, PA", "HS Diploma", "Aug 2024 - Jun 2028")
    ],
    experience: []
};

export default PersonalData;