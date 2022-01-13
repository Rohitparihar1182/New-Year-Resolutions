import React, {useState} from 'react'
import Resolution from './resolution';
import ShowAchievments from './showAchievments';
import ShowResolutions from './showResolutions';

const resolutions=[];
const achievments=[];

export default function MainCom(props) {
    const changeValues=(event)=>{
        if(event.target.id==='1'){
            setResolution(event.target.value);
        }
        else if(event.target.id==='2'){
            setReason(event.target.value);
        }
        else if(event.target.id==='3'){
            setAchievment(event.target.value);
        }
    }
    const backToDefault=()=>{
        setReason('');
        setResolution('');
    }
    const submitResolution=()=>{
        if(resolution===''){
            return ;
        }
        let obj={
            resolution:resolution,
            reason:reason
        }
        resolutions.push(obj);
        backToDefault();
    }
    const submitAchievments=()=>{
        if(achievment!==''){
            achievments.push(achievment);
        }
        setAchievment('');
    }
    const [resolution, setResolution]=useState('');
    const [reason, setReason]=useState('');
    const [achievment, setAchievment]=useState('');
    return (
        <div className="flex">
            <Resolution changeValues={changeValues} submitAchievments={submitAchievments} submitResolution={submitResolution} resolution={resolution} reason={reason} achievment={achievment} msg1={props.msg1} msg2={props.msg2} msg3={props.msg3}/>
            <div className='container data-container'>
                <div className="title">
                    <h2>Your Resolutions</h2>
                </div>
                <div className="show-resolutions">
                    {
                        resolutions.map((item,index)=>{
                            return <ShowResolutions reason={item.reason} resolution={item.resolution} index={index} key={index}/>;
                        })
                    }
                </div>
                <div className="title">
                    <h2>Your Achievments</h2>
                </div>
                <div className="show-achievments">
                    {
                        achievments.map((item,index)=>{
                            return <ShowAchievments index={index} key={index} achievment={item}/>;
                        })
                    }
                </div>
            </div>
        </div>
    )
}
