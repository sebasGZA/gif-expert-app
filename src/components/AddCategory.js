import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
        console.log('handleInputChange')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        console.log('handleSubmit', inputValue)
        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats])
            setInputValue('')
        }
    }
    return (

        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            {/* <h1>{inputValue}</h1> */}
            <input type="text" onChange={handleInputChange} value={inputValue} />
        </form>


    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}