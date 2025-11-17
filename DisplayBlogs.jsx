import React from 'react'
import { useState } from 'react'
import { getBlogs } from '../services/blog'
import { useEffect } from 'react'

function DisplayBlogs() {
    const [blog, setBlog] = useState([])

    useEffect(() => {
        getAllBlogs()
    }, [])

    const getAllBlogs = async () => {
        const result = await getBlogs()
        if (result.status == 'success') {
            setFoodItems(result.data)
        }
        else
            toast.error(result.error)
    }

    return (
        <div className='container'>
            <div className='row'>
                {blog.map(b => {
                    return <div className='col'>
                        <div className="card mt-3" style={{ width: "15rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">{b.title}</h5>
                                <p className="card-text" style={{ height: "5rem" }}>{b.description}</p>
                                    <button className="btn btn-warning">Add to cart</button>
                                </div>
                            </div>
                        </div>
                })}
            </div>
        </div >


    )
}

export default DisplayBlogs