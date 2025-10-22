import './header.css';
import { CreateButton } from '../components/Header/CreateButton';

export function Header() {
    return (
        <div className="header">
            <CreateButton />
        </div>
    );
}