import React from 'react'
import { useQuery } from 'react-query';
import { getGenres } from '../../utils';
import { Stack } from '@mui/material';
import { SingleChip } from './SingleChip';

export const Genres = ({type,selectedGenres,setSelectedGenres}) => {
    const {data,isError,isLoading} = useQuery({queryKey:['genres',type],queryFn:getGenres})
    data && console.log(data);
    
  return (
    <Stack direction='row' gap='1rem' flexWrap='wrap'  justifyContent='center'>
        {data && data.genres.map(obj => 
            <SingleChip key={obj.id} {...obj} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres}/>
        )}
    </Stack>
  )
}
