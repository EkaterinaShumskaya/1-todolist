import React, {useState} from 'react';
import './App.css';
import Todolist, {TasksType} from "./Todolist";
import {v1} from "uuid";

export type FilterTaskType = 'all' | 'active' | 'completed'

function App() {

    const [filter, setFilter] = useState<FilterTaskType>('all')

    let [tasks, setTasks] = useState<TasksType[]>([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false}
    ])

    const addTasks=(title:string)=>{
        const newTask= {id: v1(), title: title, isDone: true}
        setTasks([...tasks,newTask])
    }
    const removeTask = (taskId: string) => {
        setTasks(tasks.filter((el) => el.id !== taskId))
    }
let task=tasks
    if (filter === 'active') {
        tasks=tasks.filter((el) => el.isDone === false)
    }
    if (filter === 'completed') {
        tasks=tasks.filter((el) => el.isDone === true)
    }

    const filterTasks = (value: FilterTaskType) => {
        setFilter(value)

    }

    return (
        <div className="App">
            <Todolist tasks={tasks} title={'What to learn'} removeTask={removeTask}
                      filterTasks={filterTasks} addTasks={addTasks}/>
        </div>
    );
}

export default App;
