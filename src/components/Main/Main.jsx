// importazione file
import { useEffect, useState } from 'react'


export default function Main(props) {
    const filmsList = props.filmsList
    const [films, setFilm] = useState(filmsList)
    const [selectGenre, setSelectGenre] = useState('')

    useEffect(()=>{
        console.log(filmsList)

        let selectedFilms= films

        if(selectGenre !== ''){
            selectedFilms= selectedFilms.filter(film => film.genre === selectGenre)
        }
        setFilm(selectedFilms)
        console.log(selectedFilms)

    },[selectGenre,])

    return (
        <main>
            <div className="container">
                <select className='filter' onChange={(event)=>{setSelectGenre(event.target.value)}}>
                    <option value=''>---</option>
                    <option>Fantascienza</option>
                    <option>Thriller</option>
                    <option>Romantico</option>
                    <option>Azione</option>
                </select>
                <hr />
                <ul className="list-film">
                    {films.map((film, index) => {
                        return (
                            <li key={index}>
                                <h1>{film.title}</h1>
                                <p><strong>{film.genre}</strong></p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </main>
    )
}