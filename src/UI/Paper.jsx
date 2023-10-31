import paperImg from "../images/paper-emoji.png";

const Paper = ({ getResult }) => {
    return (
        <button className="move-button" onClick={() => getResult("paper")}>
            <img src={paperImg} className="move-icon" />
        </button>
    );
};

export default Paper;
