import React from 'react';
import { CheckCircle2, XCircle, MapPin, Calendar } from 'lucide-react';

const ItemCard = ({ item, onStatusChange }) => {
  // Apply specific styling for certain item titles
  const isHighlightedItem = item.title === 'Laptop' || item.title === 'iPhone 12 Pro';

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] ${
      isHighlightedItem ? 'border border-indigo-600' : ''
    }`}>
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className={`text-lg font-semibold ${
            isHighlightedItem ? 'text-indigo-600' : 'text-gray-900'
          }`}>
            {item.title}
          </h3>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            item.status === 'approved' ? 'bg-green-100 text-green-800' :
            item.status === 'declined' ? 'bg-red-100 text-red-800' :
            'bg-yellow-100 text-yellow-800'
          }`}>
            {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
          </span>
        </div>
        
        <p className="mt-2 text-gray-600">{item.description}</p>
        
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-gray-500">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm">{item.location}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="text-sm">{new Date(item.date).toLocaleDateString()}</span>
          </div>
        </div>

        {item.status === 'pending' && (
          <div className="mt-4 flex space-x-2">
            <button
              onClick={() => onStatusChange(item.id, 'approved')}
              className="flex-1 flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              <CheckCircle2 className="h-4 w-4 mr-2" />
              Approve
            </button>
            <button
              onClick={() => onStatusChange(item.id, 'declined')}
              className="flex-1 flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
            >
              <XCircle className="h-4 w-4 mr-2" />
              Decline
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
