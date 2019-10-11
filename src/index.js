import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";

import Navbar from "./Navbar/index.js";
import All from "./List/all.js";
import UnStarted from "./List/unstarted.js";
import Completed from "./List/completed.js";
import AddPanel from "./AddList/index.js";

import "./common.css";
import "./index.css";

class Root extends React.Component { 

    constructor(props) {
        super(props);
        this.state = { 
            list: [
                { id: 1, title:"Meeting", complete: 0, important: false, urgent: false, index: 0 },
                { id: 2, title:"Reply Emails", complete: 0, important: false, urgent: true, index: 1 },
                { id: 3, title:"Afternoon Tea", complete: 0, important: true, urgent: 0, index: 2 },
                { id: 4, title:"Example", complete: 1, important: true, urgent: 1, index: 3 }
            ],
            showAddPanel: false
        };
        this.changeCategory = this.changeCategory.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
        this.addTask = this.addTask.bind(this);
        this.showAddTask = this.showAddTask.bind(this);
    }

    showAddTask(state){
        this.setState({ showAddPanel: state });
    }

    addTask(title, important, urgent){
        let listIndex = this.state.list.length;
        if(title.trim()!==""){
            this.state.list.push({ id:(listIndex+1), title: title, complete: 0, important: important, urgent: urgent, index: listIndex});
            this.setState({ list: this.state.list});
        }
        this.showAddTask(false);
    }

    changeCategory(type){
        this.setState({ category: type });
    }

    changeStatus(e, item){
        const checked = e.target.checked ? 1 : 0;
        let itemIndex = this.state.list.indexOf(item);
        this.state.list[itemIndex].complete = checked;
        this.setState({ list: this.state.list });
    }

    render(){
        return(
            <React.Fragment>
                <HashRouter>
                    <Navbar />
                    <button className="btn-addlist" onClick={() => {this.showAddTask(true)}}>+</button>
                    <Route path="/" exact render={() => <All todos={this.state.list} changeStatus={this.changeStatus} />} />   
                    <Route path="/notstarted" render={() => <UnStarted todos={this.state.list} changeStatus={this.changeStatus} />}/>   
                    <Route path="/completed" render={() => <Completed todos={this.state.list} changeStatus={this.changeStatus} />}/>   
                </HashRouter>
                <AddPanel showAddPanel={this.state.showAddPanel} addTask={this.addTask} showAddTask={this.showAddTask} />
            </React.Fragment>
        );
    }
}

ReactDOM.render(
    <Root className="flex flex-jus-center flex-ali-center" />,
    document.querySelector('#root')
);

