import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field.jsx';

class EditField extends Field {

//    constructor(props) {
//        super(props);
//        this.state = {
//            val: 'initial data'
//        };
//        this.updateState = this.updateState.bind(this)
//    };
//
//    updateState(e) {
//        this.setState({ val: e.target.value });
//    };


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
			display: 'inline-block',
	//		width: '100px'
        }

        return (
            <div style={myStyle} className={this.props.classes}>
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


//
//EditField.defaultProps = {
//    val: 'Ignacy Gąbka'
//}

export default EditField;
