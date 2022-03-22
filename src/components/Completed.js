import React from "react";
import CompletedWork from "./CompletedWork.js"

const completed = (props)=>{
    console.log(props.workList)
    let flag =0;
    for(let i=0;i<props.workList.length;i++){
        if(props.workList[i].state===1){
            flag=1;
        }
    }
    return (
        <div>
            <h1>The completed Works</h1>
            {flag===0 && <p>please do something with your lfe!</p>}
            {
                props.workList.map((work, index)=> {
                    if(work.state===1){
                        return (
                            <CompletedWork
                                key={work.text}
                                count={index+1}
                                workName={work.text}
                                undoneWork={props.undoneWork}
                            />
                        )
                    }
                })
            }
        </div>
    )
}

export default completed;