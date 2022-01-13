import React from 'react'

export default function ShowAchievments(props) {
    return (
        <div className='show-achievment'>
            <h2>{props.index+1}. {props.achievment}</h2>
        </div>
    )
}
