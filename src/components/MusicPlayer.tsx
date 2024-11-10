"use client";

import { useEffect, useRef, useState } from "react";

const SONGS = [
  { title: "O Tannenbaum", filename: "/music/01_O_Tannenbaum.mp3" },
  {
    title: "What Child Is This?",
    filename: "/music/02_What_Child_Is_This.mp3",
  },
  { title: "My Little Drum", filename: "/music/03_My_Little_Drum.mp3" },
  { title: "Linus And Lucy", filename: "/music/04_Linus_And_Lucy.mp3" },
  {
    title: "Christmas Time Is Here (Instrumental)",
    filename: "/music/05_Christmas_Time_Is_Here_Instrumental.mp3",
  },
  {
    title: "Christmas Time Is Here (Vocal)",
    filename: "/music/06_Christmas_Time_Is_Here_Vocal.mp3",
  },
  { title: "Skating", filename: "/music/07_Skating.mp3" },
  {
    title: "Hark, The Herald Angels Sing",
    filename: "/music/08_Hark_The_Herald_Angels_Sing.mp3",
  },
  {
    title: "Christmas is Coming",
    filename: "/music/09_Christmas_Is_Coming.mp3",
  },
  { title: "Fur Elise", filename: "/music/10_Fur_Elise.mp3" },
  { title: "The Christmas Song", filename: "/music/11_The_Christmas_Song.mp3" },
  { title: "Greensleeves", filename: "/music/12_Greensleeves.mp3" },
  {
    title: "Great Pumpkin Waltz",
    filename: "/music/13_Great_Pumpkin_Waltz.mp3",
  },
  { title: "Thanksgiving Theme", filename: "/music/14_Thanksgiving_Theme.mp3" },
];

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(SONGS[0]);
  const audioRef = useRef<HTMLAudioElement>(null);
  const isPlayingRef = useRef(false);

  useEffect(() => {
    const randomSong = SONGS[Math.floor(Math.random() * SONGS.length)];
    setCurrentSong(randomSong);
  }, []);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      if (isPlayingRef.current) {
        audioRef.current.play();
      }
    }
  }, [currentSong]);

  const toggleMusic = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          await audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
      } catch (error) {
        console.error("Error playing audio:", error);
        setIsPlaying(false);
      }
    }
  };

  const nextSong = () => {
    const currentIndex = SONGS.findIndex(
      (song) => song.title === currentSong.title,
    );
    const nextIndex = (currentIndex + 1) % SONGS.length;
    setCurrentSong(SONGS[nextIndex]);
  };

  return (
    <div className="fixed bottom-3 right-3 bg-white/40 backdrop-blur-sm p-2 rounded-lg hover:bg-white/60 transition-colors">
      <div className="flex items-center gap-1 text-xs text-gray-700">
        <button
          onClick={toggleMusic}
          className="hover:opacity-80 transition-opacity"
        >
          {isPlaying ? "⏸️" : "▶️"}
        </button>
        <button
          onClick={nextSong}
          className="hover:opacity-80 transition-opacity"
        >
          ⏭️
        </button>
        <span className="max-w-[120px] truncate">{currentSong.title}</span>
      </div>
      <audio
        ref={audioRef}
        loop
        onError={(e) => {
          console.error("Audio error:", e);
          setIsPlaying(false);
        }}
      >
        <source src={currentSong.filename} type="audio/mpeg" />
      </audio>
    </div>
  );
}
