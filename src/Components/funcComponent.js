import React from 'react'
import PropTypes from 'prop-types'

export default function FuncComponent(props) {
    return (
        <div className='funcContainer'>
            <h1>Welcome to {props.year}</h1>
        </div>
    )
}

FuncComponent.propTypes={
    year:PropTypes.number.isRequired
}