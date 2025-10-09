import { Box, Button, Grid, Tab, Tabs, TextField } from '@mui/material';
import React from 'react';
import { PageLayout } from '../components/PageLayout';
import { useRef } from 'react';
import { IoIosSearch } from "react-icons/io";
import { useState } from 'react';
import { useQuery } from 'react-query';
import { getSearchedData } from '../../utils';
import { MyCard } from '../components/MyCard';

export const SearchPage = () => {
  const [page, setPage] = React.useState(1);
  const [txt, setTxt] = useState('');
  const [value, setValue] = useState(0);
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ['results', value == 0 ? 'movie' : 'tv', txt, page],
    queryFn: getSearchedData,
    enabled: !!txt
  });
  const inputRef = useRef();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Condition to check if the input text is valid or not
  const isInputValid = txt.trim().length > 0;  // For simplicity, checking non-empty string

  return (
    <PageLayout sx={{ position: 'relative' }} title="Search" page={page} setPage={setPage} data={data}>
      <Box sx={{ position: 'absolute', width: 'fit-content', height: 'fit-content', top: '30px', right: '30px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            sx={{
              '& .MuiInputBase-root': {
                color: '#757575ff', // Text input color (white text)
                background: "#291d3b",
                background: "linear-gradient(270deg, rgba(184, 184, 184, 1) 0%, rgba(101, 106, 117, 1) 100%)",
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              },
              '& .MuiInputLabel-root': {
                color:'#1976d2',
                fontWeight: 'bold',
              },
              '& .MuiInput-underline:before': {
                borderBottom: '2px solid  #5c667479', // Bottom line color
              },
              
              '& .MuiInput-underline:hover:before': {
                borderBottom: '2px solid #1976d2', // Hover state bottom line color
              },
            }}
            id="standard-basic"
            label="Search"
            variant="standard"
            inputRef={inputRef}
            value={txt}
            onChange={(e) => setTxt(e.target.value)}
              />
          
        </Box>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab
            sx={{
              background: "#291d3b",
              background: "linear-gradient(270deg, rgba(184, 184, 184, 1) 0%, rgba(101, 106, 117, 1) 100%)",
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
            label="Movies"
          />
          <Tab
            sx={{
              background: "#291d3b",
              background: "linear-gradient(270deg, rgba(184, 184, 184, 1) 0%, rgba(101, 106, 117, 1) 100%)",
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
            label="TV Series"
          />
        </Tabs>
      </Box>
      <Grid container spacing={3} sx={{ margin: "50px" }} justifyContent="center">
        {data && data.results.map((obj) =>
          value == 0 ? (
            <MyCard key={obj.id} {...obj} />
          ) : (
            <MyCard key={obj.id} {...obj} title={obj.name} release_date={obj.first_air_date} />
          )
        )}
      </Grid>
    </PageLayout>
  );
};
