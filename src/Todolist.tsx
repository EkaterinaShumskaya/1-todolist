import React from 'react';
import {FilterTaskType} from "./App";

export type PropsType={
    title:string,
    tasks:TasksType[],
    removeTask:(taskId:number)=>void,
    filterTasks:(value:FilterTaskType)=>void
}

export type TasksType={
    id:number,
    title:string,
    isDone:boolean
}

export const Todolist = (props:PropsType) => {
    return (
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {props.tasks.map((el=>{
                        return <div key={el.id}>
                            <li><input type="checkbox" checked={el.isDone}/> <span>{el.title}</span>
                            <button onClick={()=>props.removeTask(el.id)}>x</button>
                            </li>
                        </div>
                    }))}
                </ul>
                <div>
                    <button onClick={()=>{props.filterTasks('all')}}>All</button>
                    <button onClick={()=>{props.filterTasks('active')}}>Active</button>
                    <button onClick={()=>{props.filterTasks('completed')}}>Completed</button>
                </div>
            </div>

    );
};

export default Todolist;