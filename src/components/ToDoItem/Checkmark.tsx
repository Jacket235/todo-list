import { CheckmarkType } from '../../Types';
import './checkmark.css'

export function Checkmark({ status }: CheckmarkType) {
    return(
        <div className={`todo-item-checkmark ${status}`}></div>
    );
}