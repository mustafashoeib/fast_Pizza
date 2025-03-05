import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'text-sm inline-block rounded-full bg-yellow-400  font-semibold uppercase -tracking-wide text-stone-800 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ';
  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' px-4 py-2 text-sm md:px-5 md:py-2.5',
    round: base + ' px-2.5 py-1 text-sm md:px-3.5 md:py-2 text-sm',
    secondary:
      'text-sm px-4 py-2.5 text-sm md:px-6 md:py-3.5 inline-block rounded-full border-2 border-stone-300   font-semibold uppercase -tracking-wide hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800 text-stone-400 focus:bg-stone-200 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed duration-300',
  };
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
