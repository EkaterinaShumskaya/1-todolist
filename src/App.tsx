import React, {useState} from 'react';
import './App.css';
import Todolist, {TasksType} from "./Todolist";

export type FilterTaskType = 'all' | 'active' | 'completed'

function App() {

    const [filter, setFilter] = useState<FilterTaskType>('all')

    let [tasks, setTasks] = useState<TasksType[]>([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ])

    const removeTask = (taskId: number) => {
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
                      filterTasks={filterTasks}/>
        </div>
    );
}

export default App;
