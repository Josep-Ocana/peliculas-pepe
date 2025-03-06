import { useEffect, useReducer } from "react"
import { initialState, movieReducer } from "./reducers/movie-reducer"
import Card from "./components/Card"

export default function App() {

  
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMBD_API_KEY}&language=es-ES`

  
  const [ state, dispatch ] = useReducer(movieReducer, initialState)

  useEffect(() => {
    const fetchMovies = async () => {
      // Actualiza el estado para indicar que la carga de datos ha comenzado
      dispatch( {type: 'fetch-movies-request'})
      try {
        // Hacemos la petición a la API con fetch
        const response = await fetch(API_URL)  // lanza la petición a la API       
        if(!response.ok) throw new Error('Error al obtener las películas')  

        const data = await response.json()     // Convierte la respuesta a JSON       
        console.log(data) 
        dispatch( { type: 'fetch-movies-success', payload: data.results})
        
      } catch (error) {
        console.log(error)
        dispatch( { type: 'fetch-movies-failure', payload: (error as Error).message})
      }
    }
    fetchMovies()
  },[])

  return (
    <div>       
      <header>
        <h1 className="text-6xl bg-slate-500 py-4 text-white text-center">Películas Pepe</h1>
      </header>
      
      <h2 className="text-3xl text-center mt-3 my-5 uppercase">Películas populares</h2>
      <div className="px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-auto  m-w-screen-xl">
        {state.movies.map(movie => (
          <Card 
            key={movie.id}
            movie={movie}
            />
          
        ))}
      </div>  
    </div>
  )
}



