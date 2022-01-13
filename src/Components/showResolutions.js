import React from 'react'

function ShowResolutions(props) {
    return (
        <div className='show-resolution'>
            <h2 className='h2'>{props.index+1}. {props.resolution} </h2>
            <p>Reason: {props.reason}</p>
        </div>
    )
}

export default ShowResolutions
