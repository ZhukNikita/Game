import { useEffect, useState } from "react";
import "./App.css";
import ResetButton from "./UI/ResetButton";
import UserScore from "./components/UserScore";
import UserTurn from "./components/UserTurn";
import MoveInfo from "./components/MoveInfo";

function App() {
    const [result, setResult] = useState("");
    const [computerMove, setComputerMove] = useState('');
    const [playerMove, setPlayerMove] = useState('');
    const [losses , setLosses] = useState(0)
    const [wins , setWins] = useState(0)
    const [ties , setTies] = useState(0)
    useEffect(()=>{
        if(playerMove !== '' && computerMove !== ''){
            if (playerMove === "scissors") {
                if (computerMove === "rock") {
                    setResult("You lose.");
                    setLosses(prevState => prevState + 1)
                } else if (computerMove === "paper") {
                    setResult("You win!");
                    setWins(prevState => prevState + 1)
                } else if (computerMove === "scissors") {
                    setResult("Tie.");
                    setTies(prevState => prevState + 1)
                }
            } else if (playerMove === "paper") {
                if (computerMove === "rock") {
                    setResult("You win!");
                    setWins(prevState => prevState + 1)

                } else if (computerMove === "paper") {
                    setResult("Tie.");
                    setTies(prevState => prevState + 1)

                } else if (computerMove === "scissors") {
                    setResult("You lose.");
                    setLosses(prevState => prevState + 1)

                }
            } else if (playerMove === "rock") {
                if (computerMove === "rock") {
                    setResult("Tie.");
                    setTies(prevState => prevState + 1)

                } else if (computerMove === "paper") {
                    setResult("You lose.");
                    setLosses(prevState => prevState + 1)

                } else if (computerMove === "scissors") {
                    setResult("You win!");
                    setWins(prevState => prevState + 1)

                }
            }
        }
    },[playerMove]);


    function resetScoreHandler() {
        setWins(0)
        setLosses(0)
        setTies(0)
    }
    return (
        <div className="App">
            <h1>Rock Paper Scissors</h1>
            <UserTurn setPlayerMove={setPlayerMove} setComputerMove={setComputerMove} />
            <MoveInfo result={result} playerMove={playerMove} computerMove={computerMove}  />
            <UserScore wins={wins} losses={losses} ties={ties} />
            <ResetButton resetScore={resetScoreHandler} />
        </div>
    );
}

export default App;
