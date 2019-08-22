import List from "./index";

const Completed = (props) => {
    const filtertodos = props.todos.filter(item => item.complete === 1);
    const MainElement = List(filtertodos, props.changeStatus);
    return MainElement;
}

export default Completed;