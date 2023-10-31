const ResetButton = ({ resetScore }) => {
    return (
        <div>
            <button className="reset-score-button" onClick={() => resetScore()}>
                Reset score
            </button>
        </div>
    );
};

export default ResetButton;
