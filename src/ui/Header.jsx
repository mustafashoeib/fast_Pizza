import { Link } from 'react-router-dom';
import SearchOrder from './SearchOrder';
import UserName from '../features/user/UserName';

function Header() {
  return (
    <header className="flex items-center justify-between gap-6 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link
        to="/"
        className="text-sm font-semibold tracking-widest md:text-base"
      >
        Fast React Pizza co.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
