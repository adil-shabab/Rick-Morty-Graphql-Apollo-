import React, {useState} from 'react'
import './characters-top.css'
import TextImg from '../../images/text.png'
import { useQuery } from '@apollo/client'
import { GET_ALL_CHARACTERS } from '../../queries/queries'
import CharacterCard from '../character-card/CharacterCard'
import Pagination from '../pagination/Pagination'

function CharactersTop() {

    const [page, setPage] = useState(1)
    const [filter, setFilter] = useState({
        name: '',
        status: '',
        species: '',
        gender: ''
    })


    const {loading, error, data} = useQuery(GET_ALL_CHARACTERS,{
        variables: {
            page: page,
            filter: filter,
        }
    })


    const handlePageChange = (pageNum) => {
        setPage(pageNum)
    }



  return (
    <div className='characters_top'>
      <div className="container">
        <div className="img_section">
            <img src={TextImg} alt="" className="img-fluid" />
        </div>
        <div className="search_section">
            <div className="form">
                <div className="input_div">
                    <label>Name</label>
                    <input type="text"/>
                </div>
                <div className="input_div">
                    <label>Gender</label>
                    <select name="gender" id="">
                        <option value="All">All</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Genderless">Genderless</option>
                        <option value="Unknown">Unknown</option>
                    </select>
                </div>
                <div className="input_div">
                    <label>Species</label>
                    <select name="species" id="">
                        <option value="All">All</option>
                        <option value="Human">Human</option>
                        <option value="Alien">Alien</option>
                        <option value="Robot">Robot</option>
                    </select>
                </div>
                <div className="input_div">
                    <label>Status</label>
                    <select name="status" id="">
                        <option value="All">All</option>
                        <option value="Alive">Alive</option>
                        <option value="Dead">Dead</option>
                        <option value="Unknown">Unknown</option>
                    </select>
                </div>
            </div>
        </div>

        <div className="mt-5 row">
            {data?.characters.results.map((character)=>(
                <CharacterCard key={character.id} character={character}/>
            ))}  
        </div>

        <Pagination currentPage={page} totalPages={data?.characters?.info.pages} onPageChange={handlePageChange} />
      </div>
    </div>
  )
}

export default CharactersTop
