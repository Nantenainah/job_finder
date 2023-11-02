import { useState } from 'react'
import { Link } from 'react-router-dom'
import s from './Signup.module.css'

function SignUp() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    repassword: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className={`w-96 p-8 bg-white rounded-lg shadow-md ${s.container}`}>
        <h1 className='text-center text-3xl font-semibold text-blueColor mb-6'>SignUp</h1>
        <form onSubmit={() => {}} className="flex justify-center items-center flex-col">
          <div className="mt-4 mb-6">
            <label htmlFor='email' className="block mb-2 text-sm font-medium text-gray-600">E-mail</label>
            <input
              type="email"
              placeholder="Votre e-mail"
              onChange={handleChange}
              id="email"
              value={user.email}
              name='email'
              className={`rounded-lg p-2.5 block text-sm focus:outline-none w-full ${
                s.input
              }`}
            />
          </div>
          <div className="mt-2 mb-6">
            <label htmlFor='password' className="block mb-2 text-sm font-medium text-gray-600">Mot de passe</label>
            <input
              type="password"
              placeholder="*****"
              value={user.password}
              onChange={handleChange}
              id="password"
              name='password'
              className={`rounded-lg p-2.5 block text-sm focus:outline-none w-full ${
                s.input
              }`}
            />
          </div>
          <div className="mt-2 mb-6">
            <label htmlFor='repassword' className="block mb-2 text-sm font-medium text-gray-600">Confirmer le mot de passe</label>
            <input
              type="password"
              placeholder="*****"
              value={user.repassword}
              onChange={handleChange}
              id="repassword"
              name='repassword'
              className={`rounded-lg p-2.5 block text-sm focus:outline-none w-full ${
                s.input
              }`}
            />
          </div>

          <div className="mt-4 mb-6">
            <Link to='/login'>
              <button
                type='submit'
                className={`p-3 rounded-full text-sm bg-blueColor text-white w-full transform transition-transform hover:scale-105 ${
                  s.btn
                }`}
              >
                Créer un compte
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
