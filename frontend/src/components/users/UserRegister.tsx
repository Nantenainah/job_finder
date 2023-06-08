import React, { FormEvent, FunctionComponent, ChangeEvent, useState, useEffect } from "react";
import "../../App.scss";
import FormUsers, { createUser } from "../../api/UserApi";

const Register: FunctionComponent = () => {
    
    const [user, setUser] = useState<FormUsers>({
        name: '',
        firstName: '',
        email: '',
        password: '',
        role: '',
      });

    const handleChangeUser = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmitUser = (e: FormEvent) => {
        e.preventDefault();
        createUser(user)
            .then(response => console.log(response))
            .catch(error => console.error(error));
        console.log(user);
    }

    return <>
        <h2 className="title">Remplir ce formulaire:</h2>
        <form onSubmit={handleSubmitUser} className="form-user">
            <label htmlFor="name">Entrer votre nom</label>
            <input type="text" name="name" id="name" value={user.name} onChange={handleChangeUser} autoComplete="false" />
            <label htmlFor="firstName">Entrer votre prénom</label>
            <input type="text" name="firstName" id="firstName" value={user.firstName} onChange={handleChangeUser} autoComplete="false" />
            <label htmlFor="email">Entrer votre compte e-mail</label>
            <input type="text" name="email" id="email" value={user.email} onChange={handleChangeUser} autoComplete="false" />
            <label htmlFor="password">Entrer votre mot de passe</label>
            <input type="password" name="password" id="password" value={user.password} onChange={handleChangeUser} autoComplete="false" />
            <label htmlFor="role">Sélectionner votre rôle</label>
            <select name="role" id="role" value={user.role} onChange={handleChangeUser} autoComplete="false">
                <option value="admin">Administrateur</option>
                <option value="applicant">Appliquant</option>
                <option value="recruiter">Recruiter</option>
            </select>
            <button type="submit" className={``}>Soumettre</button>
        </form>

    </>
}

export default Register;