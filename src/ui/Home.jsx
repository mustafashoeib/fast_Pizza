import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const userName = useSelector((state) => state.user.userName);
  return (
    <div className="flex flex-col items-center justify-center overflow-auto py-3 text-center">
      <h1 className="m-8 text-sm font-bold md:text-base">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {!userName ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          continue ordering , {userName}
        </Button>
      )}
    </div>
  );
}

export default Home;
