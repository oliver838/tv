import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { FaYoutube } from "react-icons/fa";
import { getDetailsData, noImage } from '../../utils';
import { useQuery } from 'react-query';




export const ShowTrailer = ({type,id})=> {
     const urlVideos=`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;
     const youtubeURL = 'https://www.youtube.com/watch?v='
     const {data,isLoading,isError,error} = useQuery({queryKey:['details',urlVideos],queryFn:getDetailsData})
  return (
    <Button
     
      variant="contained"
      startIcon={<FaYoutube />}
      href={data && data?.results[0]?.key ? youtubeURL+data.results[0].key : noImage}
      target='_blank'
    >
      Watch the trailer
      
    </Button>
  )
}
