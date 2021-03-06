import './button.css';

function Button(props){
    let {text, prev, curr, op} = props
    let {state0, setState0} = prev
    let {state1, setState1} = curr
    let {sign, setSign} = op;

    
    function calculate(operand1, operator, operand2) {
        switch(operator){
            case "+": return +operand1 + +operand2; break;
            case "-": return +operand1 - +operand2; break;
            case "*": return +operand1 * +operand2; break;
            case "/": return +operand1 / +operand2; break;
            default: return 0;
        }
    }

    function toClick() {
        if (Number(text)){
            if (state1 === 0){
                setState1(text)
            } else {
                setState1(state1.toString() + text)
            }
        } else if (text === "CE"){
            setSign(0)
            setState0(0)
            setState1(0)
        } else if (text === "="){
            if (sign!==0){
                setState1(calculate(state0, sign, state1))
                setState0(0)
                setSign(0)
            }
        } else {
            if (sign===0){
                setState0(state1)
                setSign(text)
                setState1(0)
            } else if (state1===0){
                setSign(text)
            } else {
                setState0(calculate(state0, sign, state1))
                setState1(0)
                setSign(text)
            }
        }
    }

    return(
        <div class="click" onClick={toClick}>
            {text}
        </div>
    )
}

export default Button