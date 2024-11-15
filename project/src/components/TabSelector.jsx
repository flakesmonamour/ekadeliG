import React from 'react';

const TabSelector = ({ activeTab, onTabChange }) => (
  <div className="flex space-x-4">
    <button
      onClick={() => onTabChange('found')}
      className={`px-4 py-2 rounded-md ${
        activeTab === 'found'
          ? 'bg-indigo-600 text-white'
          : 'bg-white text-gray-700 hover:bg-gray-50'
      }`}
    >
      Found Items
    </button>
    <button
      onClick={() => onTabChange('lost')}
      className={`px-4 py-2 rounded-md ${
        activeTab === 'lost'
          ? 'bg-indigo-600 text-white'
          : 'bg-white text-gray-700 hover:bg-gray-50'
      }`}
    >
      Lost Items
    </button>
    <button
      onClick={() => onTabChange('pending')}
      className={`px-4 py-2 rounded-md ${
        activeTab === 'pending'
          ? 'bg-indigo-600 text-white'
          : 'bg-white text-gray-700 hover:bg-gray-50'
      }`}
    >
      Pending Items
    </button>
  </div>
);

export default TabSelector;