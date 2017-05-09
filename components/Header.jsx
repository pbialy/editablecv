import React from 'react';

import ValueField from './ValueField.jsx';
import EditField from './EditField.jsx';

import { validateName, validateJob } from './../validators/validators.js';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Alojzy',
			surname: 'Mikser',
            job: 'Spawacz',
        };
    };

    componentDidMount() {
        document.getElementById('changeMode').addEventListener('click', this.props.changeModeFunc, false);
        document.getElementById('changeColorRed').addEventListener('click', () => {this.props.changePageColorFunc('red')}, false);
        document.getElementById('changeColorBlue').addEventListener('click', () => {this.props.changePageColorFunc('blue')}, false);
        document.getElementById('changeColorOrange').addEventListener('click', () => {this.props.changePageColorFunc('orange')}, false);
        document.getElementById('changeColorGreen').addEventListener('click', () => {this.props.changePageColorFunc('green')}, false);
	}

    validateKey(key, value) {
        if (key === 'name' || key === 'surname') {
            return validateName(value);
        } else if (key === 'job') {
            return validateJob(value);
        }
        return true;
    }

    updateState(id, e) {
        const val = e.target.value;
        if (this.validateKey(id, val)) {
            this.setState({ [id]: val });
        }
    };

    render() {
        const myStyle = {
            backgroundColor: this.props.pageColor,
            width: '100%',
            height: '92px',
            display: 'inline-table'
        }

        return (
            <div style={myStyle}>
            {this.props.editMode ? (
                <div style={{margin: '10px 20px 0px 20px'}}>
                    <EditField styles={{fontSize:'26px', width:'250px'}} val={this.state.name} updateState={this.updateState.bind(this, 'name')} />
                    <EditField styles={{fontSize:'26px', width:'250px', marginLeft:'20px'}} val={this.state.surname} updateState={this.updateState.bind(this, 'surname')} />
                    <br/>
                    <EditField styles={{fontSize:'20px', width:'300px', marginTop:'5px'}} val={this.state.job} updateState={this.updateState.bind(this, 'job')} />
                    <span className='colorsEditor'>
                        <button id='changeColorRed' className={'colorChanger'} style={{backgroundColor:'red'}} />
                        <button id='changeColorBlue' className={'colorChanger'} style={{backgroundColor:'blue'}} />
                        <button id='changeColorOrange' className={'colorChanger'} style={{backgroundColor:'orange'}} />
                        <button id='changeColorGreen' className={'colorChanger'} style={{backgroundColor:'green'}} />
                    </span>
                    <button id='changeMode' style={{float:'right', margin:'5px 20px 0px 0px', fontSize:'20px', width:'100px'}}>Apply</button>
                </div>
            ) : (
                <div style={{margin: '10px 20px 0px 20px'}}>
                    <ValueField styles={{fontSize:'32px'}} val={this.state.name}/>
                    <ValueField styles={{fontSize:'32px', marginLeft:'10px'}} val={this.state.surname}/>
                    <br/>
                    <ValueField styles={{fontSize:'24px'}} val={this.state.job}/>
                    <span className='colorsEditor' style={{display:'none'}}>
                        <button id='changeColorRed' />
                        <button id='changeColorBlue' />
                        <button id='changeColorOrange' />
                        <button id='changeColorGreen' />
                    </span>
                    <button id='changeMode' style={{float:'right', margin:'5px 20px 0px 0px', fontSize:'20px', width:'100px'}}>Edit</button>
                </div>
            )}
            </div>
        );
    }
}

export default Header;
