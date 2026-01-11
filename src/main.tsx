import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import NavBar from './modules/core/navbar.tsx';
import Footer from './modules/core/footer.tsx';
import Error from './modules/core/error.tsx';
import HomePage from './modules/homepage/homepage.tsx';
import Buckets from './modules/buckets/buckets.tsx';
import Packets from './modules/packets/packets.tsx';
import Checkout from './modules/checkout/checkout.tsx';
import FAQ from './modules/faq/faq.tsx';

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <HomePage/>,
    errorElement: <Error/>
  },{
    path: '/buckets',
    element: <Buckets/>
  },{
    path: '/packets',
    element: <Packets/>
  },{
    path: '/checkout',
    element: <Checkout/>
  },{
    path: '/faq',
    element: <FAQ/>
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavBar />
    <RouterProvider router={router}/>
    <Footer/>
  </StrictMode>,
)
