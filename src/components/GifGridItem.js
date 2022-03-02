import React from 'react';
import PropTypes from 'prop-types'

export const GifGridItem = ( {id ,title, url} ) => {

    return (
        <div key={id} className='card animate__animated animate__backInRight'>
            <img src={url} alt={title}></img>
            <p>{title}</p>
            {/* {img.title} */}
        </div>
    )
}

GifGridItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}