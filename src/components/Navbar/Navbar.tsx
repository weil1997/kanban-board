import React from "react";
import { useBoardContext } from "../../context/BoardsContext";
import "./Navbar.scss";
import { ChevronDown } from "react-feather";

type props = {
    toggleShowCreateTask: () => void;
    toggleShowProjectsDropdown: () => void;
};

export default function Navbar({
    toggleShowCreateTask,
    toggleShowProjectsDropdown,
}: props) {
    const { currentProject } = useBoardContext();

    return (
        <nav className="navbar">
            <div className="navbar-logo-container">
                <h1>Kanban</h1>
            </div>
            <div className="navbar-main-container">
                <div
                    className="navbar-dropdown"
                    onClick={() => toggleShowProjectsDropdown()}
                >
                    <h4>{currentProject.name}</h4>
                    <ChevronDown />
                </div>
                <button className="btn" onClick={() => toggleShowCreateTask()}>
                    Add new task
                </button>
            </div>
        </nav>
    );
}
