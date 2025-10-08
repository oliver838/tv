import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';

export const ContentPagination = ({ page, setPage }) => {
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: 4,
        marginBottom: 4,
      }}
    >
      <Pagination
        count={20}
        page={page}
        onChange={handleChange}
        color="primary"
        size="large"
        shape="rounded"
        showFirstButton
        showLastButton
        sx={{
          '& .MuiPaginationItem-root': {
            color: '#fff', // alap fehér szöveg
            borderColor: '#93c5fd',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: '#93c5fd',
              color: '#1e293b', // sötét háttérhez világos szöveg
            },
          },
          '& .Mui-selected': {
            backgroundColor: '#93c5fd',
            color: '#1e293b', // kijelölt elem színe
            '&:hover': {
              backgroundColor: '#60a5fa', // hoverre kicsit világosabb
              color: '#1e293b',
            },
          },
        }}
      />
    </Box>
  );
};
