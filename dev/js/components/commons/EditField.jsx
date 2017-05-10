import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field.jsx';

class EditField extends Field {
    render() {
        return (
            <div className={['editFieldMainDiv', this.props.classes].join(" ")}>
                <input value={this.props.val} style={this.props.styles} onChange={this.props.updateState} />
            </div>
        );
    }
}

EditField.props = {
    val: PropTypes.string,
    styles: PropTypes.object,
    onChange: PropTypes.func
}

export default EditField;
