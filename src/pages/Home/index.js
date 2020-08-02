import React from 'react';
import Menu from '../../components/Menu';
import initialData from '../../data/initial_data.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div style={{ background: "#fff" }}>
      <Menu />

      <BannerMain 
        videoTitle={initialData.categorias[0].videos[0].titulo}
        url={initialData.categorias[0].videos[0].url}
        videoDescription={"O que a Rafaela gosta? Uma análise"}
      />

      <Carousel 
        ignoreFirstVideo
        category={initialData.categorias[0]}
      />

      <Carousel 
        ignoreFirstVideo
        category={initialData.categorias[1]}
      />

      <Carousel 
        ignoreFirstVideo
        category={initialData.categorias[2]}
      />

      <Carousel 
        ignoreFirstVideo
        category={initialData.categorias[3]}
      />

      <Carousel 
        ignoreFirstVideo
        category={initialData.categorias[4]}
      />

      <Carousel 
        ignoreFirstVideo
        category={initialData.categorias[5]}
      />

      <Footer />
      
    </div>
  );
}

export default Home;
