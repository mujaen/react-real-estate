import React from 'react';
import {createRoot} from 'react-dom/client';

const rootNode = document.getElementById('app');

function App({}) {
    return (
        <>
            12
        </>
    )
}

const root = createRoot(rootNode);
root.render(<App />);
