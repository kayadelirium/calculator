import './output.css';

function Output(props){
    const {state} = props;
    return(
        <div class="output">
            {state}
        </div> 
    );
}

export default Output