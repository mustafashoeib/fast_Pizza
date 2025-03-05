import { useDispatch } from 'react-redux';
import { formatCurrency } from '../../utli/helpers';
import { deleteItem } from './cartSlice';
import DeleteItemButton from './DeleteItemButton';
import UpdateQuantity from './UpdateQuantity';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="justify-between py-3 sm:flex sm:items-center">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <div className="flex items-center gap-2">
          <UpdateQuantity pizzaId={pizzaId} />
          <DeleteItemButton pizzaId={pizzaId} />
        </div>
      </div>
    </li>
  );
}

export default CartItem;
