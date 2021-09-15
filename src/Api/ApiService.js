import axios from "axios";
import {useMutation, useQuery} from "react-query"


const api = axios.create({
    baseURL: 'https://5c6eb0534fa1c9001424240b.mockapi.io/api/v1'
})

/*---------------custom hooks to fetch with-------------------------------------- */
/*------------- get all books-----------------------------------------------------*/
export const useAllBooks = () =>
    useQuery(
        'allBooks',
        async () => {
            const {data} = await api.get('books')
            return data
        },
        {
            refetchInterval:10000,
        }
    )

/*------------get book by ID----------------------------------------------------*/
export const useBook = id =>
    useQuery(['books', id],
        async () =>{
        const {data} = await api.get(`books/${id}`);
        return data
        })

/*----------------- add book-----------------------------------------------------*/
export const useAddBook = () => useMutation(input => api.post('books', input))

/*-----------------edit existing book---------------------------------------------*/
export const useEditBook = (id) => useMutation(input => api.put(`books/${id}`, input));
