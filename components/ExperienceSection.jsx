import React from 'react';

import ValueField from './ValueField.jsx';
import EditField from './EditField.jsx';

import { validateDate, validateLength } from './../validators/validators.js';

class ExperienceSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // TODO to w sumie przydałoby się przenieść do jakiś zaślepek
            experiences: [{
                dateFrom: '11/2016',
                dateTo: '03/2017',
                position: 'Programista C++',
                tasks: [
                    'projektowanie aplikacji backendowej dla NASA',
                    'szkolenia z programowania dla Pań z recepcji',
                    'wdrażanie innowacyjnych metodyk pracy'
                ]
            }, {
                dateFrom: '03/2016',
                dateTo: '09/2016',
                position: 'Pomoc doraźna dla Google',
                tasks: [
                    'stworzenie kodu który uchronił serwis przed przeciążeniem',
                    //'stworzenie kodu który uchronił serwis przed przeciążeniem, a także przyśpieszył wyszukiwarkę o ok. 40%',
                    'szkolenia dla pracowników'
                ]
            }, {
                dateFrom: '05/2014',
                dateTo: '02/2016',
                position: 'Kasjer w Biedronce',
                tasks: [
                    'obsługa klienta',
                    'układanie produktów',
                    'liczenie pieniędzy',
                    'transport utargu do banku za pomocą opancerzonego rowerka',
                    'spanie na zapleczu'
                ]
            }]
        };
        this.addExp = this.addExp.bind(this);
    };

    validateKey(key, value) {
        if (key === 'dateFrom' || key === 'dateTo') {
            return validateDate(value);
        } else if (key === 'task') {
            return validateLength(value, 60);
        } else {
            return validateLength(value, 30);
        }
    }

    updateState(expNr, id,  e) {
        const val = e.target.value;
        if (this.validateKey(id, val)) {
            this.state.experiences[expNr] = Object.assign({}, this.state.experiences[expNr], {[id]: val});
            this.setState({ experiences: this.state.experiences })
        }
    };

    updateStateFromList(expNr, taskNr, id, e) {
        const val = e.target.value;
        if (this.validateKey(id, val)) {
            this.state.experiences[expNr].tasks[taskNr] = val;
            this.setState({ experiences: this.state.experiences })
        }
    };

    addTask(expNr) {
        this.state.experiences[expNr].tasks.push('');
        this.setState({ experiences: this.state.experiences })
    };

    addExp() {
        const newExp = {
            dateFrom: '10/2000',
            dateTo: '10/2100',
            position: '',
            tasks: ['']
        }
        this.state.experiences.splice(0, 0, newExp);
        this.setState({ experiences: this.state.experiences })
    };

    removeExp(expNr) {
        this.state.experiences.splice(expNr, 1);
        this.setState({ experiences: this.state.experiences })
    };

    moveExpDown(expNr) {
        const movedExp = this.state.experiences.splice(expNr, 1)[0];
        this.state.experiences.splice(expNr+1, 0, movedExp);
        this.setState({ experiences: this.state.experiences })
    };

    moveExpUp(expNr) {
        const movedExp = this.state.experiences.splice(expNr, 1)[0];
        this.state.experiences.splice(expNr-1, 0, movedExp);
        this.setState({ experiences: this.state.experiences })
    };

    removeTask(expNr, taskNr) {
        this.state.experiences[expNr].tasks.splice(taskNr, 1);
        this.setState({ experiences: this.state.experiences })
    };

    render() {
        const myStyle = {
            width: '100%',
            height: 100,
            display: 'inline-table'
        }

        return (
            <div style={myStyle} className='experienceMainDiv'>
                <div className={'section'}>
                    <ValueField classes={'sectionHeader'} val={'Doświadczenie zawodowe'} styles={{color:this.props.pageColor}} />
                    {this.props.editMode && (<button className={'addExp'} onClick={this.addExp}>+</button>)}
                {this.state.experiences.map((exp, expNr) => (
                    <div className='rowDiv' key={expNr}>
                    {this.props.editMode ? (
                        <div>
                            <div className={'datesForExp'}>
                                <EditField classes={'editDate'} val={exp.dateFrom} updateState={this.updateState.bind(this, expNr, 'dateFrom')}/>
                                <div className={'dateDash'}>-</div>
                                <EditField classes={'editDate'} val={exp.dateTo} updateState={this.updateState.bind(this, expNr, 'dateTo')}/>
                            </div>
                            <EditField classes={'editPosition'} val={exp.position} updateState={this.updateState.bind(this, expNr, 'position')}/>
                        {(this.state.experiences.length > 1) && (
                            <button className={'expRemove'} onClick={this.removeExp.bind(this, expNr)}>-</button>
                        )}
                            <button className={'addTask'} onClick={this.addTask.bind(this, expNr)}>+</button>
                            <br />
                            <div className={'moveAndTasks'}>
                                <div className={'moveExpButtons'}>
                                {(expNr > 0) && (
                                    <button className={'expMoveUp'} onClick={this.moveExpUp.bind(this, expNr)}>⮝</button>
                                )}
                                {(expNr < this.state.experiences.length - 1) && (
                                    <button className={'expMoveDown'} onClick={this.moveExpDown.bind(this, expNr)}>⮟</button>
                                )}
                                </div>
                                <ul className={'tasksEditMode'}>
                                {exp.tasks.map((task, taskNr) => (
                                    <li key={taskNr}>
                                        <EditField classes={'editTask'} val={task} updateState={this.updateStateFromList.bind(this, expNr, taskNr, 'task')} />
                                    {(exp.tasks.length > 1) && (
                                        <button className={'taskRemove'} onClick={this.removeTask.bind(this, expNr, taskNr)}>-</button>
                                    )}
                                        <br />
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className={'datesForExp'}>
                                <ValueField classes={'valCol date'} val={exp.dateFrom} />
                                <div className={'dateDash'}>-</div>
                                <ValueField classes={'valCol date'} val={exp.dateTo} />
                            </div>
                            <ValueField classes={'valCol position'} val={exp.position} />
                            <ul className={'tasks'}>
                            <br />
                        {exp.tasks.map((task, j) => (
                            <li key={j}>
                                <ValueField classes={'valCol task'} val={task} />
                                <br />
                            </li>
                        ))}
                            </ul>
                        </div>
                    )}
                    </div>
                ))}
                </div>
            </div>
        );
    }
}

export default ExperienceSection;
