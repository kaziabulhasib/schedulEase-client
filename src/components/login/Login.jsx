import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { signinUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signinUser(email, password)
      .then((result) => {
        console.log(result);
        alert("sigin success");
        navigate("/availity");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <section className='max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md'>
        <h2 className='text-lg font-semibold text-gray-700 capitalize'>
          Account settings
        </h2>

        <form onSubmit={handleLogin}>
          <div className='w-2/3 mx-auto'>
            <div className='mb-4'>
              <label className='block text-left text-gray-700 mb-2'>
                Email Address
              </label>
              <input
                name='email'
                id='emailAddress'
                type='email'
                className='block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
              />
            </div>

            <div className='mb-4'>
              <label className='block text-left text-gray-700 mb-2'>
                Password
              </label>
              <input
                name='password'
                id='password'
                type='password'
                className='block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
              />
            </div>
          </div>

          <div className='text-right'>
            <Link to='/register'>
              <p className='text-blue-500 hover:underline'>Register</p>
            </Link>
          </div>

          <div className='flex justify-end mt-6'>
            <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
