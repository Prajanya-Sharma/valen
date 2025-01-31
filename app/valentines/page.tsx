"use client"
import React from 'react';
import Image from 'next/image';
import {useRouter} from 'next/navigation';



const Page = () => {

  
const router = useRouter();

const handleClickAbout = () => {
  router.push('/about-you'); // Navigate programmatically
};

const handleClickMem = ()=>{
 router.push('/memories');
};

  return (
    <div className="container">
      <h1>Yay! You Said Yes! ❤️</h1>
      <p>You are the best thing that ever happened to me. Happy Valentine Day, Misha!</p>
      
      {/* Cloud Images */}
      <button className="cloud cloud-top-left" onClick={handleClickAbout}>
        <div className="cloud-text ">About You</div>
        <Image
          src="/images/cloud1.jpg"
          alt="Cloud 1"
          width={150} // Increased size of the cloud image
          height={150} // Increased size of the cloud image
          quality={75} // Optional: Adjust image quality (default is 75)
          priority // Optional: Preload the image for better LCP
        />
      </button>
      <button className="cloud cloud-top-right" onClick={handleClickMem}>
        <div className="cloud-text">Memories</div>
        <Image
          src="/images/cloud2.jpg"
          alt="Cloud 2"
          width={150} // Increased size of the cloud image
          height={150} // Increased size of the cloud image
          quality={75}
          priority
        />
      </button>

      {/* Oval Button */}
      <button className="oval-button">
        <div className="button-text">What i think of you 🎶</div>
      </button>
    </div>
  );
};

export default Page;
