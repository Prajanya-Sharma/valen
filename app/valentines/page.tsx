"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const handleClickAbout = () => {
    router.push('/about-you'); // Navigate programmatically
  };

  const handleClickMem = () => {
    router.push('/memories');
  };

  const handleOvalButtonClick = () => {
    // Handle audio playback
    if (audio) {
      // If the audio is already playing, restart it
      audio.currentTime = 0;
      audio.play();
      setIsPlaying(true);
    } else {
      // Create a new audio instance if it doesn't exist
      const newAudio = new Audio('/music/song.mp3');
      newAudio.play();
      setAudio(newAudio);
      setIsPlaying(true);
    }
  };

  const handlePlayPause = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="container">
      <h1>Yay! You Said Yes! ❤️</h1>
      <p>You are the best thing that ever happened to me. Happy Valentine Day, Misha!</p>

      {/* Cloud Images */}
      <button className="cloud cloud-top-left" onClick={handleClickAbout}>
        <div className="cloud-text">About You</div>
        <Image
          src="/images/cloud1.jpg"
          alt="Cloud 1"
          width={150}
          height={150}
          quality={75}
          priority
        />
      </button>
      <button className="cloud cloud-top-right" onClick={handleClickMem}>
        <div className="cloud-text">Memories</div>
        <Image
          src="/images/cloud2.jpg"
          alt="Cloud 2"
          width={150}
          height={150}
          quality={75}
          priority
        />
      </button>

      {/* Oval Button */}
      <button className="oval-button" onClick={handleOvalButtonClick}>
        <div className="button-text">What I think of you 🎶</div>
      </button>

      {/* Play/Pause Button */}
      {audio && (
        <button className="play-pause-button" onClick={handlePlayPause}>
          {isPlaying ? '⏸️ Pause' : '▶️ Play'}
        </button>
      )}
    </div>
  );
};

export default Page;