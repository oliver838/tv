import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { TbBackground } from 'react-icons/tb'

export const PageLayout = ({title,children}) => {
  return (
    <Container maxWidth={false}  sx={{minHeight:'100vh',paddingBottom:"50px" , color:"#bfdbfe",background: "#172554",background: "linear-gradient(180deg,rgba(23, 37, 84, 1) 0%, rgba(167, 139, 250, 1) 100%)"}}>
        <Typography variant='h3' sx={{textTransform:'uppercase',fontWeight:'bold',letterSpacing:2,textAlign:'center',
            background: "#291d3b"
,background: "linear-gradient(270deg,rgba(172, 150, 204, 1) 0%, rgba(181, 177, 218, 1) 100%)", WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'
        }}>
            {title}
        </Typography>
        <Box>{children}</Box>
    </Container>
  )
}
