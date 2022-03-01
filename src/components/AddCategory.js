import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setCategories(cats => [inputValue,...cats])
        setInputValue('')
        // setCategories(inputValue)
    }
    return (

        <form onSubmit={handleSubmit}>
            <h2>Add Category</h2>
            {/* <h1>{inputValue}</h1> */}
            <input type="text" onChange={handleInputChange} value={inputValue} />
        </form>


    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}