import "./App.css";
import EducationCard from "./data/components/EducationCard";
import ProjectCard from "./data/components/ProjectCard";
import PersonalData from "./data/PersonalData";
import Sidebar from "./Sidebar";

function App() {
    return (
        <main className="flex flex-col justify-center items-center">
            <div className="flex flex-row justify-center align-middle gap-16">
                <Sidebar />
                <div className="flex flex-col gap-2 w-fit h-full">
                    <h2 className="text-2xl">Projects</h2>
                    <div className="flex flex-wrap gap-4 h-full">
                        {PersonalData.projects.map(ProjectCard)}
                    </div>
                    <h2 className="text-2xl">Education</h2>
                    <div className="flex flex-wrap gap-4 h-full">
                        {PersonalData.education.map(EducationCard)}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default App;
