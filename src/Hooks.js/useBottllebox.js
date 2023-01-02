import { useQuery } from 'react-query'
import axios from 'axios'

const Qfun2 = (id) => {
    return axios.get(`http://localhost:4000/Products/${id}`);
}

export const useBottlebox = (id) => {
    return useQuery('s', ()=>Qfun2(id));

}
