import React from 'react'
import PropTypes from 'prop-types'


const GifIGridItem = ({id, title, url}) => {

    //console.log( {id, title, url} )

    return (
        <div className="card animate__animated animate__fadeInDownBig">
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}

GifIGridItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default GifIGridItem
