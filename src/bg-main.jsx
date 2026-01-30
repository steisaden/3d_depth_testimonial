import React from 'react';
import ReactDOM from 'react-dom/client';
import Background from './Background';

const rootElement = document.getElementById('shader-root');
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <Background />
        </React.StrictMode>
    );
}
