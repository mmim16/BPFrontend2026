import { useState } from "react";
import axios from "axios"; //fetch yelp reviews

export default function Game() {
  const [review, setReview] = useState(""); //holds review text
  const [rating, setRating] = useState(null);   //holds actual rating
  const [guess, setGuess] = useState(null);     //holds user's guess
  const [score, setScore] = useState(0);       //holds score


//api code to get the reviews and play game


}

const styles = {
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #bebefc, #d3eaf8)",
    fontFamily: "Delius, Comic Sans MS, cursive, sans-serif",
  },

  card: {
    width: "420px",
    padding: "25px",
    borderRadius: "25px",   //rounded corners
    backgroundColor: "#d9d9ff",
    boxShadow: "0 10px 30px rgba(198, 173, 252, 0.35)",
    textAlign: "center",
    border: "2px solid #c6c6fc",
  },

  title: {
    marginBottom: "15px",
    color: "#908eff", // lavender purple
  },

  button: {
    padding: "10px 15px",
    border: "none",
    borderRadius: "15px",
    backgroundColor: "#8db2fd", // baby blue
    color: "white",
    cursor: "pointer",
    marginBottom: "20px",
    fontWeight: "bold",
    boxShadow: "0 4px 10px rgba(141, 176, 247, 0.3)",
  },

  reviewBox: {
    padding: "18px",
    borderRadius: "15px",
    backgroundColor: "#d9d9ff",
    border: "1px solid #c6c6fc",
    marginBottom: "20px",
    minHeight: "80px",
    color: "#444",
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
  },

  starButton: {
    flex: 1,
    padding: "10px",
    borderRadius: "15px",
    border: "2px solid #c6c6fc",
    cursor: "pointer",
    fontWeight: "bold",
    backgroundColor: "#a4a4fe",
    transition: "0.2s",
  },

  result: {
    marginTop: "20px",
    padding: "10px",
    borderRadius: "15px",
    backgroundColor: "#d9d9ff",
    border: "1px solid #c6c6fc",
    color: "#444",
  },

  score: {
    marginTop: "20px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#908eff",
  },
};