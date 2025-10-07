import React from 'react'
import { PageLayout } from '../components/PageLayout'
import { Grid } from '@mui/material'
import { useQuery } from 'react-query'
import { getData } from '../../utils'
import { MyCard } from '../components/MyCard'

export const Movies = () => {
  const [page,setPage] = React.useState(1);
  const {data,isLoading,isError} = useQuery({queryKey:['moviesdata','movie',page],queryFn:getData})
  data && console.log(data);
  
  return (

    <PageLayout title='Movies' page={page} setPage={setPage}>

      <Grid container spacing={2} sx={{margin:"50px"}} justifyContent='center'>
        {data && data.results.map(obj=>
          <MyCard key={obj.id} {...obj}/>
        )}
        
      </Grid>
    </PageLayout>
  )
}

