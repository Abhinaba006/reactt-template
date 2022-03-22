import React from "react";
import Option from "./Option";

const option = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Your works</h1>
            <button onClick={props.deleteAll}>Remove All</button> 
            {props.options.length===0 && <p>All done</p>}
            {
                props.options.map((option, index) => {
                    if(option.state===0){
                        return ( 
                            <Option
                                key={option.text}
                                optionText={option}
                                count={index+1}
                                deleteOption={props.deleteOption}
                                doneOption={props.doneOption}
                            />
                        );
                    }
                })
            }
        </div>
    );
}

export default option;