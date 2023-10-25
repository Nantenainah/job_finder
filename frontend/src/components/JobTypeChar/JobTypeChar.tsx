import { useEffect, useState } from 'react';

import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import { getJobTypeStats } from '../../lib/api';
import { Legend, Cell } from 'recharts';

type Data = {
  name: string;
  value: number;
}[];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
}

const JobTypeChar = () => {


  const [data, setData] = useState<Data>([]);

  useEffect(() => {
    (async () => {
      const res = await getJobTypeStats({ year: "2023", month: "10" })
      console.log(res);

      setData(res);
    })()
  }, [])

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default JobTypeChar;