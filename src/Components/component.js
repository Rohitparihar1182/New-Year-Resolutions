import React from 'react';
import PropTypes from 'prop-types'

class Com extends React.Component{
    render(){
        return (
            <div className="container">
                <h1>{this.props.msg}</h1>
            </div>
        );
    }
}

Com.propTypes={
    msg:PropTypes.string
}

Com.defaultProps={
    msg:'Hello'
}

export default Com;