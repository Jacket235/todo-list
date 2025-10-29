import '../styles/title-input.css'
import { useTodoListCreatorContext } from '../../../hooks/useTodoListCreatorContext';

export function TitleInput() {
    const { title, setTitle } = useTodoListCreatorContext();

    return(
         <div className='title-input'>
            <span>Title of the list</span>
            <input type='text' value={title} onChange={e => setTitle(e.target.value)} />
        </div>
    );
}