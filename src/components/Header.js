import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import Logo from "../assets/xenforo-logo (1).svg";

function Navbar() {
  const leftMenuOptions = [
    { name: 'Home', link: '/' },
    { name: 'Forums', link: '/' },
    { name: "What's New", link: '/' },
    { name: 'Media', link: '/' },
    { name: 'Resources', link: '/' },
    { name: 'Members', link: '/' },
  ];

  const rightMenuOptions = [
    { name: 'Login', link: '/login' },
    { name: 'Register', link: '/register' },
  ];

  return (
    <div className='flex justify-between items-center w-full'>
      <div className='flex space-x-8'>
        {leftMenuOptions.map((option, index) => (
          <a key={index} href={option.link} className='text-white hover:text-gray-300'>
            {option.name}
            {option.name !== 'Home' && (
            <FontAwesomeIcon icon={faCaretDown} className='mr-2 ml-2' />
            )}
          </a>
        ))}
      </div>
      <div className='flex ml-auto text-align-right space-x-4 bg-blue-900 text-white-800 p-2 rounded-md'>
        {rightMenuOptions.map((option, index) => (
          <a key={index} href={option.link} className='hover:text-gray-300 '>
            {option.name}
          </a>
        ))}
        
        <button className='flex gap-2 items-center text-white-800 hover:text-gray-300'>
          <FontAwesomeIcon icon={faSearch} className='mr-2' />
          Search
        </button>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className='bg-blue-800 p-4'>
      <div className='flex flex-col items-start'>
        <div className='logo mb-2'>
          <img src={Logo} alt="Logo" className='h-8' />
        </div>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
