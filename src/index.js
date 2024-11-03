import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import App from './App';
import Homepage from './components/Homepage/Homepage.jsx'
import BookingPage from './components/BookingPage/BookingPage.jsx';
import ConfirmedBooking from './components/ConfirmedBooking/ConfirmedBooking.jsx';

const router = createBrowserRouter([
  {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/booking",
          element: <BookingPage />,
        },
        {
          path: "/confirmation-page",
          element: <ConfirmedBooking />,
        },
      ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);