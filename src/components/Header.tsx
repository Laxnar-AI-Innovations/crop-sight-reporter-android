
import React from 'react';
import { Leaf } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-cropGreen p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Leaf className="h-6 w-6 text-white" />
          <h1 className="text-xl font-bold text-white">Crop Doctor</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
