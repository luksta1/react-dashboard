import React from 'react';
import { PieChart, Pie, Sector, Cell } from 'recharts'

const CircleChart = (props) => {

    const data = [{ name: props.task.taskName, value: props.task.completed }, { name: 'Group B', value: 300 }];
    const COLORS = ['#0088FE', '#00C49F'];

    return (
        <PieChart width={320} height={300} onMouseEnter={this.onPieEnter}>
            <Pie
                data={data}
                cx={120}
                cy={200}
                innerRadius={80}
                outerRadius={95}
                fill="#8884d8"
                paddingAngle={2}
            >
                {
                    data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
                }
            </Pie>
        </PieChart>
    );
}

export default CircleChart;
