import React from "react";
import { useState } from "react";
import { Folder, Plus } from "react-feather";
import { useBoardContext } from "../../context/BoardsContext";
import "./ProjectsLinks.scss";

export default function Projectslinks() {
    const { projects, createProject, currentProject, changeBoard } =
        useBoardContext();
    const [showCreateProject, setShowCreateProject] = useState(false);
    const [projectName, setProjectName] = useState("");

    return (
        <div className="projects-links">
            <ul className="sidebar-items">
                {projects.map((project, index) => (
                    <li
                        className={
                            project.id === currentProject.id ? "active" : ""
                        }
                        onClick={() => changeBoard(index)}
                    >
                        <Folder />
                        {project.name}
                    </li>
                ))}
                {/* i detta fall så ändrar vi om staten till true  */}
                <li onClick={() => setShowCreateProject(!showCreateProject)}>
                    <Plus />
                    Create board
                </li>
            </ul>
            {/* om showcreateproject är true visa upp denna kod. detta är som if sats */}
            {showCreateProject && (
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        createProject(projectName);
                        setProjectName("");
                        setShowCreateProject(false);
                    }}
                >
                    <input
                        type="text"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                    />

                    {/* koden nedan för säger att om vi har ett project namn så ska det inte gå att create en new task */}

                    <button className="btn" disabled={!projectName}>
                        create
                    </button>
                </form>
            )}
        </div>
    );
}
