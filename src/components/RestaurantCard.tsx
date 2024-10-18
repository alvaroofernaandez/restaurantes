import { motion } from 'framer-motion';
import { FaTrash } from 'react-icons/fa';

interface Restaurant {
  id: number;
  name: string;
  web: string;
  yearFoundation: number;
}

interface RestaurantCardProps {
  restaurant: Restaurant;
  onDelete: (id: number) => void;
}

export function RestaurantCard({ restaurant, onDelete }: RestaurantCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-blue-900 mb-6 relative"
    >
      <div className="px-6 py-4">
        <motion.h2 className="font-bold text-xl mb-2 text-blue-200">
          {restaurant.name}
        </motion.h2>
        <motion.p className="text-blue-300 text-base mb-2">
          Web: {restaurant.web}
        </motion.p>
        <motion.p className="text-blue-300 text-base">
          Año de fundación: {restaurant.yearFoundation}
        </motion.p>
        <button
          onClick={() => onDelete(restaurant.id)}
          className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded hover:bg-red-800 transition-all duration-300"
          style={{ width: '36px', height: '36px' }}
          aria-label="Eliminar restaurante"
        >
          <FaTrash className="size-5" />
        </button>
      </div>
    </motion.div>
  );
}
