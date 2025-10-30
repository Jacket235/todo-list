import '../styles/title-input.css'
import { TitleInputType } from '../../../Types';

export function TitleInput({ title, setTitle }: TitleInputType) {
    return(
         <div className='title-input'>
            <span>Title</span>
            <input type='text' value={title} onChange={e => setTitle(e.target.value)} />
        </div>
    );
}