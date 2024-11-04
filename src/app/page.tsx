"use client";

import {
  CountdownTimer,
  Guestbook,
  MarqueeBanner,
  MusicPlayer,
  PartyDetails,
  RsvpButton,
  Rules,
} from "@/components";

export default function Home() {
  return (
    <>
      <div className="party-container">
        <h1 className="party-title">🎄 The Christmas Party 🎄</h1>
        <MarqueeBanner />
        <PartyDetails />
        <Rules />
        <Guestbook />
        <CountdownTimer />
        <RsvpButton />
      </div>
      <MusicPlayer />
    </>
  );
}
