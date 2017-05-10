import React from 'react';

import ValueField from '~/js/components/commons/ValueField.jsx';
import EditField from '~/js/components/commons//EditField.jsx';
import ExpReadonlyRow from '~/js/components/experience/ExpReadonlyRow.jsx';
import ExpEditRow from '~/js/components/experience/ExpEditRow.jsx';

import { validateDate, validateLength } from '~/js/validators/validators.js';

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
        this.updateState = this.updateState.bind(this);
        this.removeExp = this.removeExp.bind(this);
        this.addTask = this.addTask.bind(this);
        this.moveExpUp= this.moveExpUp.bind(this);
        this.moveExpDown= this.moveExpDown.bind(this);
        this.updateStateFromList = this.updateStateFromList.bind(this);
        this.removeTask = this.removeTask.bind(this);
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

    moveExpUp(expNr) {
        const movedExp = this.state.experiences.splice(expNr, 1)[0];
        this.state.experiences.splice(expNr-1, 0, movedExp);
        this.setState({ experiences: this.state.experiences })
    };

    moveExpDown(expNr) {
        const movedExp = this.state.experiences.splice(expNr, 1)[0];
        this.state.experiences.splice(expNr+1, 0, movedExp);
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
                        <ExpEditRow exp={exp} expNr={expNr} expLen={this.state.experiences.length}
                            updateState={this.updateState} removeExp={this.removeExp} addTask={this.addTask}
                            moveExpUp={this.moveExpUp} moveExpDown={this.moveExpDown}
                            updateStateFromList={this.updateStateFromList} removeTask={this.removeTask}
                        />
                    ) : (
                        <ExpReadonlyRow exp={exp} />
                    )}
                    </div>
                ))}
                </div>
            </div>
        );
    }
}

export default ExperienceSection;
