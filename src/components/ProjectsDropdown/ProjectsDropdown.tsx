import React from "react";
import ProjectsLinks from "../ProjectsLinks/ProjectsLinks";
import "./ProjectsDropdown.scss";
import { X } from "react-feather";

type Props = { toggleShowProjectsDropdown: () => void };

export default function ProjectsDropdown({
    toggleShowProjectsDropdown,
}: Props) {
    return (
        <div className="model-container">
            <div className="model-card project-dropdown">
                <div
                    className="model-close"
                    onClick={() => toggleShowProjectsDropdown()}
                >
                    <X />
                </div>
                <h3>all projects</h3>
                <ProjectsLinks />
            </div>
        </div>
    );
}
