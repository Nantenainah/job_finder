import{Link}from 'react-router-dom'
import './Login.css'
function Login() {
    return(
        <section className="flex justify-center items-center columns-12">
           <div className='border rounded-md mt-9 p-2'id='contenair'>
            <h1 className='text-center text-blue-600 font-bold pt-2 text-lg'>Login</h1>
            <form action="post" className="flex justify-center items-center flex-col">
                <div className="mt-4 mb-6">
                    <label htmlFor='email' className="block mb-2 text-sm font-medium text-gray-400">E-mail</label>
                    <input type="email" placeholder="votre e-mail"id="email"name='email' className=" rounded-lg p-2.5 block text-sm focus:outline-none"/>
                </div>
                <div className="mt-2 mb-6">
                    <label htmlFor='password' className="block mb-2 text-sm font-medium text-gray-400">Mots de passe</label>
                    <input type="password" placeholder="mots de passe"id="password"name='password' className="rounded-lg p-2.5 block text-sm focus:outline-none"/>
                </div>
                <a href='#'id='forgot'>forgot password?</a>
                <div className="mt-4 mb-6">
                    <button type='submit'id='btn'className="p-3 rounded-full text-sm">connexion</button>
                </div>

            </form>
            <p className='text-sm mt-8'>creez-vous un compte <Link to='/sign-up' className='text-blue-500'>ici</Link></p>
           </div>
        </section>

    ) 
}

export default Login;
