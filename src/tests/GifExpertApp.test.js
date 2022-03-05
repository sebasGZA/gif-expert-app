import React from 'react';
import { shallow } from "enzyme"
import { GifExpertApp } from "../GifExpertApp"

describe('Prueba para <GifExpertApp/>', () => {
    test('Debe de realizar snapshot de <GifExpertApp/>', () => {
        const wrapper = shallow(<GifExpertApp />)
        expect(wrapper).toMatchSnapshot()
    })

    test('Debe de mostrar una lista de categorias', () => { 
        const categories = ['One Punch', 'Dragon Ball']
        const wrapper = shallow(<GifExpertApp defualtCategory={categories}/>)
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('GifGrid').length).toBe(categories.length)
     })
})