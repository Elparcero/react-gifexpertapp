import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrif } from './components/GifGrif';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Spider man'])

    // const handleAdd = () => {
    //     //setCategories( ['Aquaman' , ...categories] );
    //     setCategories( cats => [...categories, 'Aquaman'] );
    // }
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories } />
            <hr />

            <ol>
                {
                    categories.map( category => (
                        <GifGrif 
                            key = {category}
                            category = {category} /> 

                    ))
                }
            </ol>


        </>
     );
    

};