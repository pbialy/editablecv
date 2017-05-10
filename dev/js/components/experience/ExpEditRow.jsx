import React from 'react';

import EditField from '~/js/components/commons/EditField.jsx';

class ExpEditRow extends React.Component {

    render() {
        const { exp, expNr, expLen, updateState, removeExp, addTask, moveExpUp, moveExpDown, updateStateFromList, removeTask } = this.props;
        return (
            <div>
                <div className={'datesForExp'}>
                    <EditField classes={'editDate'} val={exp.dateFrom} updateState={(e) => updateState(expNr, 'dateFrom', e)}/>
                    <div className={'dateDash'}>-</div>
                    <EditField classes={'editDate'} val={exp.dateTo} updateState={(e) => updateState(expNr, 'dateTo', e)}/>
                </div>
                <EditField classes={'editPosition'} val={exp.position} updateState={(e) => updateState(expNr, 'position', e)}/>
            {(expLen > 1) && (
                <button className={'expRemove'} onClick={() => removeExp(expNr)}>-</button>
            )}
                <button className={'addTask'} onClick={() => addTask(expNr)}>+</button>
                <br />
                <div className={'moveAndTasks'}>
                    <div className={'moveExpButtons'}>
                    {(expNr > 0) && (
                        <button className={'expMoveUp'} onClick={() => moveExpUp(expNr)}>⮝</button>
                    )}
                    {(expNr < expLen - 1) && (
                        <button className={'expMoveDown'} onClick={() => moveExpDown(expNr)}>⮟</button>
                    )}
                    </div>
                    <ul className={'tasksEditMode'}>
                    {exp.tasks.map((task, taskNr) => (
                        <li key={taskNr}>
                            <EditField classes={'editTask'} val={task} updateState={(e) => updateStateFromList(expNr, taskNr, 'task', e)} />
                        {(exp.tasks.length > 1) && (
                            <button className={'taskRemove'} onClick={() => removeTask(expNr, taskNr)}>-</button>
                        )}
                            <br />
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default ExpEditRow
