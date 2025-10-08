import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import { useState } from 'react';
import { MdDoneAll } from "react-icons/md";
import { MdCancelPresentation } from "react-icons/md";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { MdOutlineRadioButtonChecked } from "react-icons/md";


export const  SingleChip = ({id,name,selectedGenres,setSelectedGenres}) => {
    const[isSelected,setIsSelected] = useState(false)
  const handleClick = () => {
    setIsSelected(!isSelected)
    if(selectedGenres.indexOf(id)==-1)
      setSelectedGenres(prev=>[...prev,id])
    else
      setSelectedGenres(prev=>prev.filter(item=>item!= id))
    console.log(selectedGenres);
    
  };



  return (
    <Stack direction="row" spacing={1}>
      <Chip sx={{color:'#fff', backgroundColor:"#312f35ff"}}
        label={name}
        clickable
        
        onClick={handleClick}
        
        icon={ isSelected ? <MdOutlineRadioButtonChecked/> : <MdOutlineRadioButtonUnchecked/>}
      />
      
    </Stack>
  );
}