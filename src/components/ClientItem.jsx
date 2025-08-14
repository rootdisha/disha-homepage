// components/ClientItem.jsx
import React from 'react';

const ClientItem = ({ name, index }) => {
  return (
    <div className="client-item slide-up-element group cursor-pointer">
      <div className="bg-gray-900 hover:bg-gray-800 p-6 h-24 
                        flex items-center justify-center transition-all duration-300 
                        border-2 border-transparent hover:border-red-600">
        <div className="text-whitetwo font-bold text-sm group-hover:text-yellow-400 
                            transition-colors duration-300 text-center">
          {name}
        </div>
      </div>
    </div>
  );
};

export default ClientItem;