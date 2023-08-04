import React from 'react'

export default function Algebricexp(pr) {
  return (
    <div>
        <h1>Evaluating Expression</h1>
        <h3>{pr.l}{"<"}{pr.m}:{pr.l<pr.m?"true":"false"}</h3>
    </div>
  )
}
