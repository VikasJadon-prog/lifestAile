import React from 'react';
import './globals.css';

import ToolListing from './toolListing/ToolListing';

export default function Home() {
  return (
    <div
      className='w-full p-8 h-[900vh] bg-cover bg-center'
      style={{
        backgroundImage: `url('https://s3-alpha-sig.figma.com/img/b579/fb95/507724bd45c0dac2717fae080902c5db?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cy65E8mSKYbS3YUr1s0RHvouLMETFfsdJMTgjsbiWSe7h94JguJ0ZSQ78OkaKjocFXUItsDmjKR2CN~8XFq0ndPoj9xArT5hIVivge~862L8jYrRwIfT-0DBw9r8fFTzkhqbrxvZj--NS9WAVCSd~~B1KWu0-VgdbV0OEmXGOMGFgoiCau8~DSTwTcNgIC0-N5xLb-dTgC5horYs1~ZshCWQJxJp6oNAfvN5hXb5cMAdxUCOQMtECRBQkBPBOaq8K2MUMRUPF~l0Wvenj~EFFKkHTM1b5URsu9WQtPYSLumkYjzbNwSfIj8EnQb8jpBHOn8PI3zPQkh5RTCuA40t5w__')`,
      }}>
     
     <ToolListing/>
    </div>
  );
}
