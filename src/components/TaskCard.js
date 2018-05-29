import React from 'react';
import CircleChart from './CircleChart'

const TaskCard = (props) => {

    return (
        <div className="task_main">
            <div className="task_header">
                <h2>Test</h2>
            </div>
            <div className="task_body">
                <CircleChart />
            </div>
            <div className="task_footer">
                <div className="row1"></div>
                <div className="row2"></div>
            </div>
        </div>
    )
}

export default TaskCard