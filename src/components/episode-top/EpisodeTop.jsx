import React, {useState} from 'react'
import './episode-top.css'
import TextImg from '../../images/text.png'
import { useQuery } from '@apollo/client'
import { GET_ALL_EPISODES } from '../../queries/queries'
import Pagination from '../pagination/Pagination'
import { useNavigate } from 'react-router-dom'

function EpisodeTop() {

  const navigate = useNavigate()

  const [page, setPage] = useState(1)

  const [filter, setFilter] = useState({
    name: ''
  })

  const handleNameSearch = (event) => {
    const {value} = event.target;
    setFilter({
      name: value,
    })
    setPage(1)
  }


  const handlePageChange = (pageNum) =>{
    setPage(pageNum)
  }
  
  const {data, error, loading} = useQuery(GET_ALL_EPISODES, {
    variables : {
        page: page,
        filter: filter
    }
  })



  return (
    <div className='episodes_top'>
      <div className="container">
        <div className="img_section">
            <img className='img-fluid' src={TextImg} alt="" />
        </div>
        <div className="form_section">
            <input value={filter.name} onChange={handleNameSearch} type="text" placeholder='Search By Episode Name' />
        </div>
        <div className="episodes_section">
            {loading ? 
            <div class="loader">Loading
              <span></span>
            </div> :
            <div className="row">
              {data?.episodes.results.map((episode)=>(
                  <div onClick={()=>navigate(`/episodes/${episode.id}`)} className="col-md-4">
                      <div className="episode_box">
                          <div className="text_section">
                              <div className="details">
                                  <p className='label'>Name</p>
                                  <p className='value'>{episode.name}</p>
                              </div>
                              <div className="details">
                                  <p className='label'>Date</p>
                                  <p className='value'>{episode.air_date}</p>
                              </div>
                          </div>
                      </div>
                  </div>
              ))}
            </div>
            }
        </div>

        {!loading && <Pagination currentPage={page} totalPages={data?.episodes?.info.pages} onPageChange={handlePageChange} />}
      </div>
    </div>
  )
}

export default EpisodeTop
