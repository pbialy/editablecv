import React from 'react';

import ValueField from '~/js/components/commons/ValueField.jsx';

class SkillsValueRow extends React.Component {

    render() {
        const { skill, bgColor } = this.props;
        return (
            <div className={'skillsAndProgress'}>
                <ValueField classes={'skillName'} val={skill.name} />
                <div className={'skillProgress'}>
                    <div className={'progress'}>
                        <div className={'bar'} style={{width:skill.val, backgroundColor:bgColor}}></div>
                    </div>
                </div>
                <br />
            </div>
        )
    }
}

export default SkillsValueRow
