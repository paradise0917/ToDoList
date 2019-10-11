import React, { useState } from "react";
import "./index.css";

const AddPanel = ({addTask, showAddPanel, showAddTask}) => {

    const [title, setTitle] = useState("");
    const [important, setImportant] = useState(false);
    const [urgent, setUrgent] = useState(false);
    const clearState = () => {
        setTitle("");
        setImportant(false);
        setUrgent(false);
    };

    const panel = showAddPanel ? (<div className="add-mask flex flex-ali-center flex-jus-center">
        <div className="panel flex flex-flow-col flex-ali-center">
            <div className="title">Add a Task</div>
            <input type="text" 
                placeholder="Write task here..." 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}>
            </input>
            <div className="option flex">
                {/* Comming Soon Feature */}
                {/* <div>
                    <input type="checkbox" 
                        id="important" 
                        name="important" 
                        value="true" 
                        onClick={(e) => setImportant(e.target.checked)}/>
                    <label htmlFor="important">Important</label>
                </div>
                <div>
                    <input type="checkbox" 
                        id="urgent" 
                        name="urgent" 
                        value="true" 
                        onClick={(e) => setUrgent(e.target.checked)}/>
                    <label htmlFor="urgent">Urgent</label>
                </div> */}
            </div>
            <div className="btn-list">
                <button className="sec" onClick={()=> {showAddTask(false)}}>Cancel</button>
                <button className="first" onClick={() => {addTask(title, important, urgent);clearState();}}>Add</button>
            </div>      
        </div>
    </div>):(<div></div>);
    return <div>{panel}</div>;
}

export default AddPanel;