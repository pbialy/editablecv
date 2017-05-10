import React from 'react';

import ValueField from '~/js/components/commons/ValueField.jsx';
import EditField from '~/js/components/commons/EditField.jsx';

import { validateOnlyDigits, validateLength } from '~/js/validators/validators.js';

class SkillsSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            skills: this.props.data.skills
        };
        this.addSkill = this.addSkill.bind(this);
    };

    validateKey(key, value) {
        if (key === 'name') {
            return validateLength(value, 12);
        } else if (key === 'val'){
            return validateOnlyDigits(value, 2) && (value <= 10);
        } else {
            return validateLength(value, 30);
        }
    }

    updateSkillName(skillNr,  e) {
        const name = e.target.value;
        if (this.validateKey('name', name)) {
            this.state.skills[skillNr].name = name;
            this.setState({ skills: this.state.skills })
        }
    };

    updateSkillVal(skillNr,  e) {
        const val = e.target.value;
        if (this.validateKey('val', val)) {
            this.state.skills[skillNr].val = val.toString() + '0%';
            this.setState({ skills: this.state.skills })
        }
    };

    addSkill() {
        const newSkill = {
            name: '',
            val: '0%'
        }
        this.state.skills.splice(0, 0, newSkill);
        this.setState({ skills: this.state.skills })
    };

    removeSkill(skillNr) {
        this.state.skills.splice(skillNr, 1);
        this.setState({ skills: this.state.skills })
    };

    calcSkillVal(val) {
        return parseInt(val)/10;
    }

    render() {
        const myStyle = {
            width: '100%',
            height: 100,
            display: 'inline-table'
        }

        return (
            <div style={myStyle} className='skillsMainDiv'>
                <div className={'section'}>
                    <ValueField classes={'sectionHeader'} val={'Umiejętności'} styles={{color:this.props.pageColor}} />
                    {this.props.editMode && (<button className={'addSkill'} onClick={this.addSkill}>+</button>)}
                {this.state.skills.map((skill, skillNr) => (
                    <div className='skillRow' key={skillNr}>
                    {this.props.editMode ? (
                        <div className={'skillsAndProgress'}>
                            <EditField classes={'editSkillName'} val={skill.name} updateState={this.updateSkillName.bind(this, skillNr)}/>
                            <div className={'editSkillProgress'}>
                                <EditField classes={'editSkillVal'} val={this.calcSkillVal(skill.val)} updateState={this.updateSkillVal.bind(this, skillNr)}/>
                                <ValueField classes={'slash10'} val={'/ 10'} />
                            </div>
                            {(this.state.skills.length > 1) && (
                                <button className={'skillRemove'} onClick={this.removeSkill.bind(this, skillNr)}>-</button>
                            )}
                            <br />
                        </div>
                    ) : (
                        <div className={'skillsAndProgress'}>
                            <ValueField classes={'skillName'} val={skill.name} />
                            <div className={'skillProgress'}>
                                <div className={'progress'}>
                                    <div className={'bar'} style={{width:skill.val, backgroundColor:this.props.pageColor}}></div>
                                </div>
                            </div>
                            <br />
                        </div>
                    )}
                    </div>
                ))}
                </div>
            </div>
        );
    }
}

export default SkillsSection;
