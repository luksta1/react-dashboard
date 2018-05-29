import React from 'react';
import CircleChart from './CircleChart'
import { Icon } from 'semantic-ui-react'

const TaskCard = (props) => {
    let row2text, row2Num
    if (props.task.taskName === 'Account Setup') {
        row2text = 'Remaining'
        row2Num = props.task.remaining
    } else {
        row2text = 'On Target'
        row2Num = props.task.onTarget
    }
    console.log(props.task)
    return (
        <div className="task_main">
            <div className="task_header">
                <h2>{props.task.taskName}</h2>
            </div>
            <div className="task_body">
                <CircleChart task={props.task} />
            </div>
            <div className="task_footer">
                <div className="row1">
                    <div class="left">
                        <Icon size="small" name='circle' />
                        <p>Completed</p>
                    </div>
                    <div class="right">
                        <p>{props.task.completed}</p>
                    </div>
                </div>
                <div className={`row2 ${props.task.taskName.replace(/\s/g, '')}`}>
                    <div class="left">
                        <Icon size="small" name='circle' />
                        <p>{row2text}</p>
                    </div>
                    <div class="right">
                        <p>{row2Num - props.task.completed}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskCard