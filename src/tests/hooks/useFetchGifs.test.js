import { useFetchGifs } from '../../hooks/useFetchGifs'
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas en el hook useFetchGifs', () => {
    test('Debe de retornar el estado inicial', () => {
        const category = 'One Punch'
        const { result } = renderHook(() => useFetchGifs(category))
        const {data:images, loading} = result.current
        console.log(images, loading)
        expect(images).toEqual([])
        expect(loading).toBeTruthy()
    })
})