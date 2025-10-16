import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { CiSearch } from "react-icons/ci";
import { MdMovie } from "react-icons/md";
import { MdOutlineLiveTv } from "react-icons/md";
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

export const MyBottomNav = () => {
  const currentUrl = window.location.pathname;

  const initialValue = currentUrl.includes('tvseries') 
    ? 1  // TVSeries
    : currentUrl.includes('search')
    ? 2  // Search
    : 0; // Movies

  const [value, setValue] = React.useState(initialValue); // Inicializálás a currentUrl alapján

  const navigate = useNavigate();

  // Handle BottomNavigation value change
  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) navigate('/');
    if (newValue === 1) navigate('/tvseries');
    if (newValue === 2) navigate('/search');
  };


  return (
    <Box
      sx={{
        position: "sticky",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 10,
        minWidth: '280px'
      }}
    >
      <BottomNavigation
        sx={{ backgroundColor: "#1e293b" }}
        showLabels
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          sx={{ color: "#bfdbfe", fontSize: "24px", maxWidth: '33%' }}
          label="Movies"
          icon={<MdMovie />}
        />
        <BottomNavigationAction
          sx={{ color: "#bfdbfe", maxWidth: '33%', fontSize: "24px" }}
          label="TVSeries"
          icon={<MdOutlineLiveTv />}
        />
        <BottomNavigationAction
          sx={{ color: "#bfdbfe", fontSize: "24px", maxWidth: '33%' }}
          label="Search"
          icon={<CiSearch />}
        />
      </BottomNavigation>
    </Box>
  );
};
