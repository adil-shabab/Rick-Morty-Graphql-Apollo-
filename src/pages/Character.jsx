import React from 'react'
import Navbar from '../components/navbar/Navbar'
import SingleCharacter from '../components/single-character/SingleCharacter'

function Character() {
  return (
    <div className='container'>
        <Navbar/>
        <SingleCharacter/>
    </div>
  )
}

export default Character
