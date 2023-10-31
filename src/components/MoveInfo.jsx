const MoveInfo = ({ result, computerMove , playerMove}) => {
    return (
        <div>
            {
                result !== ''? <div>
            <h3>{result}</h3>
            <p>You :{playerMove}</p>
            <p>Computer :{computerMove}</p>
                </div> : ''
            }

        </div>
    );
};

export default MoveInfo;
