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
        alignItems:'flex-end',
        width:'100%',
        height:'100px',
        paddingBottom:'5px'
      }}
    >
      <Pagination
        count={20}
        page={page}
        
        onChange={handleChange}
        color="primary"
        size="small"
        shape="rounded"
        showFirstButton 
        
        showLastButton
        sx={{
          fontSize:'1px',
          '& .MuiPaginationItem-root': {
            color: '#fff',
            borderColor: '#93c5fd',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: '#93c5fd',
              color: '#1e293b',
            },
          },
          '& .Mui-selected': {
            backgroundColor: '#93c5fd',
            color: '#1e293b',
            '&:hover': {
              backgroundColor: '#60a5fa',
              color: '#1e293b',
            },
          },
        }}
      />
    </Box>
  );
};
