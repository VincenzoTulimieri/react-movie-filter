// importazione file
import { useEffect, useState } from 'react'


export default function Main(props) {
    const filmsList = props.filmsList
    const [films, setFilm] = useState(filmsList)
    const [filteredFilm, setFilteredFilm] = useState(films);
    const [selectGenre, setSelectGenre] = useState('')

    useEffect(()=>{
        let selectedFilms= films

        if(selectGenre !== ''){
            selectedFilms= selectedFilms.filter(film => film.genre === selectGenre)
        }
        setFilteredFilm(selectedFilms)

    },[selectGenre])

    return (
        <main>
            <div className="container flex">
                <ul className="list-film">
                    {filteredFilm.map((film, index) => {
                        return (
                            <li key={index}>
                                <h2><strong>{film.title}</strong></h2>
                                <p className='li-text'><strong>{film.genre}</strong></p>
                            </li>
                        )
                    })}
                </ul>
                <select className='filter' onChange={(event)=>{setSelectGenre(event.target.value)}}>
                    <option value=''>---</option>
                    <option>Fantascienza</option>
                    <option>Thriller</option>
                    <option>Romantico</option>
                    <option>Azione</option>
                </select>
            </div>
        </main>
    )
}