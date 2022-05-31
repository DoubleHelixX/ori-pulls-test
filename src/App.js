import "./App.css";
import DatabaseCard from "./Components/DatabaseCard/DatabaseCard";
import ForumCard from "./Components/ForumCard/ForumCard";
import Navigation from "./Components/Navigation/Navigation";
import ProjectsCard from "./Components/ProjectsCard/ProjectsCard";

function App() {
  return (
    <>
      <Navigation className="navigation" />
      <div className="boxes">
        <h1 className="dashBoardTitle">Dashboard</h1>
        <ProjectsCard className="projects" />
        <DatabaseCard className="database" />
        <ForumCard className="forum" />
      </div>
    </>
  );
}

export default App;
