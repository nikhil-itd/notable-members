import React from 'react';

function Navbar2() {
  const MenuOptions = [
    { name: 'Current visitors', link: '/current_visitors' },
    { name: 'New profile posts', link: '/new_profile_posts' },
    { name: 'Search profile posts', link: '/search_profile_posts' },
  ];

  return (
    <div className='w-full bg-white'>
      <div className='px-1 py-0.5 border-b border-gray-300'>
        {MenuOptions.map((option, index) => (
          <a key={index} href={option.link} className='text-sm text-blue-800 hover:underline whitespace-nowrap ml-2'>
            {option.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar2;
