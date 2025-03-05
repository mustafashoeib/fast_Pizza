import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from './cartSlice';
import EmptyCart from './EmptyCart';

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: 'Mediterranean',
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: 'Vegetale',
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: 'Spinach and Mushroom',
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  // const cart = fakeCart;
  const userName = useSelector((state) => state.user.userName);
  const disaptch = useDispatch();

  function removeCart() {
    disaptch(clearCart());
  }

  if (cart.length === 0) return <EmptyCart />;

  return (
    <div className="px-3 py-4">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">
        Your cart, <span className="uppercase">{userName}</span>
      </h2>

      <ul className="mt-3 divide-y divide-stone-400 border-b border-b-stone-400">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-7 space-x-2">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>

        <Button onClick={removeCart} type="secondary">
          Clear Cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
