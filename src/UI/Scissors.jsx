import scissorImg from "../images/scissors-emoji.png";

const Scissors = ({ params, getResult }) => {
    return (
        <button className="move-button" onClick={() => getResult(params)}>
            <img src={scissorImg} className="move-icon" />
        </button>
    );
};

export default Scissors;
