import React from "react";
import { Ticket as TicketType } from "../../context/projects-data";
import "./Ticket.scss";
import { DraggableProvided, DraggableStateSnapshot } from "react-beautiful-dnd";
import { useState } from "react";

type Props = {
  ticket: TicketType;
  provided: DraggableProvided;
  snapshot: DraggableStateSnapshot;
};

export default function Ticket({ ticket, provided, snapshot }: Props) {
  const [showSubtasks, setShowSubtasks] = useState(false);
  return (
    <div
      className="ticket"
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      // @ts-ignore
      active={snapshot.isDragging.toString()}
      onClick={() => setShowSubtasks(!showSubtasks)}
    >
      <h3>{ticket.title}</h3>
      <p>{ticket.description}</p>
      <p>{ticket.tasks.length} subtasks</p>
      {showSubtasks && (
        // här mappar vi igenom ticket task istället för att ha li hårdkodad
        <ul>
          {ticket.tasks.map((task) => (
            <li>{task}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
