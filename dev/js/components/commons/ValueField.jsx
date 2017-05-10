import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field.jsx';

class ValueField extends Field {

    render() {
        const myStyle = {
            //backgroundColor: 'yellow',
            //border: 'solid 2px',
            //borderColor: '#979797',
            //width: '100%',
            //height: 100,
            //display: 'inline-table'
            //margin: '60px auto 60px auto'
            //margin: '10px'
            display: 'inline-block'
        }

        return (
            <div style={myStyle} className={this.props.classes}>
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
//
//ValueField.defaultProps = {
//    val: 'Ignacy Gąbka'
//}

export default ValueField;
