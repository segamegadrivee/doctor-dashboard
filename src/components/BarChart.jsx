
import React from "react";
import {

    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

const data = [
    {
        name: "Jun",
        uv: 4000,
        income: 2400,
        amt: 2400
    },
    {
        name: "Jul",
        uv: 3000,
        income: 1398,
        amt: 2210
    },
    {
        name: "Aug",
        uv: 2000,
        income: 9000,
        amt: 2290
    },
    {
        name: "Sep",
        uv: 2780,
        income: 3908,
        amt: 2000
    },
    {
        name: "Oct",
        income: 4800,
    },
    {
        name: "Nov",
        income: 3800,
    },

];

export default function App() {
    return (
        <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
                <BarChart
                    data={data}
                    margin={{

                    }}
                >
                    <CartesianGrid opacity={0.5} strokeDasharray="3 3" />
                    <XAxis dataKey="name" fontSize={15} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="income" opacity={0.9} fill="#56CCF2" barSize={28} radius={[4, 4, 0, 0]} />
                </BarChart >
            </ResponsiveContainer>
        </div>
    );
}
