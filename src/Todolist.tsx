import React, {useState, KeyboardEvent, ChangeEvent} from 'react';
import {FilterTaskType} from "./App";

export type PropsType = {
    title: string,
    tasks: TasksType[],
    removeTask: (taskId: string) => void,
    filterTasks: (value: FilterTaskType) => void,
    addTasks: (title: string) => void
}

export type TasksType = {
    id: string,
    title: string,
    isDone: boolean
}

export const Todolist = (props: PropsType) => {
    const [title, setTitle] = useState('')

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.addTasks(e.currentTarget.value)
            setTitle('')
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={title} onChange={onChangeHandler}
                       onKeyDown={onKeyDownHandler}
                />
                <button onClick={() => {
                    props.addTasks(title)
                    setTitle('')
                }}>+
                </button>
            </div>
            <ul>
                {props.tasks.map((el => {
                    return <div key={el.id}>
                        <li><input type="checkbox" checked={el.isDone}/> <span>{el.title}</span>
                            <button onClick={() => props.removeTask(el.id)}>x</button>
                        </li>
                    </div>
                }))}
            </ul>
            <div>
                <button onClick={() => {
                    props.filterTasks('all')
                }}>All
                </button>
                <button onClick={() => {
                    props.filterTasks('active')
                }}>Active
                </button>
                <button onClick={() => {
                    props.filterTasks('completed')
                }}>Completed
                </button>
            </div>
        </div>

    );
};

export default Todolist;