import { useState, useEffect } from 'react';
import { AddRestaurantModal } from './AddRestaurantModal';
import { DeleteConfirmationModal } from './DeleteConfirmationModal';
import { RestaurantList } from './RestaurantList';
import { FaPlus } from 'react-icons/fa';

interface Restaurant {
  id: number;
  name: string;
  web: string;
  yearFoundation: number;
}

export function Restaurantes() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newRestaurant, setNewRestaurant] = useState({
    name: '',
    web: '',
    yearFoundation: '',
  });
  const [restaurantToDelete, setRestaurantToDelete] = useState<number | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/restaurantes/');
        if (!response.ok) {
          throw new Error('Failed to fetch restaurants');
        }
        const data = await response.json();
        setRestaurants(data.restaurantes);
      } catch (err) {
        setError('Error al cargar los restaurantes. Por favor, intente de nuevo más tarde.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  const handleSubmit = async (newRestaurant: { name: string; web: string; yearFoundation: string }) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/restaurantes/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: newRestaurant.name,
          web: newRestaurant.web,
          yearFoundation: parseInt(newRestaurant.yearFoundation, 10),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add restaurant');
      }

      const addedRestaurant = await response.json();
      setRestaurants((prev) => [...prev, addedRestaurant]);
      setNewRestaurant({ name: '', web: '', yearFoundation: '' });
      setIsModalOpen(false);
    } catch (error) {
      setError('Error al añadir el restaurante. Por favor, inténtelo de nuevo.');
    }
  };

  const handleDelete = async () => {
    if (restaurantToDelete !== null) {
      try {
        const response = await fetch(`http://localhost:8000/api/restaurantes/${restaurantToDelete}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error('Error al eliminar el restaurante');
        }

        setRestaurants((prev) => prev.filter((restaurant) => restaurant.id !== restaurantToDelete));
        setIsDeleteModalOpen(false);
      } catch (error) {
        setError('Error al eliminar el restaurante. Por favor, inténtelo de nuevo.');
      }
    }
  };

  return (
    <div className="min-h-screen px-4 py-12 bg-gray-900 sm:px-6 lg:px-8">
      <div className="flex items-center justify-center mb-12">
        <h1 className="text-3xl font-bold text-center text-blue-200">
          Restaurantes
        </h1>
        <button
          className="p-2 ml-4 text-white transition-all duration-300 bg-blue-600 rounded-full hover:bg-blue-800"
          onClick={() => setIsModalOpen(true)}
        >
          <FaPlus className="size-3" />
        </button>
      </div>
      <div className="mx-auto max-w-7xl">
        {isLoading ? (
          <div className="text-xl text-center text-blue-200">
            Cargando restaurantes...
          </div>
        ) : error ? (
          <div className="text-xl text-center text-red-500">
            {error}
          </div>
        ) : (
          <RestaurantList restaurants={restaurants} onDelete={(id) => {
            setRestaurantToDelete(id);
            setIsDeleteModalOpen(true);
          }} />
        )}
      </div>

      <AddRestaurantModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        newRestaurant={newRestaurant}
        setNewRestaurant={setNewRestaurant}
      />

      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onDelete={handleDelete}
      />
    </div>
  );
}
