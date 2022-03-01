import React, { useState } from 'react'

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('Hola mundo')
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Submit Hecho')
        console.log(e)
    }
    return (

        <form onSubmit={handleSubmit}>
            <h2>Add Category</h2>
            {/* <h1>{inputValue}</h1> */}
            <input type="text" onChange={handleInputChange} value={inputValue} />
        </form>


    )
}
