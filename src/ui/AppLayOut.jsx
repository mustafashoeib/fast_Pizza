import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loading from './Loading';
import { useEffect, useState } from 'react';

function AppLayOut() {
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(function () {
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  const navigation = useNavigation();
  // console.log(navigation);
  const isNavigationLoading = navigation.state === 'loading';

  const isLoading = isNavigationLoading || isInitialLoading;
  return (
    <div className="grid h-dvh grid-rows-[auto_1fr_auto]">
      {isLoading && <Loading />}
      <Header />

      <main className='pb-20'>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayOut;
