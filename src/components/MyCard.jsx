// MyCard.jsx
import React from 'react'
import { img_500 } from '../../utils'
import { MyModal } from './MyModal';

export const MyCard = ({ poster_path, overview, release_date, vote_average, title, type, id}) => {
  console.log(title);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="card-container">
      <div className="card-inner">
        {/* Front */}
        <div className="card-front alma">
          <img src={img_500 + poster_path} alt={title} />
          <div className="rating">{Math.round(vote_average)}</div>
          <div className="content">
            <p className="date">{release_date}</p>
            <p className="title">{title}</p>
          </div>
        </div>

        {/* Back */}
        <div className="card-back relati">
          <p className="date">{release_date}</p>
          <p className="title">{title}</p>
          <p className="overview">{overview}</p>
          <div className='absolu'><MyModal open={open} setOpen={setOpen} handleOpen={handleOpen} handleClose={handleClose} type={type} id={id}/></div>
        </div>
      </div>
    </div>
  )
}
