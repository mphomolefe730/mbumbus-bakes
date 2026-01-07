import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import NavBar from './modules/core/navbar.tsx';
import HomePage from './modules/homepage/homepage.tsx';


const router = createBrowserRouter([
  { 
    path: '/', 
    element: <HomePage/>,
    errorElement: <div><p>404 NOT FOUND</p></div>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavBar />
    <RouterProvider router={router}/>
  </StrictMode>,
)
