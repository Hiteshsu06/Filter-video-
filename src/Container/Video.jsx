import React ,{useState} from 'react';
import './Video.css';
import Mockdta from './MOCK_DATA.json'

const Video = () => {

const [state,setState] =useState("");
const searchbtn= (e) =>{
setState(e.target.value)
} ;

  return (
    <div main_top>
        <div className='Searchbar'>
            <div className="Searchbar_heading">SEARCH HERE</div>
            <div className='Searchbar_input'><input type="text" className='Searchbar_input1' onChange={searchbtn} placeholder='Type here...' /></div>
        </div>
    <div className='main'>
        {Mockdta.filter((val)=>{
            if(state===""){return val}
            else if(val.first_name.toLowerCase().includes(state.toLowerCase())
             || val.last_name.toLowerCase().includes(state.toLowerCase())
            ){return val}
        }).map((curElem)=>{
        const{first_name,last_name,vid}=curElem;

        return(
          <div className="heading"> 
          <div className="video"><video src={vid} loop muted controls className='video_inner'  onMouseOver={event => event.target.play()} 
  onMouseOut={event => event.target.pause()} ></video></div>
          <div className="title">{first_name}</div>
          <div className='discription'>{last_name}</div>
    </div>)
        })}
    </div>
    </div>
  )
}

export default Video