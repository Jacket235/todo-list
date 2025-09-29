import './header.css';
import { Button } from '../components/ui/AddButton';

export function Header() {
    return (
        <div className="header">
            <Button text='+ New todo list'/>
        </div>
    );
}