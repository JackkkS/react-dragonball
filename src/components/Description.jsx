import React from 'react'
import './Description.css'

function Description({description, closeInfo}) {
  return (
    <div className="item">
        <div className="bg-content" onClick={closeInfo} />
            <div className="content-info">
                <img src={description.img} alt={description.name} />
                <h4><span>{description.name}</span></h4>
                <p>{description.desciption}</p>
        </div>
    </div>
  )
}

export default Description