import { useEffect, useState } from "react";
import {
    BarChart,
    Bar,
    ResponsiveContainer,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
} from "recharts";
import { getStats } from "../../lib/api";

function formatData(data: Data) {
    return data
        .map((e) => {
            if (e.name.length > 4) {
                e.name = e.name.slice(0, 4) + "...";
            }
            return e;
        })
        .filter((e) => e.count > 0);
}

type Data = {
    name: string;
    count: number;
}[];

const SectorStats = () => {
    const [data, setData] = useState<Data>([]);

    useEffect(() => {
        (async () => {
            const res = await getStats({ year: "2023", month: "10" });
            setData(formatData(res));
        })();
    }, []);

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={100} height={40} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#305A7F" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default SectorStats;
