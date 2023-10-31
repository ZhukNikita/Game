import Paper from "../UI/Paper";
import Rock from "../UI/Rock";
import Scissors from "../UI/Scissors";

const UserTurn = ({setPlayerMove , setComputerMove}) => {
    return (
        <div>
            <Rock setPlayerMove={setPlayerMove} setComputerMove={setComputerMove} />
            <Paper setPlayerMove={setPlayerMove} setComputerMove={setComputerMove} />
            <Scissors setPlayerMove={setPlayerMove} setComputerMove={setComputerMove}/>
        </div>
    );
};

export default UserTurn;
