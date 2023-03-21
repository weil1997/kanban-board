import Sidebar from "./components/Sidebar/Sidebar";
import Board from "./components/Board/Board";

export default function App() {
  return (
    <div className="main-container">
      <Sidebar />
      <Board />
    </div>
  );
}
