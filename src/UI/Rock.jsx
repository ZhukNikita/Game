import rockImg from "../images/rock-emoji.png";

const Rock = ({ params, getResult }) => {
    return (
        <button className="move-button" onClick={() => getResult(params)}>
            <img src={rockImg} className="move-icon" />
        </button>
    );
};

export default Rock;
