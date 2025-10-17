import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade'; // ✨ Fade komponens importálása
import { useQuery } from 'react-query';
import { getDetailsData, img_500 } from '../../utils';
import { MyCarousel } from './MyCarousel';
import { ShowTrailer } from './ShowTrailer';

export const MyModal = ({ open, setOpen, handleOpen, handleClose, type, id, poster_path}) => {
  const urlDetails = `https://api.themoviedb.org/3/${type}/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['details', urlDetails],
    queryFn: getDetailsData
  });
console.log(data);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition // ✅ fontos: a DOM-ot csak az animáció után távolítja el
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* ✨ Fade wrapper körülöleli a Box-ot */}
        <Fade in={open} timeout={600}>
          <Box
            className="ModalBox"
            sx={{
              width: '80%',
              maxWidth: 1400,
              maxHeight: '95vh',
              overflowY: 'auto',
              borderRadius: 2,
              p: 4,
              outline: 'none',
            }}
          >
            <div style={{display:'flex', flexWrap:'wrap', flexDirection:'row', gap:'30px', maxHeight:"fit-content", justifyContent:'flex-start',alignItems:'flex-start'}}>
            <div style={{display:'flex', maxHeight:'fit-content',flexDirection:'column', gap:'20px', alignItems:'flex-start', justifyContent:'start', flexBasis:'45%', flex:'1 0'}}> <img style={{  boxShadow: '0 0 10px rgba(147, 197, 253, 0.4)', height:'100%',maxHeight:'600px',  width:'auto', objectFit:'cover', borderRadius:'10px'}} src={img_500+poster_path} alt="" /> 
              <Box sx={{ mt: 3, overflowX: 'auto',padding: '5px 0px 15px 5px' }}>
              <ShowTrailer type={type} id={id} />
            </Box></div>
            <div style={{flexBasis:'45%',display:'flex', flexDirection:'column', gap:'15px',flex:'1 0'}}>
              <Typography id="modal-modal-title" variant="h5" component="h2" gutterBottom>
                {data?.name ?  data.name : data?.title ? data.title: 'Loading...'}
              </Typography>

              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {data?.overview || 'Nincs leírás.'}
              </Typography>
            </div>
            </div>

            {/* Carousel */}
            <Box sx={{ mt: 3 }}>
              <MyCarousel id={id} type={type} open={open} />
            </Box>

            {/* Trailer */}

            
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
