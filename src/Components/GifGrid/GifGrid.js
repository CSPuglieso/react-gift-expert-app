//import React, {useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useFetchGifs } from '../../hooks/useFetchGifs'
import GifIGridItem from './GifIGridItem';
//import { getGifs } from '../../helpers/getGifs';

const GifGrid = ({category}) => {


    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
            <h3> { category }</h3>  
            { loading && <p clasName="card animate__animated animate__flash"> Loading</p>}
            <div className="card-grid">
                
                
                    {
                        images.map( img => (
                            <GifIGridItem {...img } key={img.id}/>
                        ))
                    }
                       
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string
}

export default GifGrid
