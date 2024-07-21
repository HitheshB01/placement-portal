import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import CompanyListPage from './components/CompanyListPage';
import CompanyAppliedListPage from './components/CompanyAppliedListPage';
import Footer from './components/Footer';
import Profile from './components/Profile';

// Define routes
const router = createBrowserRouter([
  {path:'/',
    element:<Navbar/>,
    children:[
      {
        path: '/',
        element: <Profile/>,
      },
      {
        path: '/company-list',
        element: <CompanyListPage />,
      },
      {
        path: '/applied-list',
        element: <CompanyAppliedListPage />,
      },

    ]

  },
  
]);

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Navbar /> */}
      <main className="flex-grow">
        <RouterProvider router={router} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
