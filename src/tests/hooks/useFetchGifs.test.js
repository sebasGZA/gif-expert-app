import { useFetchGifs } from '../../hooks/useFetchGifs'
import { renderHook } from '@testing-library/react-hooks'


describe('Pruebas en el hook useFetchGifs', () => {
    const category = 'One Punch'

    test('Debe de retornar el estado inicial',async() => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(category))
        const { data: images, loading } = result.current
        await waitForNextUpdate()
        expect(images).toEqual([])
        expect(loading).toBeTruthy()
    })

    test('Debe de retornar un arreglo de imgs y el loading en false', async() => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(category))
        await waitForNextUpdate()
        const { data: images, loading } = result.current

        expect(images.length).toBe(10)
        expect(loading).toBeFalsy()
    })
})