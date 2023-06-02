import React from 'react'
import CardesMovies from './CardesMovies'
import Paginationn from './Paginationn'
import Row from 'react-bootstrap/Row';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllMovi } from '../Redux/Action/MovieAction';
import { useState } from 'react';

const MoviesList = ({NumerOfPages, GetCurrentPage}) => {
  const [AllMovies, setAllMovies] = useState([]);
  const dispatch = useDispatch()
  useEffect(()=> {
     dispatch(getAllMovi())
   }, [])
  const MoviesData = useSelector((state) => state.Movies)

  useEffect(()=> {
    setAllMovies(MoviesData)

   }, [MoviesData])

  return (
    
    <Row className='mt-3'>
    
    {AllMovies.length >= 1 ?
      
      
      (AllMovies.map((mov) => (
        <CardesMovies key={mov.id} mov={mov}/>

      )))
       : <h1> No Elementes</h1>}


     <Paginationn NumerOfPages={NumerOfPages} GetCurrentPage={GetCurrentPage}/>
    </Row>

  )
}

export default MoviesList
