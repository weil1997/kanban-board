import Sidebar from "./components/Sidebar/Sidebar";
import Board from "./components/Board/Board";
import Navbar from "./components/Navbar/Navbar";
import CreateTaskModel from "./components/CreateTaskModel/CreateTaskModel";
import ProjectsDropdown from "./components/ProjectsDropdown/ProjectsDropdown";
import { useState } from "react";

export default function App() {
    const [showCreateTask, setShowCreateTask] = useState(false);
    const [showProjectsDropdown, setProjectsDropdown] = useState(false);

    function toggleShowCreateTask() {
        setShowCreateTask(!showCreateTask);
    }

    function toggleShowProjectsDropdown() {
        setProjectsDropdown(!showProjectsDropdown);
    }

    return (
        <div className="App">
            <Navbar
                toggleShowCreateTask={toggleShowCreateTask}
                toggleShowProjectsDropdown={toggleShowProjectsDropdown}
            />
            <div className="main-container">
                <Sidebar />
                <Board />
            </div>
            {showCreateTask && (
                <CreateTaskModel toggleShowCreateTask={toggleShowCreateTask} />
            )}
            {showProjectsDropdown && (
                <ProjectsDropdown
                    toggleShowProjectsDropdown={toggleShowProjectsDropdown}
                />
            )}
        </div>
    );
}
