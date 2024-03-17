import React from "react";
import Ticket from "../Ticket/Ticket";
import "./Board.scss";
import { useBoardContext } from "../../context/BoardsContext";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export default function Board() {
  const { currentProject, changeCurrentProjectBoard } = useBoardContext();

  return (
    <div className="board">
      <DragDropContext
        onDragEnd={(result) => {
          if (!result.destination) return;

          const { source, destination } = result;

          const board = [...currentProject.board];
          const sourceIndex = board.findIndex(
            (column) => column.name === source.droppableId
          );
          const destinationIndex = board.findIndex(
            (column) => column.name === destination.droppableId
          );
          const [removedTicket] = board[sourceIndex].tickets.splice(
            source.index,
            1
          );

          board[destinationIndex].tickets.splice(
            destination.index,
            0,
            removedTicket
          );
          changeCurrentProjectBoard(board);
        }}
      >
        {currentProject.board.map((column, index) => (
          <div key={column.name} id={index + ""}>
            <Droppable droppableId={column.name}>
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  // @ts-ignore
                  active={snapshot.isDraggingOver.toString()}
                  className="board-column"
                >
                  <div className="board-title">
                    <div
                      className={
                        "board-title-icon " + column.name.toLowerCase()
                      }
                    ></div>
                    <h4 className="">{column.name}</h4>
                  </div>

                  {column.tickets.map((ticket, index) => (
                    <Draggable
                      key={ticket.id}
                      draggableId={ticket.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <Ticket
                          provided={provided}
                          snapshot={snapshot}
                          ticket={ticket}
                        />
                      )}
                    </Draggable>
                  ))}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </DragDropContext>
    </div>
  );
}
