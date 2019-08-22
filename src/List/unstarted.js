import List from "./index";

const UnStarted = (props) => {
    const filtertodos = props.todos.filter(item => item.complete === 0);
    const MainElement = List(filtertodos, props.changeStatus);
    return MainElement;
}

export default UnStarted;