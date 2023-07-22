
function Button(props) {
    return <div className="num-button">
        <p>{props.character}</p>
    </div>
}

function Operator(props) {
    return <div className="operator-button">
        <p>{props.character}</p>
    </div>
}

function ResetButton(props) {
    return <div className="reset-button">
        <p>{props.character}</p>
    </div>
}

export default Button;
export { Operator, ResetButton };