import "./Sidebar.scss";
import { useBoardContext } from "../../context/BoardsContext";
import ProjectsLinks from "../ProjectsLinks/ProjectsLinks";

type Props = {};

export default function Sidebar() {
    const { projects } = useBoardContext();

    return (
        <div className="sidebar">
            <p>ALL boards ({projects.length})</p>
            <ProjectsLinks />
        </div>
    );
}
