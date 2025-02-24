import "./App.css";
import EducationCard from "./data/components/EducationCard";
import ProjectCard from "./data/components/ProjectCard";
import PersonalData from "./data/PersonalData";
import Sidebar from "./Sidebar";

function App() {
    return (
        <main>
            <div className="flex flex-row">
                <Sidebar />
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl">Projects</h2>
                    <div className="flex flex-wrap gap-4 w-[60vw]">
                        {PersonalData.projects.map(ProjectCard)}
                    </div>
                    <h2 className="text-2xl">Education</h2>
                    <div className="flex flex-wrap gap-4 w-[60vw]">
                        {PersonalData.education.map(EducationCard)}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default App;
