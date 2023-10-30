import {
    BarChart,
    Bar,
    ResponsiveContainer,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
} from "recharts";
import { JobSectorStats } from "../../types";

function formatData(data: JobSectorStats[]) {
    return data
        .map((e) => {
            if (e.name.length > 4) {
                e.name = e.name.slice(0, 4) + "...";
            }
            return e;
        })
        .filter((e) => e.count > 0);
}

interface Props {
    data: JobSectorStats[];
}
const SectorStats = (props: Props) => {
    const data = formatData(props.data || []);

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
