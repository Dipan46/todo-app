import React, { useState } from "react";
import "./App.css";
import Li from "./assets/Li";
import InputArea from "./assets/InputArea";
import Heading from "./assets/Heading";

function App() {
    const [todo, setTodo] = useState("");
    const [text, setText] = useState([]);

    function handleTodo(e) {
        setTodo(e.target.value);
    }

    function handleClick(e) {
        e.preventDefault();
        if (todo.trim() !== "") {
            setText((prev) => [...prev, todo]);
            setTodo("");
        }
    }

    function handleDelete(id) {
        setText((prev) => {
            return prev.filter((value, index) => {
                return index != id;
            });
        });
    }

    return (
        <div className="container">
            <Heading />
            <InputArea
                handleTodo={handleTodo}
                handleClick={handleClick}
                todo={todo}
            />
            <div>
                <ul>
                    {text.map((item, index) => (
                        <Li
                            key={index}
                            id={index}
                            todo={item}
                            onDelete={handleDelete}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
