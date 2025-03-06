import { Movie } from "../types"

export type MovieActions = 
  { type: 'fetch-movies-request'} |
  { type: 'fetch-movies-success', payload: Movie[] } |
  { type: 'fetch-movies-failure', payload: string} 

export type MovieState = {
  loading: boolean
  movies: Movie[]
  error: string | null
}

export const initialState = {
  loading: false,
  movies: [],
  error: ''
}

export const movieReducer = (
  state: MovieState,
  action: MovieActions
) => {
  if(action.type === 'fetch-movies-request'){
    return{
      ...state,

      loading: true, // los datos están cargándose
      error: null    // Borra cualquier error anterior
    }
  }
  if(action.type === 'fetch-movies-success'){
    return{
      ...state,
      loading: false, // Se desactiva el estado de carga
      movies: action.payload,  // Se guarda la lista de películas en el estado global
    }
  }
  if(action.type === 'fetch-movies-failure'){
    return{
      ...state,
      loading: false,         // Se desactiva la carga
      error: action.payload   // Guarda el mensaje de error en el estado global
    }
  }
  return state
}

