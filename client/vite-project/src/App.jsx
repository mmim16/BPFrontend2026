import { useState } from "react";
import HomePage from "./HomePage";
import Game from "./Game";
import "./styles.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home"); // "home" | "infinite" | "daily"

  function startGame(mode) {
    setCurrentPage(mode);
  }

  function goHome() {
    setCurrentPage("home");
  }

  if (currentPage === "home") {
    return <HomePage onStart={startGame} />;
  }

  return <Game mode={currentPage} onHome={goHome} />;
}