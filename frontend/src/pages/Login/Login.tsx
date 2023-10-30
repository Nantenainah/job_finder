import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Login.module.css'
function Login() {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    return (
        <section className="flex justify-center items-center columns-12">
            <div className={`border rounded-md mt-9 p-2' ${styles.contenair}`}>
                <h1 className='text-center text-blue-600 font-bold pt-2 text-lg'>Login</h1>
                <form action="post" className="flex justify-center items-center flex-col">
                    <div className="mt-4 mb-6">
                        <label htmlFor='email' className="block mb-2 text-sm font-medium text-gray-400">E-mail</label>
                        <input type="email" placeholder="votre e-mail" id="email" onChange={handleChange} name='email' className={`rounded-lg p-2.5 block text-sm focus:outline-none ${styles.email}`} />
                    </div>
                    <div className="mt-2 mb-6">
                        <label htmlFor='password' className="block mb-2 text-sm font-medium text-gray-400">Mots de passe</label>
                        <input type="password" placeholder="*****" onChange={handleChange} id="password" name='password' className={`rounded-lg p-2.5 block text-sm focus:outline-none ${styles.password}`} />
                    </div>
                    <a href='#' className={`${styles.forgot}`}>forgot password?</a>
                    <div className="mt-4 mb-6">
                        <button type='submit' className={`"p-3 rounded-full text-sm" ${styles.btn}`}>connexion</button>
                    </div>

                </form>
                <p className='text-m m-8'>creez-vous un compte <Link to='/sign-up' className='text-blue-500'>ici</Link></p>
            </div>
        </section>

    )
}

export default Login;
