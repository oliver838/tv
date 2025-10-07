import React from 'react'
import { img_300, img_500 } from '../../utils'

export const MyCard = ({poster_path,overview}) => {
  return (
    <div>
      <div class="center">
          <div class="article-card">
            
            
            <div class='front'>
                <div class="content">
                    <p class="date">Jan 1, 2022</p>
                    <p class="title">Article Title Goes Here</p>
                </div>
                <img src={img_500 +poster_path} alt="article-cover" />
            </div>
            <div class='back'>
                {overview}
            </div>
          </div>
        </div>
    </div>
  )
}
