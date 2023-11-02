type MenuItem = {
    path: string;
    title: string;
};

export const MENU_DATA: MenuItem[] = [
    { path: "/", title: "Emplois" },
    {
        path: "/stats",
        title: "Statistiques",
    },
    { path: "/about", title: "A propos" },
];
