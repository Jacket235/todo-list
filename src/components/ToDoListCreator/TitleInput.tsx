import './titleInput.css';

export function TitleInput() {
    return(
         <div className='title-input'>
            <span>Title of the list</span>
            <input type='text' />
        </div>
    );
}