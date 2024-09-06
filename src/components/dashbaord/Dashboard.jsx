import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div>
      {user ? (
        <h1>{user?.email}</h1>
      ) : (
        <Link to='/login'>
          <p>Login</p>
        </Link>
      )}

      <button className='px-4 py-2 border rounded-xl' onClick={() => logout()}>
        Logout
      </button>

      <h1 className='text-3xl text-center text-red-500'>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
