import React from 'react'

const Modal = ({
    title, poster, actor, country, years, awards, genre, plot, writer
}) => {
    return (
        <div>
            <div className="modal fade " id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className='row'>
                                <div className='col-lg-4 col-sm-6'>
                                    <div className='d-flex justify-content-center'>
                                        <img src={poster} className='text-center' style={{ height: '300px' }} />
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
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
