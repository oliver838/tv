import axios from "axios";

const base_url = "https://api.themoviedb.org/3/discover/"
export const img_300='https://image.tmdb.org/t/p/w300';
export const img_500='https://image.tmdb.org/t/p/w500';  

export const getData = async({queryKey})=>{
    const resp = await axios.get(base_url+queryKey[1]+"?api_key="+import.meta.env.VITE_TMDB_API_KEY)
    return resp.data
}