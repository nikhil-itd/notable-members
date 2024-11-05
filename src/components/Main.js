// Main.js
import React from 'react';
//import LeftMain from './Left_main'; 
import RightMain from './Right_main';
import { DataProvider } from './DataProvider';

function Main() {
    return (
        
        <div className='main flex w-full h-screen'>

            <div className='flex-none w-1/4'> 
            {/* <DataProvider><LeftMain /></DataProvider> */}
                
            </div>
            
            <DataProvider>
            <div className='flex-grow ml-2'> 
                <RightMain />
            </div>
        
            </DataProvider>
        </div>
    );
}

export default Main;
