import React from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";

function App() {

    const tasks1 = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ]
    const tasks2 = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ]

    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasks1} />
            <Todolist title="Songs" tasks={tasks2} />
        </div>
    );
}

export default App;
