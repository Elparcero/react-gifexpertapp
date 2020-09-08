import React from 'react'
import { GrifGridItem } from './GrifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrif = ( {category} ) => {

    const { data:images, loading } = useFetchGifs( category );

    return (

        <>
        <h3 className= "animate__animated animate__fadeIn"> { category } </h3>

        {loading && <p className= "animate__animated animate__flash">Loading</p>}

        <div className= "card-grid">               
                {
                    images.map( img => (
                        <GrifGridItem 
                            key = { img.id }
                            { ...img } 
                        />
                    ) )
                }
                
        </div>
        </>
    )
}
