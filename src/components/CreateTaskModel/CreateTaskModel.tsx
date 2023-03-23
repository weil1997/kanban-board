import React, { useState } from "react";
import "./CreateTaskModel.scss";
import { X } from "react-feather";
import { useBoardContext } from "../../context/BoardsContext";

type Props = {
    toggleShowCreateTask: () => void;
};

export default function CreateTask({ toggleShowCreateTask }: Props) {
    const { createTicket } = useBoardContext();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState(0);
    const [subtasks, setSubtasks] = useState([""]);

    return (
        <div className="model-container">
            <div className="new-task">
                <div className="task-x" onClick={() => toggleShowCreateTask()}>
                    <X />
                </div>

                <h3 className="task-title">Creat new card</h3>

                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    placeholder="Insert title here..."
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label htmlFor="description">Description</label>

                <textarea
                    id="description"
                    placeholder="Insert description here..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <label htmlFor="state">State</label>
                <select
                    name="state"
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(parseInt(e.target.value))}
                >
                    <option value={0}>Todo</option>
                    <option value={1}>Doing</option>
                    <option value={2}>Done</option>
                </select>

                <label>Subtasks</label>
                {subtasks.map((task, index) => (
                    <div className="subtask-container">
                        <input
                            type="text"
                            placeholder="Insert title here..."
                            onChange={(e) => {
                                subtasks[index] = e.target.value;
                                setSubtasks([...subtasks]);
                            }}
                            value={task}
                        />
                        <X
                            onClick={() => {
                                console.log(subtasks);
                                subtasks.splice(index, 1);
                                console.log(subtasks);
                                setSubtasks([...subtasks]);
                            }}
                        />
                    </div>
                ))}
                <button
                    className="btn"
                    onClick={() => setSubtasks([...subtasks, ""])}
                >
                    Add new task
                </button>
                <button
                    className="btn"
                    onClick={() => {
                        createCard(title, description, subtasks, status);
                        toggleShowCreateTask();
                    }}
                >
                    Create card
                </button>
            </div>
        </div>
    );
}
