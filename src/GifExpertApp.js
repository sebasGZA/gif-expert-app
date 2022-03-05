import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({defualtCategory = []}) => {


    // const categories = ['One Punch', 'samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState(defualtCategory)

    // const handleAdd = () => {
    //     setCategories(cats => [...cats, 'HunterXHunter'])
    // }


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr></hr>

            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {
                    categories.map((category) =>
                       <GifGrid key={category} category={category}/>
                    )
                }
            </ol>
        </>
    )
}

