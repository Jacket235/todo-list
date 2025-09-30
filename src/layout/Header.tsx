import './header.css';
import { CreateButton } from '../components/ui/CreateButton';

export function Header() {
    return (
        <div className="header">
            <CreateButton text='New todo list'/>
        </div>
    );
}