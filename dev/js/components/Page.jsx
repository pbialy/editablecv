import React from 'react';
import Header from './Header.jsx';
import DataSection from './DataSection.jsx';
import SkillsSection from './SkillsSection.jsx';
import ExperienceSection from './ExperienceSection.jsx';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: this.props.data.editMode,
            pageColor: this.props.data.pageColor
            // TODO if i want to make some import/export, then whole data should
            // probably be here
        };
        this.changeMode = this.changeMode.bind(this);
        this.changePageColor = this.changePageColor.bind(this);

    }

    changeMode() {
        console.log(`changeMode editMode=${!this.state.editMode}`);
        this.setState(Object.assign({}, this.state, {editMode: !this.state.editMode}));
    }

    changePageColor(newColor) {
        console.log(`changecolor ${newColor}`);
        this.setState(Object.assign({}, this.state, {pageColor: newColor}));
    }


    render() {
        return (
            <div className='page'>
                <Header data={this.props.data.headerSection} changeModeFunc={this.changeMode} editMode={this.state.editMode} pageColor={this.state.pageColor} changePageColorFunc={this.changePageColor} />
                <DataSection data={this.props.data.dataSection} editMode={this.state.editMode} pageColor={this.state.pageColor} />
                <ExperienceSection data={this.props.data.experiencesSection} editMode={this.state.editMode} pageColor={this.state.pageColor} />
                <SkillsSection data={this.props.data.skillsSection} editMode={this.state.editMode} pageColor={this.state.pageColor} />
            </div>
        );
    }
}

export default Page;
