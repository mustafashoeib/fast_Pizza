import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="bg-yellow-100b w-28 rounded-full px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-500 focus:w-32 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-opacity-50 sm:w-72 sm:focus:w-80 md:text-start md:text-base"
          placeholder="SearchOrder"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchOrder;
