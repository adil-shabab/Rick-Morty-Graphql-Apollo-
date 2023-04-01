import React from 'react'
import './single-character.css'
import { useQuery } from '@apollo/client'
import { GET_CHARACTER } from '../../queries/queries'
import DetailedCharacterCard from '../detailed-character/DetailedCharacterCard'
import { useParams } from 'react-router-dom'


function SingleCharacter() {
  
  
  const {id} = useParams()

  const {data,error,loading} = useQuery(GET_CHARACTER,{
    variables : {
        id: id
    }
  })


  if (loading) {
    return <div class="loader">Loading<span></span></div>
  }
 

  return <DetailedCharacterCard key={data?.character.id} character={data?.character}/>
}

export default SingleCharacter
