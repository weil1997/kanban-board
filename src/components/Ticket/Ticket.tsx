import React from "react";
import "./Ticket.scss";

type Props = {};

export default function Ticket({}: Props) {
  return (
    <div className="ticket">
      <h3>This is a ticket</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, facilis.
      </p>
      <p>subtasks</p>
    </div>
  );
}
