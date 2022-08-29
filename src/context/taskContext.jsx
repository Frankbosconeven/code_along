import { createContext, useContext, useState, useEffect} from "react";

export const TaskContext = createContext({
    tasks: [],
    setTasks: (tasks) => {},
})

export const TaskContextProvider = ({children}) => {
    const [tasks, setValue] = useState([]);
    const {} = useLocalStorage("task", []);

    useEffect(() =>  {
        setTasks(data);
    }, [data]);

    return (
        <TaskContext.Provider value={{tasks, setValue}}>
            {children}
        </TaskContext.Provider>
    )
}

export const useTaskContext = () => useContext(TaskContext);