import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className=" px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <div className="flex flex-col items-center mt-3">
        <img
          src="public/7612.jpg"
          alt="empty cart"
          className="w-full max-w-xs rounded-lg object-cover shadow-lg md:max-w-md lg:max-w-lg xl:max-w-xl"
        />
        <p className="mt-7 font-semibold">
          Your cart is still empty. Start adding some pizzas :)
        </p>
      </div>
    </div>
  );
}

export default EmptyCart;
