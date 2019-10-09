import List from "./index";

const All = (props) => {
    const MainElement = List(props.todos, props.changeStatus);
    return MainElement;
}

export default All;