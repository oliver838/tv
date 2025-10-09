import { Grid } from '@mui/material'
import React from 'react'
import { PageLayout } from '../components/PageLayout'
import { MyCard } from '../components/MyCard';
import { useState } from 'react'
import { useQuery } from 'react-query'
import { getData } from '../../utils'
export const TvSeries = () => {
  const [page,setPage] = React.useState(1);
    const [selectedGenres, setSelectedGenres] = useState([])
    const {data,isLoading,isError} = useQuery({queryKey:['tvseries','tv',page,selectedGenres],queryFn:getData})
  return (
    <PageLayout title='TV series' page={page} setPage={setPage} type='tv' selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} data={data}>
          <Grid container spacing={3} sx={{margin:"50px"}}  justifyContent='space-around'>
            {data && data.results.map(obj=>
                      <MyCard key={obj.id} {...obj} title={obj.name} release_date={obj.first_air_date}/>
                    )}
          </Grid>
    </PageLayout>
  )
}
