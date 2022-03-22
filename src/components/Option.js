import React from "react";

const option = (props) => (
    <div>
        <p>{props.count}. {props.optionText.text}</p>
        <button onClick={
            ()=>{
                props.deleteOption(props.optionText.text);
            }
        }>Remove</button>
        <button onClick={
            ()=>{
                props.doneOption(props.optionText.text)
            }
        }
        >Done</button>
    </div>
);

export default option;