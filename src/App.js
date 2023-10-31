import { useState } from "react";
import "./App.css";
import ResetButton from "./UI/ResetButton";
import UserScore from "./components/UserScore";
import UserTurn from "./components/UserTurn";
import pickComputerMove from "./modules/computerPick.module";
import MoveInfo from "./components/MoveInfo";

function App() {
    const [score, setScore] = useState({
        wins: 0,
        losses: 0,
        ties: 0,
    });
    const [result, setResult] = useState("");
    const [computerMove, setComputerMove] = useState(pickComputerMove());

    function getResultHandler(playerMove) {
        setComputerMove(pickComputerMove());
        if (playerMove === "scissors") {
            if (computerMove === "rock") {
                setResult("You lose.");
            } else if (computerMove === "paper") {
                setResult("You win!");
            } else if (computerMove === "scissors") {
                setResult("Tie.");
            }
        } else if (playerMove === "paper") {
            if (computerMove === "rock") {
                setResult("You win!");
            } else if (computerMove === "paper") {
                setResult("Tie.");
            } else if (computerMove === "scissors") {
                setResult("You lose.");
            }
        } else if (playerMove === "rock") {
            if (computerMove === "rock") {
                setResult("Tie.");
            } else if (computerMove === "paper") {
                setResult("You lose.");
            } else if (computerMove === "scissors") {
                setResult("You win!");
            }
        }

        if (result === "You win!") {
            setScore((prevScore) => ({
                ...prevScore,
                wins: prevScore.wins + 1,
            }));
        } else if (result === "You lose.") {
            setScore((prevScore) => ({
                ...prevScore,
                losses: prevScore.losses + 1,
            }));
        } else if (result === "Tie.") {
            setScore((prevScore) => ({
                ...prevScore,
                ties: prevScore.ties + 1,
            }));
        }
    }

    function resetScoreHandler() {
        setScore({
            wins: 0,
            losses: 0,
            ties: 0,
        });
    }

    return (
        <div className="App">
            <h1>Rock Paper Scissors</h1>
            <UserTurn getResult={getResultHandler} params="playerMove" />
            <MoveInfo result={result} computerMove={computerMove} />
            <UserScore score={score} />
            <ResetButton resetScore={resetScoreHandler} />
        </div>
    );
}

export default App;
