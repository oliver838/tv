import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useQuery } from 'react-query';
import { getDetailsData } from '../../utils';
import { MyCarousel } from './MyCarousel';
import { ShowTrailer } from './ShowTrailer';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const MyModal = ({open,setOpen,handleOpen,handleClose,type,id}) => {
  const urlDetails = `https://api.themoviedb.org/3/${type}/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;
  
  const {data,isLoading,isError,error} = useQuery({queryKey:['details',urlDetails],queryFn:getDetailsData})

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  <Box
    sx={{
      width: '80%',
      maxWidth: 1000,
      maxHeight: '90vh',         // fontos a vertical scrollhoz
      overflowY: 'auto',         // függőleges scroll
      bgcolor: 'background.paper',
      borderRadius: 2,
      boxShadow: 24,
      p: 4,
      outline: 'none',
    }}
  >
    <Typography id="modal-modal-title" variant="h5" component="h2" gutterBottom>
      {data?.title || 'Loading...'}
    </Typography>

    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      {data?.overview || 'Nincs leírás.'}
    </Typography>

    {/* Horizontálisan görgethető carousel */}
    <Box sx={{ mt: 3 }}>
      <MyCarousel id={id} type={type} open={open} />
    </Box>

    {/* Trailer szekció – opcionálisan horizontális scroll, ha szükséges */}
    <Box sx={{ mt: 3, overflowX: 'auto' }}>
      <ShowTrailer type={type} id={id} />
    </Box>
  </Box>
</Modal>

    </div>
  );
}