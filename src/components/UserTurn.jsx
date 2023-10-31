import Paper from "../UI/Paper";
import Rock from "../UI/Rock";
import Scissors from "../UI/Scissors";

const UserTurn = ({ getResult }) => {
    return (
        <div>
            <Rock params="rock" getResult={(params) => getResult(params)} />
            <Paper params="paper" getResult={(params) => getResult(params)} />
            <Scissors
                params="scissors"
                getResult={(params) => getResult(params)}
            />
        </div>
    );
};

export default UserTurn;
