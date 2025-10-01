import './overlay.css'
import { OverlayProps } from '../../../Types';

export function Overlay({ onClose, children }: OverlayProps) {
    return (
        <div className="overlay" onClick={onClose}>
            <div className='overlay-content'>
                {children}
            </div>
        </div>
    )
}