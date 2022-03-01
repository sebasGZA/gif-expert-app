import React, { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = (({ category }) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs(category).then(imgs => setImages(imgs))
    }, [category])

    return (
        <>
            <h3>
                {category}
            </h3>
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