import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from './DataProvider.js';

const Card = ({ title, items }) => {
  const navigate = useNavigate();
  const data = useContext(DataContext);

  const handleClick = (index) => {
    const titles = [
      'Most messages', 'Highest reaction score', 'Most solutions Authored',
      'Bonus points', 'Most albums', 'Most Resources',
      'Most Media items', 'Join date', 'Staff Members'
    ];
    const countKey = [
      'countmessages', 'countkudos', 'countsolutions',
      'countalbums', 'countkudos', 'countmessages',
      'countjoindate'
    ]
    navigate('/nextpage', { state: { title: titles[index], items: data[index],countKey:countKey[index]} });
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-4">
      <div className="px-6 py-4">
      <div className="font-bold text-xl text-black mb-2"><a href="/members">Notable Members</a></div>
        <div className="font-bold text-xl mb-2"><a href="/members">Members</a></div>
        <hr className="my-2 border-gray-300" style={{ borderTopWidth: '1px' }} />
        
        <div className="block text-blue-800 flex-col hover:text-gray-300 mb-2">Overview</div>
        <div className="block text-blue-800 flex-col hover:text-gray-300 mb-2">
          <button onClick={() => handleClick(0)}>Most messages</button>
        </div>
        <div className="block text-blue-800 flex-col hover:text-gray-300 mb-2">
          <button onClick={() => handleClick(1)}>Highest reaction score</button>
        </div>
        <div className="block text-blue-800 flex-col hover:text-gray-300 mb-2">
          <button onClick={() => handleClick(2)}>Most solutions Authored</button>
        </div>
        <div className="block text-blue-800 flex-col hover:text-gray-300 mb-2">
          <button onClick={() => handleClick(3)}>Bonus points</button>
        </div>
        <div className="block text-blue-800 flex-col hover:text-gray-300 mb-2">
          <button onClick={() => handleClick(4)}>Most albums</button>
        </div>
        <div className="block text-blue-800 flex-col hover:text-gray-300 mb-2">
          <button onClick={() => handleClick(5)}>Most Resources</button>
        </div>
        <div className="block text-blue-800 flex-col hover:text-gray-300 mb-2">
          <button onClick={() => handleClick(6)}>Most Media items</button>
        </div>
        <div className="block text-blue-800 flex-col hover:text-gray-300 mb-2">
          <button onClick={() => handleClick(7)}>Join date</button>
        </div>
        <div className="block text-blue-800 flex-col hover:text-gray-300 mb-2">
          <button onClick={() => handleClick(8)}>Staff members</button>
        </div>
      </div>
    </div>
  );
};

const SearchBox = () => {
  return (
    <div className="flex items-center bg-gray-200 rounded-md p-2 mb-4">
      <input
        type="text"
        placeholder="Name"
        className="w-full px-3 py-1 bg-gray-200 rounded-md focus:outline-none"
      />
      <button className="ml-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
        Search
      </button>
    </div>
  );
};

const Card2 = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Find a member</div>
        <SearchBox />
      </div>
    </div>
  );
};

function LeftMain() {
  return (
    <div className="side_bar w-full text-blue-800 whitespace-nowrap ml-2">
      <Card />
      <Card2 />
    </div>
  );
}

export default LeftMain;
