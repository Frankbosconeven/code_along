import React, {useState, useEffect} from "react";

import {v4 as uuid } from "uuid";

import TaskItem from "./TaskItem";
   
   

function TaskManager(){
    const [tasks, setTasks] = useState(() => {
        const tasks = localStorage.getItem("tasks");
        if (!tasks) return [];
            return JSON.parse(tasks);
        
    });
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input === "") return;

        const newTask = {
            id: uuid(),
            text: input,
            completed: false,
        };

        setTasks([newTask, ...tasks]);
        setInput("");
    };

    const handleDelete = (id) => {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks)
    }
    useEffect(()=> {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks]);
//Map run through the items in the arrays, map retruns array but loop
    return (
        <div className="h-screen bg-blue-600 flex justify-center items-center">
            <div className="max-w-xl bg-white rounded-xl px-5 py-10 max-h-96">
                <form  className="space-x-4 w-[30rem] mb-10 flex" onSubmit={handleSubmit}>
                    <input type="text" onChange={(e) => setInput(e.target.value)} value={input}  className="border-2 w-10/12 border-blue-400 p-2 rounded-md outline-none" />
                    
                    <button type="submit" disabled={input === ""}  className=" bg-blue-600 hover:bg-green text-lg py-2 px-5 rounded-md">
                        Add
                        </button>
                </form>
                <div className="space-y-2 overflow-y-auto h-56">   

                        {tasks.map((task) =>( 
                        <TaskItem key={task.id} task={task}
                         handleDelete={handleDelete}/>
                        ))};
                </div>
            </div>
        </div>
    );
}

export default TaskManager;