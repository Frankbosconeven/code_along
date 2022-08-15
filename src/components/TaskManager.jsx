import React, {useState} from "react";
   import TaskItem from "./TaskItem";

function TaskManager(){
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (input === "") return;
        setTasks([input, ...tasks]);
        setInput("")
    }

    const handleDelete = idx => {
        const newTask = tasks.filter((task) => task !== idx );
        setTasks(newTask)
    }
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
                        <TaskItem task={task}
                         handleDelete={handleDelete}/>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default TaskManager;