import { useState } from "react";

function Li(props) {
    const [isDone, setIsDone] = useState(false);

    function handleClick() {
        setIsDone((prev) => !prev);
    }

    return (
        <div className="itm">
            <li
                onClick={handleClick}
                style={{
                    textDecoration: isDone ? "line-through" : "none",
                    cursor: "pointer",
                }}
            >
                {props.todo}
            </li>
            <button
                onClick={() => {
                    props.onDelete(props.id);
                }}
            >
                👉🏻🗑️
            </button>
        </div>
    );
}

export default Li;
