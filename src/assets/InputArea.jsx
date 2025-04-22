function InputArea(props) {
    return (
        <div className="form">
            <input onChange={props.handleTodo} type="text" value={props.todo} />
            <button onClick={props.handleClick}>
                <span>Add</span>
            </button>
        </div>
    );
}

export default InputArea;