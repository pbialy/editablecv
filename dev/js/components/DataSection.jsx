import React from 'react';

import ValueField from '~/js/components/commons/ValueField.jsx';
import EditField from '~/js/components/commons/EditField.jsx';

import { validatePhone, validateLength } from '~/js/validators/validators.js';

class DataSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            phone: '503112233',
            email: 'wesoly_romek997@wp.pl',
            www: 'javascript.crockford.com',
            twitter: 'twitter.com/boredpanda'
        };
    };

    validateKey(key, value) {
        if (key === 'phone') {
            return validatePhone(value);
        } else {
            return validateLength(value, 30);
        }
    }

    updateState(id, e) {
        const val = e.target.value;
        if (this.validateKey(id, val)) {
            this.setState({ [id]: val });
        }
    };

    render() {
        const myStyle = {
            width: '100%',
            height: 100,
            display: 'inline-table'
        }

        return (
            <div style={myStyle} className='dataMainDiv'>
                <div className={'section'}>
                    <ValueField classes={'sectionHeader'} val={'Dane kontaktowe'} styles={{color:this.props.pageColor}} />
                    <br />
                    <div className='rowDiv'>
                        <ValueField classes={'descCol'} val={'Telefon'} />
                    {this.props.editMode ? (
                        <EditField classes={'editValCol'} id={'phone'} val={this.state.phone} updateState={this.updateState.bind(this, 'phone')} />
                    ) : (
                        <ValueField classes={'valCol'} val={this.state.phone} />
                    )}
                        <br />
                    </div>
                    <div className='rowDiv'>
                        <ValueField classes={'descCol'} val={'E-mail'} />
                    {this.props.editMode ? (
                        <EditField classes={'editValCol'} val={this.state.email} updateState={this.updateState.bind(this, 'email')} />
                    ) : (
                        <ValueField classes={'valCol'} val={this.state.email} />
                    )}
                        <br />
                    </div>
                    <div className='rowDiv'>
                        <ValueField classes={'descCol'} val={'Strona WWW'} />
                    {this.props.editMode ? (
                        <EditField classes={'editValCol'} val={this.state.www} updateState={this.updateState.bind(this, 'www')} />
                    ) : (
                        <ValueField classes={'valCol'} val={this.state.www} />
                    )}
                        <br />
                    </div>
                    <div className='rowDiv'>
                        <ValueField classes={'descCol'} val={'Twitter'} />
                    {this.props.editMode ? (
                        <EditField classes={'editValCol'} val={this.state.twitter} updateState={this.updateState.bind(this, 'twitter')} />
                    ) : (
                        <ValueField classes={'valCol'} val={this.state.twitter} />
                    )}
                    </div>
                </div>
            </div>
        );
    }
}

export default DataSection;
