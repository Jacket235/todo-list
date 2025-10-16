import { useContext } from 'react';
import ToDoListCreatorContext from '../../Context/ToDoListCreatorContext';
import './titleInput.css';

export function TitleInput() {
    const { title, setTitle } = useContext(ToDoListCreatorContext)!;

    return(
         <div className='title-input'>
            <span>Title of the list</span>
            <input type='text' value={title} onChange={e => setTitle(e.target.value)} />
        </div>
    );
}