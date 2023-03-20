import React from "react";
import "./Sidebar.scss";
import {} from "react-feather";
import { Folder, Plus } from "react-feather";

type Props = {};

export default function ({}: Props) {
  return (
    <div className="sidebar">
      <p>ALL boards (2)</p>
      <ul className="sidebar-items">
        <li className="active">
          <Folder />
          Place board
        </li>
        <li>
          <Folder />
          Place board
        </li>
        <li>
          <Plus />
          Create board
        </li>
      </ul>
    </div>
  );
}
