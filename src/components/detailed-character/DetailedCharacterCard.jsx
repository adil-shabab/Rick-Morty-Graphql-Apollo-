import React from 'react'
import './detailed-character-card.css'

function DetailedCharacterCard({character}) {
  if (!character) {
    return null; // or some other fallback UI
  }

  const status = character.status
  const statusClassName = status === 'Alive'? 'alive': status === 'Dead'  ? 'dead'  : 'unknown';

  return (
    <div className="col-md-6 mb-4">
        <div className="box left_box">
            <div className="img_box">
              <img src={character.image} alt="" className={`img-fluid ${statusClassName}`} />
              <span className={`status ${statusClassName}`}>{character.status}</span>
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
                <div className="label">species</div>
                <div className="value">{character.species}</div>
              </div>
              <div className="property">
                <div className="label">location</div>
                <div className="value">{character.location.name}</div>
              </div>
              <div className="property">
                <div className="label">origin</div>
                <div className="value">{character.origin.name}</div>
              </div>
            </div>

        </div>
    </div>
  )
}

export default DetailedCharacterCard
