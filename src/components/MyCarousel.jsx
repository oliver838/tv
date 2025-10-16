import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import Slider from "react-slick";
import { getDetailsData, img_300, noImage } from "../../utils";

export const MyCarousel = ({ type, id, open }) => {
  const sliderRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const urlCredits = `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;
  const { data } = useQuery({
    queryKey: ['details', urlCredits],
    queryFn: getDetailsData
  });

  // Keep settings in state so we can update them dynamically
  const [settings, setSettings] = useState({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3, slidesToScroll: 3 }
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2, slidesToScroll: 2 }
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1, slidesToScroll: 1 }
    }
  ]
  });

  useEffect(() => {
    if (windowWidth < 480) {
      // When open is true, change slidesToShow and slidesToScroll to 1
      setSettings((prev) => ({
        ...prev,
        slidesToShow: 1,
        slidesToScroll: 1,
      }));
    } else if (windowWidth < 768) {
      // Revert back to original when open is false
      setSettings((prev) => ({
        ...prev,
        slidesToShow: 2,
        slidesToScroll: 2,
      }));
    } else if (windowWidth < 1024) {
      // Revert back to original when open is false
      setSettings((prev) => ({
        ...prev,
        slidesToShow: 3,
        slidesToScroll: 3,
      }));
    }
    else{
      
      // Revert back to original when open is false
      setSettings((prev) => ({
        ...prev,
        slidesToShow: 4,
        slidesToScroll: 4,
      }));
    
    }
  }, [open]);

  return (
    <Slider ref={sliderRef} {...settings}>
      {data?.cast.map(obj => (
        <div>
        <div key={obj.id}  className="kisemberkepek">
          <img 
            className="kiskepek"
            src={obj.profile_path ? img_300 + obj.profile_path : noImage}
            alt={obj.name}
          />
          </div >
          <span style={{marginTop:'20px'}}>
          <b sx={{ marginTop: "10px"}} style={{ color: "#fff" }}>{obj.name}</b> {/* White text for actor names */}
          </span>
          </div>
      ))}
    </Slider>
  );
};
