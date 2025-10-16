import { Grid } from '@mui/material';
import React from 'react';
import { PageLayout } from '../components/PageLayout';
import { MyCard } from '../components/MyCard';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { getData } from '../../utils';

export const TvSeries = () => {
  const [page, setPage] = React.useState(1);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['tvseries', 'tv', page, selectedGenres],
    queryFn: getData,
  });

  return (
    <PageLayout
      title="TV Series"
      page={page}
      setPage={setPage}
      type="tv"
      selectedGenres={selectedGenres}
      setSelectedGenres={setSelectedGenres}
      data={data}
    >
      <Grid container spacing={3} sx={{ marginTop: '50px', marginBottom: '50px' }} justifyContent="center">
        {data &&
          data.results.map((obj) => (
            <MyCard
              key={obj.id}
              {...obj} // Egységesítjük a propokat
              title={obj.name} // TV Series-hez name van
              release_date={obj.first_air_date} // TV Series-hez first_air_date van
              type="tv"
            />
          ))}
      </Grid>
    </PageLayout>
  );
};
