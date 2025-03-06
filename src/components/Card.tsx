import { Movie } from "../types"

export type CardProps = {
  movie: Movie
}

export default function Card({movie}: CardProps) {
  return (
   
      <div
            key={movie.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg  hover:shadow-xl transition-shadow duration-300 ease-in-out dark:bg-gray-800 dark:border-gray-700"
          >
            <img className="rounded-t-lg" 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie image" />
          
            <div className="p-4 hover:cursor-">
              <h3 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{movie.title}</h3>
              <div className="flex justify-between">
                <p className="text-white">{movie.release_date}</p>
                <p className="text-yellow-200 font-semibold">{movie.vote_average}</p>

              </div>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate">
                {movie.overview}
              </p>
            </div>
          </div>
    
  )
}
