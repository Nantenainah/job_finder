import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import styles from "./Login.module.css";
import s from './Login.module.css'


function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { email, password } = user;

    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      setError("Email ou mot de passe incorrect");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (error) {
      const timeout = setTimeout(() => {
        setError("");
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="w-96 p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-center text-3xl font-semibold text-blueColor mb-6">Connexion</h1>
        <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col">
          <div className="mt-4 mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-600">E-mail</label>
            <input
              type="email"
              placeholder="Votre e-mail"
              name="email"
              value={user.email}
              onChange={handleChange}
              className={`rounded-lg p-2.5 block text-sm focus:outline-none w-full ${
                error ? "border-red-500" : "border-gray-300"
              }`}
            />
          </div>
          <div className="mt-2 mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-600">Mot de passe</label>
            <input
              type="password"
              placeholder="Mot de passe"
              name="password"
              value={user.password}
              onChange={handleChange}
              className={`rounded-lg p-2.5 block text-sm focus:outline-none w-full ${
                error ? "border-red-500" : "border-gray-300"
              }`}
            />
          </div>
          {error && <p className="text-red-600 mb-3">{error}</p>}
          <Link to="/forgot-password" className={`${styles.forgot} text-blueColor hover:underline`}>
            Mot de passe oublié?
          </Link>
          <div className="mt-4 mb-6">
            <button
              type="submit"
              className={`p-3 rounded-full text-sm bg-blueColor text-white w-full transform transition-transform hover:scale-105 ${
                s.btn
              }`}
              disabled={loading}
            >
              {loading ? "Chargement..." : "Connexion"}
            </button>
          </div>
          <p className="text-m m-8">
            Créez-vous un compte{" "}
            <Link to="/sign-up" className="text-blue-600 hover:underline">
              ici
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
