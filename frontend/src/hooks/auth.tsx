import React, { useContext, useEffect, useState } from "react";
import { Role } from "../types";

type ContextValue = {
    user: any;
    role: Role | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    isAuthenticated: boolean;
};
const context = React.createContext<ContextValue>({} as ContextValue);

function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState({});
    const [role, setRole] = useState<Role | null>(null);
    const isAuthenticated = role !== null;

    useEffect(() => {
        const authString = localStorage.getItem("auth");
        if (authString) {
            const auth: { user: any; role: Role } = JSON.parse(authString);
            setUser(auth.user);
            setRole(auth.role);
        }
    }, []);

    useEffect(() => {
        // Just testing if the user doesn't exists
        if (Object.keys(user).length !== 0 && role !== null) {
            localStorage.setItem(
                "auth",
                JSON.stringify({
                    role,
                    user,
                })
            );
        }
    }, [user, role]);

    async function login(email: string, password: string) {
        const res = await fetch("http://localhost:8000/auth/login", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
        const data: { role: Role; data: any } = await res.json();
        setRole(data.role);
        setUser(data.data);
    }

    async function logout() {
        if (!isAuthenticated) {
            return;
        }
        await fetch("http://localhost:8000/auth/logout");
        localStorage.setItem("auth", JSON.stringify({ role: null, user: {} }));
        setUser({});
        setRole(null);
    }

    return (
        <context.Provider
            value={{ user, role, login, logout, isAuthenticated }}
        >
            {children}
        </context.Provider>
    );
}

function useAuth() {
    const c = useContext(context);

    if (!c) {
        throw new Error();
    }

    return c;
}

export { useAuth, AuthProvider };
