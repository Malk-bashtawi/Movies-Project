import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPage } from '../Redux/Action/MovieAction';

const Paginationn = () => {
    const [pag, setPage] = useState(1)
    const [currenttPage, setcurrenttPage] = useState(1)

    const dispatch = useDispatch()
    const pages = useSelector((state) => state.pageCont)
     
    useEffect(()=> {
     setPage(pages)
     }, [pages])

     //get current page
    const GetCurrentPage = async (page) => {
     try {
     dispatch(getPage(page))
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
     
   <PaginationControl
      page={currenttPage}
      between={4}
      total={pag}
      limit={1}
      changePage={(p) => {
      setcurrenttPage(p)
       GetCurrentPage(p)
       // console.log(p)
      }}
      ellipsis={4}
    />
    </div>
  )
}

export default Paginationn
