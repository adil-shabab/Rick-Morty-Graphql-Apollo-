import React from 'react'
import './character-card.css'
import { useNavigate } from 'react-router-dom'

function CharacterCard({character}) {

  const navigate = useNavigate()

  const handleCharacterClick = () => {
    navigate(`/characters/${character.id}`)
  }


  const status = character.status
  const statusClassName = status === 'Alive'? 'alive': status === 'Dead'  ? 'dead'  : 'unknown';
  return (
    <div onClick={handleCharacterClick} className="col-md-4 mb-4">
        <div className="box card">
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
