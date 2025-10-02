import NewToDoListContext from '../../Context/NewToDoListContext';
import { Task } from '../../Types';
import { TitleInput } from './TitleInput'
import { ToDoListAction } from './ToDoListAction';
import './toDoListCreatorContent.css'
import { ToDoListTasks } from './ToDoListTasks'
import { useState } from 'react';

export function ToDoListCreatorContent() {
    return(
        <div className="popup-content">
            <TitleInput />
            <ToDoListTasks />
            <ToDoListAction />
        </div>
    );
}