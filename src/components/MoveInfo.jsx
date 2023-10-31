const MoveInfo = ({ result, computerMove }) => {
    return (
        <div>
            <h3>{`${result}
            You:  ${computerMove} Computer
            `}</h3>
        </div>
    );
};

export default MoveInfo;
