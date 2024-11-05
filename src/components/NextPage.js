import React from 'react';
import { useLocation } from 'react-router-dom';
//import { DataContext } from './DataProvider';

const NextPage = () => {
  const location = useLocation();
 //const { data } = useContext(DataContext);
  const { title, items, countKey } = location.state || {};
  console.log('items',items);


  return (
    <div className="p-4 max-w-4xl mx-auto mt-10">
      <div className="border border-gray-300 rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-semibold mb-4">{title}</h1>
        { items.map((item) => (
          <div  className="mb-6">
            <div className="flex items-center mb-4">
              <img className="w-12 h-12 rounded-full mr-4" src={item.avatar?.message} alt={item.login} />
              <div className="text-lg font-semibold">{item.login}</div>

              <div className="ml-auto">{item[countKey]}</div>

            </div>
            <div className="ml-16">
              <div className="flex gap-4 mb-2">
                <div className="text-gray-700">Messages: {item.countmessages}</div>
                <div className="text-gray-700">Reactions: {item.countkudos}</div>
                <div className="text-gray-700">Solutions: {item.countsolutions}</div>
                <div className="text-gray-700">Albums: {item.countalbums}</div>
              </div>
              <hr className="mb-2 border-gray-300 w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NextPage;
