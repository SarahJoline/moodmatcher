"use client";

import { useState } from "react";
import Button from "./components/Button";
import Navigation from "./components/Navigation";
import TextInput from "./components/TextInput";

export default function Home() {
  let [userMood, setUserMood] = useState({ mood: "", location: "" });
  let moods = [
    "Happy",
    "Sad",
    "Angry",
    "Sleepy",
    "Excited",
    "Anxious",
    "Calm",
    "Lonely",
  ];
  return (
    <div className="grid grid-rows-[40px_20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-5 sm:p-20 font-josefin">
      <Navigation />
      {userMood.mood === "" && (
        <>
          <h2 className="py-1">How are you feeling?</h2>

          <div className="grid grid-cols-2 gap-y-[5rem] gap-x-[7rem] mb-10">
            {moods.map((mood) => (
              <button
                onClick={() => setUserMood({ ...userMood, mood: mood })}
                key={mood}
                className="cursor-pointer"
              >
                {mood}
              </button>
            ))}
          </div>
        </>
      )}
      {userMood.mood !== "" && (
        <>
          <h2 className="py-1">Let's get a feel for the weather.</h2>
          <TextInput />
          <Button />
        </>
      )}
    </div>
  );
}
