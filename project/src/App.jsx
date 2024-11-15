import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TabSelector from './components/TabSelector';
import SearchBar from './components/SearchBar';
import ItemCard from './components/ItemCard';
import AddItemModal from './components/AddItemModal';
import { useItems } from './hooks/useItems';

function App() {
  const { items, handleStatusChange, handleAddItem } = useItems();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('found');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = items.filter(item => 
    (activeTab === 'pending' ? item.status === 'pending' : item.type === activeTab) &&
    (item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     item.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        activeTab={activeTab}
        onAddClick={() => setIsModalOpen(true)}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col space-y-4">
          <TabSelector 
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />

          <SearchBar 
            value={searchQuery}
            onChange={setSearchQuery}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <ItemCard
                key={item.id}
                item={item}
                onStatusChange={handleStatusChange}
              />
            ))}
          </div>
        </div>
      </main>

      <AddItemModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddItem}
        type={activeTab}
      />
    </div>
  );
}

export default App;
