import React, { useState } from 'react';
import './Home.css';
import img1 from '../images/adrianna-geo-1rBg5YSi00c-unsplash.jpg';
import img2 from '../images/andrew-neel-acowe0pCVBg-unsplash.jpg';
import img3 from '../images/falco-negenman-uFm8TgTX42A-unsplash.jpg';
import img4 from '../images/karim-ben-van-HEGkZoijEG8-unsplash.jpg';
import img5 from '../images/liza-rusalskaya-D0ad5ow9isg-unsplash (1).jpg';
import img6 from '../images/museum-background.jpg';

function Home() {
  const [currentImg, setCurrentImg] = useState(0);
  const images = [img1, img2, img3, img4, img5, img6];

  const nextImg = () => {
    setCurrentImg(currentImg === images.length - 1 ? 0 : currentImg + 1);
  };

  const prevImg = () => {
    setCurrentImg(currentImg === 0 ? images.length - 1 : currentImg - 1);
  };

  return (
    <div className="home">
      <h1>Welcome to the Museum of Art</h1>
      <div className="image-slider">
        <img src={images[currentImg]} alt={`Image ${currentImg}`} />
        <button onClick={prevImg}>Prev</button>
        <button onClick={nextImg}>Next</button>
      </div>
    </div>
  );
}

export default Home;
