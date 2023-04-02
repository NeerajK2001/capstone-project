import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';
import '../../styles/gallery.css';

import img1 from '../../components/img/img1.jpg';
import img2 from '../../components/img/img2.webp';
import img3 from '../../components/img/img3.webp';
import img4 from '../../components/img/img4.webp';
import img5 from '../../components/img/img5.webp';
import img6 from '../../components/img/img6.webp';
import img7 from '../../components/img/img7.webp';
import img8 from '../../components/img/img8.webp';
import img9 from '../../components/img/img14.webp';
import img10 from '../../components/img/img10.webp';
import img11 from '../../components/img/img11.webp';
import img12 from '../../components/img/img15.webp';
import img13 from '../../components/img/img16.webp';

export default function MyGallery() {
  const [itemsToShow, setItemsToShow] = React.useState(12);
  const [showLoadMore, setShowLoadMore] = React.useState(true);

  const itemData = [
    {img: img1,
    title: '9on9',
  },
  {
    img: img2,
    title: '9on9',
  },
  {
    img: img3,
    title: '9on9',
  },
  {
    img: img4,
    title: '9on9',
  },
  {
    img: img5,
    title: '9on9',
  },
  {
    img: img6,
    title: '9on9',
  },
  {
    img: img7,
    title: '9on9',
  },
  {
    img: img8,
    title: '9on9',
  },
  {
    img: img9,
    title: '9on9',
  },
  {
    img: img10,
    title: '9on9',
  },
  {
    img: img11,
    title: '9on9',
  },
  {
    img: img12,
    title: '9on9',
  },
  {
    img: img13,
    title: '9on9',
  },
  ];

  const handleLoadMore = () => {
    setItemsToShow(itemsToShow + 12);
  };

  React.useEffect(() => {
    if (itemsToShow >= itemData.length) {
      setShowLoadMore(false);
    } else {
      setShowLoadMore(true);
    }
  }, [itemsToShow, itemData.length]);

  return (
    <div>
      <div className="gallery">
        <h1>GALLERY</h1>
      </div>
      <Box sx={{ width: 9/10, height: 1/0}}>  {/*, overflowY: 'scroll' */}
        <ImageList variant="masonry" cols={'fitcontent'} gap={8}>
          {itemData.slice(0, itemsToShow).map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        {showLoadMore && (
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
            <Button variant="contained" onClick={handleLoadMore}>
              Load More
            </Button>
          </Box>
        )}
      </Box>
    </div>
  );
}


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import '../../styles/gallery.css';

// export default function MyGallery() {
//   return (
//     <div>
//       <div className="gallery">
//         <h1>GALLERY</h1>
//       </div>
//       <Box sx={{ width: 9/10, height: 1/0}}>  {/*, overflowY: 'scroll' */}
//         <ImageList variant="masonry" cols={'fitcontent'} gap={8}>
//           {itemData.map((item) => (
//                 <ImageListItem key={item.img}>
//                   <img
//                     src={`${item.img}?w=248&fit=crop&auto=format`}
//                     srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//                     alt={item.title}
//                     loading="lazy"
//                   />
//                 </ImageListItem>
//           ))}
//         </ImageList>
//       </Box>
//     </div>
//   );
// }

// const itemData = [
//   {
//     img: '../../components/img/img1.jpg',
//     title: 'Bed',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
//     title: 'Books',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
//     title: 'Sink',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
//     title: 'Kitchen',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
//     title: 'Blinds',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
//     title: 'Chairs',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
//     title: 'Laptop',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
//     title: 'Doors',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
//     title: 'Coffee',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
//     title: 'Storage',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
//     title: 'Candle',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
//     title: 'Coffee table',
//   },
// ];


