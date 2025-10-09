import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { TbBackground } from 'react-icons/tb'
import { ContentPagination } from './ContentPagination'
import { Genres } from './Genres'

export const PageLayout = ({title,children,page,setPage,type,selectedGenres,setSelectedGenres,data}) => {
  
  return (
    //color:"#bfdbfe",background: "#172554",background: "linear-gradient(180deg,rgba(23, 37, 84, 1) 0%, rgba(167, 139, 250, 1) 100%)"
    <Container maxWidth={false}  sx={{position:'relative',minHeight:'100vh',paddingBottom:"50px" , color:"#bfc8feff",background: "#2d2d4eff",background: "linear-gradient(90deg,rgba(32, 32, 36, 1) 0%, rgba(13, 16, 20, 1) 100%)"}}>
        <Typography variant='h3' sx={{textTransform:'uppercase',padding:'30px',fontWeight:'bold',letterSpacing:2,textAlign:'center',
            background: "#291d3b"
,background: "linear-gradient(270deg,rgba(184, 184, 184, 1) 0%, rgba(101, 106, 117, 1) 100%)", WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'
        }}>
            {title}
        </Typography>
        {title!="Search" && <Genres type={type} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres}/>}
        <Box sx={{paddingBottom:'70px'}}>{children}</Box>
        {data && <ContentPagination page={page} setPage={setPage}/>}
    </Container>
  )
}
