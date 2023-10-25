import { useState } from 'react'
import { Link } from 'react-router-dom'
import s from './Signup.module.css'
function SignUp() {


    const [user, setUser] = useState({
        email: "",
        password: "",
        repassword: ""
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
            <div className={`border rounded-md mt-9 p-2' ${s.contenair}`}>
                <h1 className='text-center text-blue-600 font-bold pt-2 text-lg'>SignUp</h1>
                <form action="post" className="flex justify-center items-center flex-col">
                    <div className="mt-4 mb-6">
                        <label htmlFor='email' className="block mb-2 text-sm font-medium text-gray-400">E-mail</label>
                        <input type="email" placeholder="votre e-mail" onChange={handleChange} id="email" value={user.email} name='email' className=" rounded-lg p-2.5 block text-sm focus:outline-none" />
                    </div>
                    <div className="mt-2 mb-6">
                        <label htmlFor='password' className="block mb-2 text-sm font-medium text-gray-400">Mots de passe</label>
                        <input type="password" placeholder="mots de passe" value={user.password} onChange={handleChange} id="password" name='password' className="rounded-lg p-2.5 block text-sm focus:outline-none" />
                    </div>
                    <div className="mt-2 mb-6">
                        <label htmlFor='repassword' className="block mb-2 text-sm font-medium text-gray-400">confirme mots de passe</label>
                        <input type="password" placeholder="confirm mots de passe" value={user.repassword} onChange={handleChange} id="repassword" name='repassword' className="rounded-lg p-2.5 block text-sm focus:outline-none" />
                    </div>

                    <div className="mt-4 mb-6">
                        <Link to='/login'><button type='submit' className={`p-3 rounded-full text-sm ${s.btn}`}>Creer compte</button></Link>
                    </div>

                </form>
            </div>
        </section>
    );
}
export default SignUp;
