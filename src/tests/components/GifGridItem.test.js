import React from 'react'
import { shallow } from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem'

describe('Pruebas para <GifGridItem/>', () => {
    test('Debe de mostrar <GifGridItem/> correctamente', () => {
        const id = '1234527'
        const tittle = 'Dragon Ball'
        const url = 'https://media1.giphy.com/media/19JSJ5ucu91R5D7a3w/giphy.gif?cid=e81b06cevwgyupb28o4v4fs2te5t9r059ccn5dw2gxljzdwj&rid=giphy.gif&ct=g'
        const wrapper = shallow(<GifGridItem id={id} title={tittle} url={url}/>)
        expect(wrapper).toMatchSnapshot()
    })
})