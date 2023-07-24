import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import gallery from '../image-gallery/gallery';

const MasonryImage = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350:1, 768:2, 992:4}}>
        <Masonry gutter='1rem'>
            {
                gallery.map((item, index) => (
                    <img className='masonry__img' src={item} key={index} style={{width: "100%", display: "block", borderRadius: "10px"}} alt="" />
                ))
            }
        </Masonry>
    </ResponsiveMasonry>
  )
}

export default MasonryImage;