import React from "react";
import {TrashIcon} from "@heroicons/react/solid";

function TaskItem({task, handleDelete}){
    return (
        <div className="flex bg-teal-100 p-2 border-2 border-grey-300 rounded-md">
                <div className="flex-1">{task}</div>
                <button onClick={() => handleDelete(task)} className="bg-blue-800 p-2 round-md"></button>
                <div className="bg-blue-800 p-2 rounded-md">
                    <TrashIcon height ={24} color="white"/>
                </div>
                </div>
    );
}
export default TaskItem;