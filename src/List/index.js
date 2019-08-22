import React from "react";
import "./index.css";

const List = (todos, changeStatus) => {
    let todolist = todos.length ? 
    (todos.map(todo => {
        return  <div className={todo.complete?"row row-check":"row"} key={todo.id} complete={todo.complete} important={todo.important.toString()} urgent={todo.urgent.toString()}>
                    <label className="container">
                        <span className={todo.complete? "remove" : ""}>{todo.title}</span>
                        <input type="checkbox" onClick={(e) => changeStatus(e, todo)} defaultChecked={todo.complete}></input>
                        <span className="checkmark"></span>
                    </label>
                </div>;
    })) : (<div>empty list</div>);

    return <div className="main">{todolist}</div>;
}

export default List;