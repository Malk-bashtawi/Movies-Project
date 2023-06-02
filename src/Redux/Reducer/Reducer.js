import { AllMovies } from "../Types/MoviesType"

const initialState = {
    pageCont: 0,
   Movies: [],
  }
 //2-create reducer 
 export const reducer=(state = initialState, action) =>{
    switch (action.type) {
      case AllMovies:
        return { Movies:action.data,pageCont:action.pages}
      default:
        return state
    }
  }