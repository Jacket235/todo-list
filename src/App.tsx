import './App.css';
import { Header } from './layout/Header';
import { Main } from './layout/Main';
import { useState, useEffect } from 'react';
import { TodoListType } from './Types';

import { Overlay } from './components/ui/Overlay/Overlay';
import OverlayContext from './Context/OverlayContext';

function App() {
    const [todos, setTodos] = useState<TodoListType[]>([]);

    const [overlayVisible, setOverlayVisible] = useState<boolean>(false);
    const [overlayChild, setOverlayChild] = useState<React.ReactNode>(null);

    const handleOverlayOpen = (child: React.ReactNode) => {
        setOverlayVisible(true);
        setOverlayChild(child);
    }

    const handleOverlayClose = () => {
        setOverlayVisible(false);
        setOverlayChild(null);
    }

    const todos1 = [{
        id: crypto.randomUUID(),
        title: "Personal Tasks",
        tasks: {
            complete: [
                { id: crypto.randomUUID(), text: "Buy groceries: milk, bread, eggs, and coffee"},
                { id: crypto.randomUUID(), text: "Morning jog – 5km around the park"}
            ],
            inprogress: [
                { id: crypto.randomUUID(), text: "Finish React project and push to GitHub"}
                
            ],
            incomplete: [
                { id: crypto.randomUUID(), text: "Read 20 pages of 'Clean Code'"},
                { id: crypto.randomUUID(), text: "Call mom in the evening"}
            ]
        }},
    ];

    return (
        <div className="App">
            <OverlayContext.Provider value={{openOverlay: handleOverlayOpen, closeOverlay: handleOverlayClose}}>
                {overlayVisible && (
                    <Overlay onClose={handleOverlayClose}>
                        {overlayChild}
                    </Overlay>
                )}
                <Header />
                <Main todos={todos1} />
            </OverlayContext.Provider>
        </div>
    );
}

export default App;
