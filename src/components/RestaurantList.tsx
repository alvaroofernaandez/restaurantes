import { RestaurantCard } from './RestaurantCard';

interface Restaurant {
  id: number;
  name: string;
  web: string;
  yearFoundation: number;
}

interface RestaurantListProps {
  restaurants: Restaurant[];
  onDelete: (id: number) => void;
}

export function RestaurantList({ restaurants, onDelete }: RestaurantListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {restaurants.map(restaurant => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} onDelete={onDelete} />
      ))}
    </div>
  );
}
