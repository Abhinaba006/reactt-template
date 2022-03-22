import React from "react"

const completedWork = (props) => (      
    <div>
        <p>{props.count}. {props.workName}</p>
            <button onClick={
                ()=>{
                    props.undoneWork(props.workName)
                }
            }>Undone</button>
    </div>
)

export default completedWork