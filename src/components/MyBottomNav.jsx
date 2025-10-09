import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { CiSearch } from "react-icons/ci";
import { MdMovie } from "react-icons/md";
import { MdOutlineLiveTv } from "react-icons/md";
import { useNavigate } from 'react-router';

export const MyBottomNav = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) navigate('/');
    if (newValue === 1) navigate('/tvseries');
    if (newValue === 2) navigate('/search');
  };

  return (
    <Box
      sx={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 10,
      }}
    >
      <BottomNavigation
        sx={{ backgroundColor: "#1e293b" }}
        showLabels
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          sx={{ color: "#bfdbfe", fontSize: "24px" }}
          label="Movies"
          icon={<MdMovie />}
        />
        <BottomNavigationAction
          sx={{ color: "#bfdbfe", fontSize: "24px" }}
          label="TVSeries"
          icon={<MdOutlineLiveTv />}
        />
        <BottomNavigationAction
          sx={{ color: "#bfdbfe", fontSize: "24px" }}
          label="Search"
          icon={<CiSearch />}
        />
      </BottomNavigation>
    </Box>
  );
};
