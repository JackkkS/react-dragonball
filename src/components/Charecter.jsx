import React from 'react'
import './Charecter.css'

function Charecter({ char, openInfo }) {
  return (
    <div>
      <div className="content">
        <img src={char.img} alt="" />
        <h4><span>{char.name}</span></h4>
        <button className="btn"onClick={()=>{openInfo(char)}} >Info</button>
      </div>
    </div>
  )
}

export default Charecter