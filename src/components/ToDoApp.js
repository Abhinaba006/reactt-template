import React from "react";
import Header from "./Header";
import Options from "./Options";
import AddOption from "./AddOptio";
import Completed from "./Completed"

export default class ToDoApp extends React.Component {
    state = {
        workList: [{
            state:0,
            text:'eat'
        },{
            state:1,
            text:'code'
        }],
        selectedOption: undefined
    }
    deleteAllOptions = () => {
        this.setState(() => ({ options: [{}] }));
    }
    toogleState=(option)=>{
        this.setState((prevState)=>({
            workList : prevState.workList.filter((item)=>{
                if(item.text===option){
                    item.state= item.state===0?1:0;
                }
                return item;
            })
        }))
        console.log(this.state.workList);
    }
    deleteOption = (text) => {
        this.setState((prevState) => ({
            workList: prevState.workList.filter((work) => work.text !== text)
        }));
    }
    handleAddOption = (option) => {
        // console.log(option);
        this.setState((prevState)=>({
            workList: prevState.workList.concat({
                state:0,
                text:option
            })
        }))
    };
    componentDidUpdate(prevProps, prevState) {
        console.log("updated");
        if(prevState.workList.length!==this.state.workList.length){
            const json = JSON.stringify(this.state.workList);
            localStorage.setItem('workList', json);
        }
    }
    componentDidMount(){
        try{
            const json = localStorage.getItem('workList');
            const workList = JSON.parse(json);
            if(workList){
                this.setState(()=>(workList));
            }
        }catch(e){

        }
    }
    render() {
        let subtitle = 'All the things need to be done';

        return (
            <div>
                <Header title="To Do List" subtitle={subtitle} />
                <Options
                    options={this.state.workList} 
                    deleteAll={this.deleteAllOptions}
                    deleteOption={this.deleteOption} 
                    doneOption={this.toogleState}   
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
                <Completed
                    workList={this.state.workList}
                    undoneWork={this.toogleState}
                />
            </div>
        );
    }
}