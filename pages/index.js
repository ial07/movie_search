import React from 'react'
import MovieList from '../components/MovieList'


const Homepage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col mt-5">
                    <h1 className='text-center mb-3'>Test Frontend ILHAM ALMALIK</h1>
                    <MovieList />

                </div>
            </div>
        </div>
    )
}

export default Homepage
