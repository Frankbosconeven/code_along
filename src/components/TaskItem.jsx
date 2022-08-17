import React from "react";
import {TrashIcon} from "@heroicons/react/solid";

function TaskItem({task, handleDelete}){
    return (
        <div className="flex items-center justify-between bg-teal-100 p-2 border-2 border-grey-300 rounded-md">

            <div className="flex space-x-2 ">
                <input type="checkbox" name="" id="" checked={task.completed} onChange={()=>{}}/>
                <div className="flex-1">{task.text}</div>
            </div>
                
                <button className="bg-blue-800 p-2 round-md" onClick={() => handleDelete(task.id)} >
                <TrashIcon height ={20} color="white"/>
                </button>
                </div>
    );
}
export default TaskItem;