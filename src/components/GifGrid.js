// import React, { useState, useEffect } from 'react';
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types'

export const GifGrid = (({ category }) => {

    // const [images, setImages] = useState([])
    const { data:images, loading } = useFetchGifs(category);
    // console.log(data, loading)

    // useEffect(() => {
    //     getGifs(category).then(imgs => setImages(imgs))
    // }, [category])

    return (
        <>
            <h3>
                {category}
            </h3>
            {loading && <p className='animate__animated animate__flash'>Loading...</p>}
            <div className='cardGrid'>

                {
                    images.map(image => (
                        <GifGridItem key={image.id} {...image} />
                    ))
                }
            </div>
        </>
    )
})

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}