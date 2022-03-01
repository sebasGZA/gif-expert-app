import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {


    // const categories = ['One Punch', 'samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState(['One Punch', 'samurai X', 'Dragon Ball'])

    // const handleAdd = () => {
    //     setCategories(cats => [...cats, 'HunterXHunter'])
    // }


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr></hr>

            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {
                    categories.map((category) => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </>
    )
}

