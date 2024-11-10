"use client";

import {
  CountdownTimer,
  Guestbook,
  MarqueeBanner,
  MusicPlayer,
  PartyDetails,
  PartyRules,
  PartyTheme,
  RsvpButton,
} from "@/components";

export default function Home() {
  return (
    <>
      <div className="party-container">
        <h1 className="party-title">🎄 The Christmas Party 🎄</h1>
        <MarqueeBanner />
        <PartyDetails />
        <PartyRules />
        <PartyTheme />
        <Guestbook />
        <CountdownTimer />
        <RsvpButton />
      </div>
      <MusicPlayer />
    </>
  );
}
