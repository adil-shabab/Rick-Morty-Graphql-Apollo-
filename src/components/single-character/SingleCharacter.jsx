import React, {useState} from 'react'
import './single-character.css'
import { useQuery } from '@apollo/client'
import { GET_CHARACTER } from '../../queries/queries'
import DetailedCharacterCard from '../detailed-character/DetailedCharacterCard'


function SingleCharacter() {
  
  
  const [id, setId] = useState(1)

  const {data,error,loading} = useQuery(GET_CHARACTER,{
    variables : {
        id: id
    }
  })
 

  return (
    <div className='row'>
        <DetailedCharacterCard key={data?.character.id} character={data?.character}/>
    </div>
  )
}

export default SingleCharacter
