import React from 'react'
import './single-episode.css'
import { useQuery } from '@apollo/client'
import { GET_EPISODE } from '../../queries/queries'
import { useNavigate, useParams } from 'react-router-dom'


function SingleEpisode() {


  const navigate = useNavigate()

  const {id} = useParams()


  const {data, error, loading} = useQuery(GET_EPISODE, {
    variables : {
      id: id
    }
  })




    
  return (
    <div className='single_episode'>
      {loading ? 
        <div class="loader">Loading
          <span></span>
        </div>   :
        <div className="container">
          <div className="top_section">
            <h1 className='episode_name'>{data?.episode.name}</h1>
            <h5>Aired Date: {data?.episode.air_date}</h5>
          </div>
          <div className="row">
            {data?.episode.characters.map((character)=>(
            <div onClick={()=>navigate(`/characters/${character.id}`)} key={character.id} className="col-md-2">
              <div className="img-box">
                <img src={character.image} alt="" />
                <h6>{character.name}</h6>
              </div>
            </div>
            ))}
          </div>
        </div>
      }
    </div>
  )
}

export default SingleEpisode
