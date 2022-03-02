import React from 'react'
import { shallow } from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem'

const id = '1234527'
const title = 'Dragon Ball'
const url = 'https://media1.giphy.com/media/19JSJ5ucu91R5D7a3w/giphy.gif?cid=e81b06cevwgyupb28o4v4fs2te5t9r059ccn5dw2gxljzdwj&rid=giphy.gif&ct=g'
const wrapper = shallow(<GifGridItem id={id} title={title} url={url} />)

describe('Pruebas para <GifGridItem/>', () => {
    test('Debe de mostrar <GifGridItem/> correctamente', () => {

        expect(wrapper).toMatchSnapshot()
    })

    test('Debe de tener un parrafo con el title', () => {
        const p = wrapper.find('p')
        expect(p.text().trim()).toBe(title)
    })

    test('Debe de tener una imagen con la url y alt de los props', () => {
        const { src, alt } = wrapper.find('img').props()
        expect(src.trim()).toBe(url)
        expect(alt.trim()).toBe(alt)
    })

    test('Debe de tener animate__backInRight', () => {
        const classname  = wrapper.hasClass('animate__backInRight')
        expect(classname).toBeTruthy()
        // expect(p.text().trim()).toBe(title)
    })
})