import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { CiSearch } from "react-icons/ci";
import { MdMovie } from "react-icons/md";
import { MdOutlineLiveTv } from "react-icons/md";
import { useNavigate } from 'react-router';


export const MyBottomNav = ()=> {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate()
  const handleChange=(event,newValue)=>{
    setValue(newValue)
    console.log(newValue);
    if(newValue==0) navigate('/')
    if(newValue==1) navigate('/tvseries')
    if(newValue==2) navigate('/search')

  }

  return (
    <Box sx={{ width: 500, position:"fixed",bottom:0}}>
      <BottomNavigation style={{backgroundColor:"#8b5cf6"}} showLabels value={value} onChange={handleChange}>
        <BottomNavigationAction style={{color:"#bfdbfe"}} label="Movies" icon={<MdMovie />} />
        <BottomNavigationAction style={{color:"#bfdbfe"}} label="Series" icon={<MdOutlineLiveTv/>} />
        <BottomNavigationAction style={{color:"#bfdbfe"}} label="Search" icon={<CiSearch/>} />
      </BottomNavigation>
    </Box>
  );
}