import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useState } from 'react'

export default function Like() {
    const [likes,setLikes]=useState(10);
    const [color,setColor]=useState("black");
    const onClick=()=>{
        if(color=='black'){
            setColor("blue");
            setLikes(likes+1);
        }
        else{
            setColor('black');
            setLikes(likes-1);
        }
    }
  return (
    <div>Likes :{likes}
    <FontAwesomeIcon icon={faThumbsUp} onClick={onClick} color={color}/>
    </div>
  )
}
