export const FilterData = [
    {
        title: "Type d'emploi",
        id: 1,
        filters: [
            {
                id: "full-time",
                value: "Temps plein",
            },
            {
                id: "part-time",
                value: "Temps partiel",
            },
            {
                id: "contract",
                value: "Contrat",
            },
            {
                id: "remote",
                value: "En remote",
            },
            {
                id: "stage",
                value: "Stage",
            },
        ],
    },
    {
        title: "Experience requise",
        id: 2,
        filters: [
            {
                id: "moins-1-an",
                value: "Moins de 1 an",
            },
            {
                id: "1-3",
                value: "1 à 3 ans",
            },
            {
                id: "3-5",
                value: "3 à 5 ans",
            },
            {
                id: "+5",
                value: "Plus de 5 ans",
            },
        ],
    },
    {
        title: "Plage salarial",
        id: 3,
        filters: [
            {
                id: "0",
                value: "Moins de 1 Million MGA",
            },
            {
                id: "100000-300000",
                value: "1 Million à 3 Millions MGA",
            },
            {
                id: "300000-600000",
                value: "3 Million € à 6 Millions MGA",
            },
            {
                id: "600000-10000000",
                value: "Plus de 6 Millions MGA",
            },
        ],
    },
];

const newFilterData = [
    {
        target: "type",
        title: "Type d'emploi",
        options: [
            {
                title: "Temps plein",
                value: "full-time",
            },
            {
                title: "Temps partiel",
                value: "part-time",
            },
            {
                title: "Contrat",
                value: "contract",
            },
            {
                title: "Stage",
                value: "stage",
            },
        ],
    },
    {
        target: "experience",
        title: "Experience requis",
        options: [
            {
                title: "Moins de 1 an",
                value: {
                    min: null,
                    max: 1,
                },
            },
            {
                title: "1 a 3 ans",
                value: {
                    min: 1,
                    max: 3,
                },
            },
            {
                title: "3 a 5 ans",
                value: {
                    min: 3,
                    max: 5,
                },
            },
            {
                title: "Plus de 5 ans",
                value: {
                    min: 5,
                    max: null,
                },
            },
        ],
    },
    {
        title: "Plage salarial",
        target: "salary",
        options: [
            {
                title: "Moins de 1 Million MGA",
                value: {
                    min: null,
                    max: 1000000,
                },
            },
            {
                title: "1 Million à 3 Millions MGA",
                value: {
                    min: 1000000,
                    max: 3000000,
                },
            },
            {
                title: "3 Million € à 6 Millions MGA",
                value: {
                    min: 3000000,
                    max: 6000000,
                },
            },
            {
                title: "Plus de 6 Millions MGA",
                value: {
                    min: 6000000,
                    max: null,
                },
            },
        ],
    },
];

export { newFilterData };
