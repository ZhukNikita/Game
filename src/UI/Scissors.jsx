import scissorImg from "../images/scissors-emoji.png";
import pickComputerMove from "../modules/computerPick.module";

const Scissors = ({ setPlayerMove , setComputerMove}) => {
    return (
        <button className="move-button" onClick={() =>{ setPlayerMove('scissors') ; setComputerMove(pickComputerMove())}}>
            <img src={scissorImg} className="move-icon" />
        </button>
    );
};

export default Scissors;
