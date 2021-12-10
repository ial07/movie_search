import { useState, useEffect } from 'react'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroller';
import router from 'next/router'
import Link from 'next/link'
import { generateRandomData } from '../helpers';
import Modal from './Modal';
import { useSelector, useDispatch } from 'react-redux';


const MovieList = () => {
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')
    const [title, setTitle] = useState('')
    const [actor, setActor] = useState('')
    const [poster, setPoster] = useState('')
    const [country, setCountry] = useState('')
    const [awards, setAwards] = useState('')
    const [years, setYears] = useState('')
    const [genre, setGenre] = useState('')
    const [writer, setWriter] = useState('')
    const [plot, setPlot] = useState('')

    const dispatch = useDispatch()

    const { movie } = useSelector(state => state)

    console.log(movie)

    useEffect((e) => {
        axios.get(`http://www.omdbapi.com/?apikey=715289b&s=${search}`)
            .then(result => {
                const responseApi = result.data.Search
                console.log('Data API', responseApi)
                setMovies(responseApi)
                dispatch({ type: 'UPDATE_MOVIES', payload: responseApi })
            })
            .catch(err => {
                console.log('Error =>', err)
            })

    }, [search])


    const getMovie = async (id) => {
        const data = await axios.get(`http://www.omdbapi.com/?apikey=715289b&i=${id}`)
        const responseApi = data.data
        setTitle(responseApi.Title)
        setActor(responseApi.Actors)
        setPoster(responseApi.Poster)
        setCountry(responseApi.Country)
        setAwards(responseApi.Awards)
        setYears(responseApi.Year)
        setGenre(responseApi.Genre)
        setWriter(responseApi.Writer)
        setPlot(responseApi.Plot)
    }

    return (
        <div>
            <input value={search} className='form-control' placeholder='Search Movies in Here....' onChange={(e) => setSearch(e.target.value)} />
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Years</th>
                        <th>Poster</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        movies ?
                            movies.map((movie, index) => (
                                <tr key={movie.imdbID}>
                                    <td>{index + 1}</td>
                                    <td>{movie.Title}</td>
                                    <td>{movie.Year}</td>
                                    <td>
                                        <img src={movie.Poster} style={{ height: '100px' }} />
                                    </td>
                                    <td>
                                        {/* <Link href={`/${movie.imdbID}`}>
                                            <a className='btn btn-primary'>View</a>
                                        </Link> */}
                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => getMovie(movie.imdbID)}>
                                            View
                                        </button>
                                    </td>
                                </tr>
                            )) : (<td colSpan={5}>No Movie, Search First...</td>)
                    }
                </tbody>
            </table>
            {/* <!-- Modal --> */}
            <Modal
                title={title}
                poster={poster}
                years={years}
                actor={actor}
                country={country}
                awards={awards}
                genre={genre}
                writer={writer}
                plot={plot}
            />
        </div>

    )
}

export default MovieList


