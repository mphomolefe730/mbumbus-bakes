import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import NavBar from './modules/core/navbar.tsx';
import Footer from './modules/core/footer.tsx';
import HomePage from './modules/homepage/homepage.tsx';
import Buckets from './modules/buckets/buckets.tsx';


const router = createBrowserRouter([
  { 
    path: '/', 
    element: <HomePage/>,
    errorElement: <div><p>404 NOT FOUND</p></div>
  },{
    path: '/buckets',
    element: <Buckets/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavBar />
    <RouterProvider router={router}/>
    <Footer/>
  </StrictMode>,
)
