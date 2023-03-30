import React from 'react'
import './character-card.css'

function CharacterCard({character}) {
  return (
    <div className="col-md-4 mb-4">
        <div className="box">
            <div className="img_box">
              <img src={character.image} alt="" className="alive img-fluid" />
              <span className='status alive'>{character.status}</span>
            </div>
            <h3 className='name'>{character.name}</h3>
            <div className="properties_box">
              <div className="head">
                <h5 className='properties_head'>Properties</h5>
              </div>
              <div className="property">
                <div className="label">gender</div>
                <div className="value">{character.gender}</div>
              </div>
              <div className="property">
                <div className="label">status</div>
                <div className="value">{character.status}</div>
              </div>
              <div className="property">
                <div className="label">species</div>
                <div className="value">{character.species}</div>
              </div>
            </div>

        </div>
    </div>
  )
}

export default CharacterCard
