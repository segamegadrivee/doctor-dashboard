import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
];
const COLORS = ['#2952CC', '#FF4C5E', '#848FAC'];

export default class Example extends PureComponent {

    render() {
        return (
            <PieChart width={160} height={160} onMouseEnter={this.onPieEnter}>
                <Pie
                    data={data}
                    innerRadius={55}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>

            </PieChart>
        );
    }
}
