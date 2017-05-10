import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field.jsx';

class ValueField extends Field {
    render() {
        return (
            <div className={['valueFieldMainDiv', this.props.classes].join(' ')}>
                <div style={this.props.styles} >{this.props.val}</div>
            </div>
        );
    }
}

ValueField.props = {
    val: PropTypes.string,
    classes: PropTypes.string,
    styles: PropTypes.object
}

export default ValueField;
