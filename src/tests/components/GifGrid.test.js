import React from 'react';
import { shallow } from "enzyme"
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from '../../hooks/useFetchGifs';
import '@testing-library/jest-dom'
jest.mock('../../hooks/useFetchGifs')



describe('Pruebas para <GifGrid/>', () => {
    const category = 'One Punch'
    test('Debe de realizar un snapshot de <GifGrid/>', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading:true
        })
        const wrapper = shallow(<GifGrid category={category} />)
        expect(wrapper).toMatchSnapshot()
    })

    test('Debe de mostrar items cuando se cargan las imagenes con useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            title: 'Cualquier Cosa',
            url: 'https://localhost/cualquier/cosa.png'
        }]
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading:false
        })
        const wrapper = shallow(<GifGrid category={category} />)
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)

    })
})