import React from 'react';
import { Package, ShieldQuestion, PlusCircle } from 'lucide-react';

const Navbar = ({ activeTab, onAddClick }) => (
  <nav className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center">
          {activeTab === 'found' ? 
            <Package className="h-6 w-6 text-indigo-600" /> : 
            <ShieldQuestion className="h-6 w-6 text-indigo-600" />
          }
          <h1 className="ml-2 text-xl font-semibold text-gray-900">Lost & Found Portal</h1>
        </div>
        <button
          onClick={onAddClick}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          <PlusCircle className="h-5 w-5 mr-2" />
          Report Item
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;