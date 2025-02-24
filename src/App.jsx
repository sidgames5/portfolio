import "./App.css";
import CompetitionCard from "./data/components/CompetitionCard";
import EducationCard from "./data/components/EducationCard";
import ProjectCard from "./data/components/ProjectCard";
import PersonalData from "./data/PersonalData";
import Sidebar from "./Sidebar";

function App() {
    return (
        <main className="flex flex-col justify-center items-center">
            <div className="flex flex-row justify-center align-middle gap-16 p-8">
                <Sidebar />
                <div className="flex flex-col gap-2 h-full">
                    <h2 className="text-2xl">Projects</h2>
                    {/* <div className="flex flex-wrap gap-4 h-full"> */}
                    <div className="h-full grid grid-cols-3 gap-4">
                        {PersonalData.projects.map(ProjectCard)}
                    </div>
                    <h2 className="text-2xl">Education</h2>
                    <div className="h-full grid grid-cols-3 gap-4">
                        {PersonalData.education.map(EducationCard)}
                    </div>
                    <h2 className="text-2xl">Competitions</h2>
                    <div className="h-full grid grid-cols-3 gap-4">
                        {PersonalData.competitions.map(CompetitionCard)}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default App;
