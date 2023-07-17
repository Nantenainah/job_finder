import { ChangeEvent, FormEvent, FunctionComponent, useState } from "react";
import '../../styles/user.scss';

const UserLogin: FunctionComponent = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
        role: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(loginData);
    };

    return (
        <form onSubmit={handleSubmit} className="form-login">
            <h2 className="title">Remplir ce formulaire:</h2>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" value={loginData.email} onChange={handleChange} autoComplete="false" />
            
            <label htmlFor="password">Mot de passe</label>
            <input type="password" name="password" id="password" value={loginData.password} onChange={handleChange} autoComplete="false" />
            
            <label htmlFor="role">Rôle</label>
            <select name="role" id="role" value={loginData.role} onChange={handleChange} autoComplete="false">
                <option value="admin">Administrateur</option>
                <option value="applicant">Appliquant</option>
                <option value="recruiter">Recruteur</option>
            </select>
            
            <button type="submit">Se connecter</button>
        </form>
    );
}

export default UserLogin;