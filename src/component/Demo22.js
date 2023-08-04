import React from 'react'
let arr=[{name:"ak",branch:"a"},{name:"anmol",branch:"b"},{name:"gaurav",branch:"c"},{name:"pal",branch:"d"}]
export default function Demo22() {
  return (
    <div>Demo22
    {arr.map(
        (ob)=>{
            return <h1> Name is: {ob.name} . branch is :{ob.branch}</h1>
        }
        
  )}</div>)
}
