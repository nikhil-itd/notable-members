import React from 'react';
import Header from './components/Header';
import Navbar2 from './components/Navbar2';
import Main from './components/Main';
import NextPage from './components/NextPage';
import { createMemoryRouter, Outlet, RouterProvider, } from 'react-router-dom';
import { DataProvider } from './components/DataProvider';
import RightMain from './components/Right_main';
import LeftMain from './components/Left_main';
import Footer from './components/Footer';



const router = createMemoryRouter([

  { 
    path: "/", 
    element:(
        <div className='flex  '>
        <DataProvider>
        <div className='w-2/12'>
          <LeftMain/>

        </div>
        </DataProvider>


      <div className='w-full '>

          <Outlet />


      </div>
        </div>
      )
    ,
    children: [
      {
        path: "/",
        element: <Main />,
      },
    
      {
        path: "/nextpage",
        element: <NextPage />,
      },
      {
        path: "/RightMain",
        element: <RightMain />,
    
      }
    ]
  }

]);

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Header />
        <Navbar2 />
        <RouterProvider


          router={router} />
          <Footer/>

      </div>
    </DataProvider>
  );
}

export default App;
