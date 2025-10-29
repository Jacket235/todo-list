import '../styles/checkmark.css'
import { CheckmarkType } from '../../../Types';

export function Checkmark({ status }: CheckmarkType) {
    return(
        <div className={`todo-item-checkmark ${status}`}></div>
    );
}