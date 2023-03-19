
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
        income: 2400,

    },
    {
        name: "Jul",

        income: 1398,

    },
    {
        name: "Aug",

        income: 9000,

    },
    {
        name: "Sep",

        income: 3908,

    },
    {
        name: "Oct",
        income: 4800,
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
