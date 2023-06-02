import { AllMovies } from "../Types/MoviesType"
import axios from 'axios'
import { MoviApi } from "../Types/MoviesType";
export const getAllMovi=()=>{

    return async(dispatch)=>{
        const response =await axios.get(MoviApi);
        dispatch({ type: AllMovies,data:response.data.results,pages:response.data.total_pages })
    }
}
export const getAMoviSearch=(val)=>{
    return async(dispatch)=>{
       const response =await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=1&include_adult=false&query=${val}`);
        dispatch({ type: AllMovies,data:response.data.results,pages:response.data.total_pages})
    }
    
  
}
export const getPage=(page)=>{
    return async(dispatch)=>{
        const response =await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=${page}`);
        dispatch({ type: AllMovies,data:response.data.results,pages:response.data.total_pages })
    } 
}