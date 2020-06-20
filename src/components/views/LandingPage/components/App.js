import React, { useState, useEffect } from 'react';
import { Heading } from './Heading';
import { Loader } from './Loader';
import { UnsplashImage } from './UnsplashImage';
 
import axios from 'axios';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';



// style
const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box=sizing: border-box;
}

body {
  font-family: sans-serif;
}

`;

const WrapperImage = styled.section`
max-width: 70rem;
margin: 4rem auto;
display: grid;
grid-gap: 1em;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
grid-auto-rows: 300px;


`;

function App() {
const [images, setImages] = useState([]);

useEffect(() => {
  fetchImages();
}, [])


const fetchImages = () => {
  const apiRoot = "https://api.unsplash.com";

  axios
    .get(`${apiRoot}/photos/random?client_id=6Ye9PvNMVLxhXHoJfdIMHeR_xUrbhaK0Oxf0Qsd7wtI&count=13`)
    .then(res => setImages([...images, ...res.data]))

}
  return (

  <div>
      <Heading />
       <GlobalStyle />
       <InfiniteScroll   
       dataLength={images.length}
       next={fetchImages}
       hasMore={true}
       loader={<Loader />}
       >
       <WrapperImage>
      {images.map(image => (
              <UnsplashImage 
              url={image.urls.thumb}
              key={image.id}
              />    
      ))}
      </WrapperImage>
       </InfiniteScroll>
     
    </div>
  );
}

export default App;
