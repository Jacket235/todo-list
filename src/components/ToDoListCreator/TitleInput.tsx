import { useContext } from 'react';
import NewToDoListContext from '../../Context/NewToDoListContext';
import './titleInput.css';

export function TitleInput() {
    const { title, setTitle } = useContext(NewToDoListContext)!;

    return(
         <div className='title-input'>
            <span>Title of the list</span>
            <input type='text' value={title} onChange={e => setTitle(e.target.value)} />
        </div>
    );
}