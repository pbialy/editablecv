import React from 'react';

import ValueField from '~/js/components/commons/ValueField.jsx';
import EditField from '~/js/components/commons/EditField.jsx';
import DataReadonlyRow from '~/js/components/data/DataReadonlyRow.jsx';

import { validatePhone, validateLength } from '~/js/validators/validators.js';

class DataSection extends React.Component {

    constructor(props) {
        super(props);
        const { phone, email, www, twitter } = this.props.data;
        this.state = {phone, email, www, twitter};
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
        return (
            <div className='dataMainDiv'>
                <div className={'section'}>
                    <ValueField classes={'sectionHeader'} val={'Dane kontaktowe'} styles={{color:this.props.pageColor}} />
                    <br />
                {this.props.editMode ? (
                    <div>
                        <div className='rowDiv'>
                            <ValueField classes={'descCol'} val={'Telefon'} />
                            <EditField classes={'editValCol'} id={'phone'} val={this.state.phone} updateState={this.updateState.bind(this, 'phone')} />
                            <br />
                        </div>
                        <div className='rowDiv'>
                            <ValueField classes={'descCol'} val={'E-mail'} />
                            <EditField classes={'editValCol'} val={this.state.email} updateState={this.updateState.bind(this, 'email')} />
                            <br />
                        </div>
                        <div className='rowDiv'>
                            <ValueField classes={'descCol'} val={'Strona WWW'} />
                            <EditField classes={'editValCol'} val={this.state.www} updateState={this.updateState.bind(this, 'www')} />
                            <br />
                        </div>
                        <div className='rowDiv'>
                            <ValueField classes={'descCol'} val={'Twitter'} />
                            <EditField classes={'editValCol'} val={this.state.twitter} updateState={this.updateState.bind(this, 'twitter')} />
                        </div>
                    </div>
                ) : (
                    <DataReadonlyRow data={this.state} />
                )}
                </div>
            </div>
        );
    }
}

export default DataSection;
