const UserScore = ({ score }) => {
    return (
        <div>
            Wins: {score.wins}, Losses: {score.losses}, Ties: {score.ties}
        </div>
    );
};

export default UserScore;
