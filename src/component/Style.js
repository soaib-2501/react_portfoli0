import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Style(x) {
  let c=[];
  for(let i=0;i<x.Props;i++)
  {
        c.push(<FontAwesomeIcon icon = {faStar} color='#F1C40F'/>);

  }
  return (
    <div>
        {c}
    </div>
  )
}
