import './header.css';
import { CreateButton } from '../components/Header/components/CreateButton';

export function Header() {
    return (
        <div className="header">
            <CreateButton />
        </div>
    );
}