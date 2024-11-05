import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from './DataProvider.js';
import { useContext } from 'react';

const Card = ({ title, items, countKey }) => {
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleClick = () => {
    navigate('/nextpage', { state: { title, items, countKey } });
  };

  return (
    <div className='border border-gray-300 p-4 rectangular-lg  mb-5'>
      <div className='title'>
        <h3 className='text-blue-500 mb-2 cursor-pointer hover:underline'>{title}</h3>
      </div>
      {items.slice(0, 5).map(item => (
        <div
          className='body flex items-center mb-2 relative'
          key={item.login}
          onMouseEnter={() => setHoveredItem(item)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <img
            className='profile w-12 h-12 mr-2'
            src={item.avatar.message}
            alt={item.login}
          />
          <div className='name flex-grow mr-3'>{item.login}</div>
          <div className='points mr-3'>{item[countKey]}</div>

          {hoveredItem === item && (
            <div className='absolute left-16  bg-gray-300 border border-gray-300 shadow-lg p-4 rounded  z-50'>
              <div className='flex items-center mb-4'>
              <img
                className='w-16 h-16 mr-4 rounded-full'
                src={item.avatar.message}
                alt={item.login}
              />
              <h4 className='text-lg font-semibold text-brown-200'>{item.login}</h4>
              </div>
              <div className='flex  gap-4 '> 
              <div className='flex gap-4'>
                <div className='flex items-center gap-1 text-blue-600'>
                  <span>Messages:{item.countmessages}</span>
      
                </div>
                <div className='flex items-center gap-1 text-blue-600'>
                  <span>Reactions:{item.countkudos}</span>
                 
                </div>
                <div className='flex items-center gap-1 text-blue-600'>
                  <span>Solutions:{item.countsolutions}</span>
                 
                </div>
                <div className='flex items-center gap-1 text-blue-600'>
                  <span>Albums:{item.countalbums}</span>
                  
                </div>
              </div>
              </div>
            </div>
          )}
        </div>
      ))}
      <div className='see-more'>
        <button
          className='bg-gray-200 border border-gray-300 px-4 py-2 w-full rounded cursor-pointer hover:bg-gray-300'
          onClick={handleClick}
        >
          See more
        </button>
      </div>
    </div>
  );
};





const RightMain = () => {
  const data = useContext(DataContext);
  console.log("data", data);

  return (
    <div className='RightMain' style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {data && data.length > 0 &&
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-1'>
          <Card title="Most messages" items={data[0]} countKey="countmessages"/>
          <Card title="Highest reaction score" items={data[1]} countKey="countkudos" />
          <Card title="Most solutions Authored" items={data[2]} countKey="countsolutions" />
          <Card title="Bonus points" items={data[3]} countKey="countalbums" />
          <Card title="Most albums" items={data[4]} countKey="countalbums"/>
          <Card title="Most Resources" items={data[5]} countKey="countkudos" />
          <Card title="Most Media items" items={data[6]}  countKey="countmessages"/>
          <Card title="Join date" items={data[7]} countKey="countjoindate" />
          <Card title="Staff Members" items={data[8]} />
        </div>
      }
    </div>
  );
};

export default RightMain;
