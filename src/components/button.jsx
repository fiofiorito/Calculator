
function Button(props) {
    return <div className="num-button" onClick={() => { props.onButtonPress(props.character) }}>{props.character}</div>
}

function Operator(props) {
    return <div className="operator-button" onClick={() => { props.onButtonPress(props.character) }}>{props.character}</div>
}

function ResetButton(props) {
    return <div className=" reset-button" onClick={() => { props.onButtonPress(props.character) }}>{props.character}</div>
}

export default Button;
export { Operator, ResetButton }