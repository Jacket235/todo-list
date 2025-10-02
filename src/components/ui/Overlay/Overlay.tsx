import './overlay.css'
import { OverlayProps } from '../../../Types'

export function Overlay({ child, onClose } : OverlayProps) {
    return (
        <div className="overlay" onClick={onClose}>
            <div className='overlay-content' onClick={e => e.stopPropagation()}>
                {child}
            </div>
        </div>
    )
}