import React from 'react'

export default function Resolution(props) {
    return (
        <div className='container resolution'>
            <h2>{props.msg1}</h2>
            <input type="text" onChange={props.changeValues} id='1' value={props.resolution}/>
            <h2>{props.msg2}</h2>
            <input type="text" onChange={props.changeValues} id='2' value={props.reason}/>
            <button type='submit' onClick={props.submitResolution}>Submit</button>
            <h2>{props.msg3}</h2>
            <textarea name="" cols="30" onChange={props.changeValues} id='3' value={props.achievment} rows="4"></textarea>
            <button type='submit' onClick={props.submitAchievments}>Submit</button>
        </div>
    )
}
