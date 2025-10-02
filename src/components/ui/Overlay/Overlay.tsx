import './overlay.css'

export function Overlay() {
    return (
        <div className="overlay">
            <div className='overlay-content' onClick={e => e.stopPropagation()}>
                
            </div>
        </div>
    )
}