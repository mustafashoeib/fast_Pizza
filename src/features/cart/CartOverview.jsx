import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalPizzaPrice, getTotalPizzaQuantity } from './cartSlice';
import { formatCurrency } from '../../utli/helpers';

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalPizzaQuantity);
  const totalCartPrice = useSelector(getTotalPizzaPrice);

  if (!totalCartPrice) return null;
  return (
    <div className="relative bottom-0 flex w-full items-center justify-between bg-stone-900 px-4 py-4 text-sm uppercase text-white sm:fixed sm:p-6 md:text-base">
      <p className="space-x-4 text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
