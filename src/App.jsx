import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './ui/Home';
import Menu, { Loader as menuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import Order, { Loader as orderLoader } from './features/order/Order';
import CreateOrder, {
  action as createOrderAction,
} from './features/order/CreateOrder';
import AppLayOut from './ui/AppLayOut';
import Error from './ui/Error';
import { useEffect, useState } from 'react';

const router = createBrowserRouter([
  {
    element: <AppLayOut />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        /// fetch data with loader routing
        loader: menuLoader,
        //// error handling
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        /**
         * Renders the CreateOrder component, which is responsible for displaying the UI and handling the creation of a new order.
         * This component is part of the order feature and is accessed via the "/order/new" route.
         */
        /**
         * Renders the CreateOrder component, which is responsible for displaying the UI and handling the creation of a new order.
         * This component is part of the order feature and is accessed via the "/order/new" route.
         */
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
