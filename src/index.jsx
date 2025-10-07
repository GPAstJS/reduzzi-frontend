/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@material-tailwind/react';
import { AuthProvider } from './contexts/AuthContext.jsx';
import { ContatosProvider } from './contexts/ContatosContext.jsx';

import './index.css';

import { pages } from './pages/index.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <ThemeProvider>
            <AuthProvider>
                <ContatosProvider>
                    <RouterProvider router={pages} />
                </ContatosProvider>
            </AuthProvider>
        </ThemeProvider>
    </React.StrictMode>,
);
