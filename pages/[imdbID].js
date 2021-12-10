import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
    const router = useRouter()

    const [title, setTitle] = useState('')
    const [actor, setActor] = useState('')
    const [poster, setPoster] = useState('')
    const [country, setCountry] = useState('')
    const [awards, setAwards] = useState('')
    const [years, setYears] = useState('')
    const [genre, setGenre] = useState('')
    const [writer, setWriter] = useState('')
    const [plot, setPlot] = useState('')

    const id = router.query.imdbID
    console.log(id)

    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?apikey=715289b&i=${id}`)
            .then(result => {
                const responseApi = result.data
                console.log('Data API', responseApi)
                setTitle(responseApi.Title)
                setActor(responseApi.Actors)
                setPoster(responseApi.Poster)
                setCountry(responseApi.Country)
                setAwards(responseApi.Awards)
                setYears(responseApi.Year)
                setGenre(responseApi.Genre)
                setWriter(responseApi.Writer)
                setPlot(responseApi.Plot)
            })
            .catch(err => {
                console.log('Error =>', err)
            })

    }, [])
    console.log('Ratings =>', rating)

    return (
        <div className='container mt-5 '>
            <div className='row'>
                <div className='col-lg-4 col-sm-6'>
                    <div className='d-flex justify-content-center'>
                        <img src={poster} className='text-center' style={{ height: '500px' }} />
                    </div>
                    <div className='text-center mt-3'>
                        <h2>{title}</h2>
                        <p>{actor}</p>
                    </div>
                </div>
                <div className='col-lg-8 col-sm-6 mt-5'>
                    <table className='table table-borderless table-responsive'>
                        <tr>
                            <th>Country</th>
                            <td>:</td>
                            <td>{country}</td>
                        </tr>
                        <tr>
                            <th>Years</th>
                            <td>:</td>
                            <td>{years}</td>
                        </tr>
                        <tr>
                            <th>Awards</th>
                            <td>:</td>
                            <td>{awards}</td>
                        </tr>
                        <tr>
                            <th>Country</th>
                            <td>:</td>
                            <td>{country}</td>
                        </tr>
                        <tr>
                            <th>Genre</th>
                            <td>:</td>
                            <td>{genre}</td>
                        </tr>
                        <tr>
                            <th>Writer</th>
                            <td>:</td>
                            <td>{writer}</td>
                        </tr>
                        <tr>
                            <th>Plot Twice</th>
                            <td>:</td>
                            <td>{plot}</td>
                        </tr>
                    </table>
                </div>
            </div>





        </div>
    )
}

export default MovieDetails
