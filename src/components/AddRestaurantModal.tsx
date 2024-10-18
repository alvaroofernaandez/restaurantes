import React from 'react';
import { RxCross1 } from 'react-icons/rx';

interface AddRestaurantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (newRestaurant: { name: string; web: string; yearFoundation: string }) => void;
  newRestaurant: { name: string; web: string; yearFoundation: string };
  setNewRestaurant: React.Dispatch<React.SetStateAction<{ name: string; web: string; yearFoundation: string }>>;
}

export function AddRestaurantModal({
  isOpen,
  onClose,
  onSubmit,
  newRestaurant,
  setNewRestaurant,
}: AddRestaurantModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-blue-950 rounded-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4 text-white">Añadir Restaurante</h2>
        <form onSubmit={(e) => { e.preventDefault(); onSubmit(newRestaurant); }} className="grid gap-4">
          <input
            type="text"
            placeholder="Nombre"
            value={newRestaurant.name}
            onChange={(e) => setNewRestaurant({ ...newRestaurant, name: e.target.value })}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Web"
            value={newRestaurant.web}
            onChange={(e) => setNewRestaurant({ ...newRestaurant, web: e.target.value })}
            className="border p-2 rounded"
            required
          />
          <input
            type="number"
            placeholder="Año de fundación"
            value={newRestaurant.yearFoundation}
            onChange={(e) => setNewRestaurant({ ...newRestaurant, yearFoundation: e.target.value })}
            className="border p-2 rounded"
            required
          />
          <button type="submit" className="bg-blue-600 hover:bg-blue-800 transition-all duration-300 text-white rounded p-2">Añadir</button>
        </form>
        <button
          className="mt-2 bg-red-600 text-white p-2 rounded hover:bg-red-800 transition-all duration-300"
          onClick={onClose}
        >
          <RxCross1 />
        </button>
      </div>
    </div>
  );
}
