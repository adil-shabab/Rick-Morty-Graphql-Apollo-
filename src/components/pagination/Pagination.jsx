import React, {useState, useEffect} from 'react'
import './pagination.css'

function Pagination({currentPage, totalPages, onPageChange}) {


    const [displayPages, setDisplayPages] = useState([])




    useEffect(() => {
        const calculateDisplayPages = () =>{
            let pages = []
    
            if (totalPages <= 2){
                for (let i=1; i <= totalPages; i++){
                    pages.push(i)
                }
            }else if(currentPage <= 3){
                pages = [1,2,3,4,5]
            }else if(currentPage > totalPages-3){
                pages=[totalPages-4,totalPages-3, totalPages-2, totalPages-1, totalPages]
            }else{
                pages=[currentPage-2, currentPage-1, currentPage, currentPage+1, currentPage+2]
            }
    
            setDisplayPages(pages)
        }

        calculateDisplayPages();

    }, [currentPage, totalPages])




    const handlePrevClick = () => {
        if(currentPage > 1){
            onPageChange(currentPage-1)
        }
    }


    const handleNextClick = () =>{
        if(currentPage < totalPages){
            onPageChange(currentPage+1)
        }
    }

    const handlePageChange = (pageNum) =>{
        onPageChange(pageNum)
    }



  return (
    <div className='pagination'>
      <button disabled={currentPage === 1} onClick={handlePrevClick}>Prev</button>
      {displayPages.map((page)=>(
        <button onClick={()=>handlePageChange(page)} className={page === currentPage ? 'active': ''} key={page}>{page}</button>
      ))}
      <button disabled={currentPage === totalPages} onClick={handleNextClick}>Next</button>
    </div>
  )
}

export default Pagination
