import { useSelector } from 'react-redux';

function UserName() {
  const userName = useSelector((state) => state.user.userName);

  if (!userName) return null;
  return (
    <div>
      <p className="text-sm font-semibold md:block md:text-base">{userName}</p>
    </div>
  );
}

export default UserName;
