import React from 'react';

import ValueField from '~/js/components/commons/ValueField.jsx';

class DataValueRow extends React.Component {

    render() {
        const { phone, email, www, twitter } = this.props.data;
        return (
            <div>
                <div className='rowDiv'>
                    <ValueField classes={'descCol'} val={'Telefon'} />
                    <ValueField classes={'valCol'} val={phone} />
                    <br />
                </div>
                <div className='rowDiv'>
                    <ValueField classes={'descCol'} val={'E-mail'} />
                    <ValueField classes={'valCol'} val={email} />
                    <br />
                </div>
                <div className='rowDiv'>
                    <ValueField classes={'descCol'} val={'Strona WWW'} />
                    <ValueField classes={'valCol'} val={www} />
                    <br />
                </div>
                <div className='rowDiv'>
                    <ValueField classes={'descCol'} val={'Twitter'} />
                    <ValueField classes={'valCol'} val={twitter} />
                </div>
            </div>
        )
    }
}

export default DataValueRow
