import List from "./index";

const All = (props) => {
    console.log(props);
    const MainElement = List(props.todos, props.changeStatus);
    return MainElement;
}

export default All;