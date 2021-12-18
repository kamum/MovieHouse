import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "./services/api";
import { key } from "./services/api_key";

interface Movie {
    id: number;
    original_language: string;
    original_title: string;
    title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    vote_average: string;
    vote_count: number;
  
}

interface MoviesProviderProps {
    children: ReactNode;
}

export const MoviesContext = createContext<Movie[]>([]);


export function MoviesProvider({ children }: MoviesProviderProps) {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
      api.get(`discover/movie?sort_by=popularity.desc&${key}`)
        .then(response => setMovies(response.data.results))
    }, []);

    return (
        <MoviesContext.Provider value={movies}>
            { children }
        </MoviesContext.Provider>
    )
 }