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
    <div className="grid grid-rows-[auto_1fr] lg:pb-0 lg:justify-items-start items-start justify-items-center min-h-screen p-8 font-josefin">
      <Navigation />
      {userMood.mood !== "" && (
        <>
          <div className="grid lg:grid-cols-[400px_1fr] w-full min-h-full">
            <div className="lg:border-r flex flex-col justify-between items-center h-full w-full  lg:px-4 py-6">
              <div className="w-full flex flex-col items-center gap-4">
                <h2 className="text-center lg:text-[28px]">
                  Let's get a feel for the weather.
                </h2>
                <TextInput />
              </div>

              <Button />
            </div>
          </div>
        </>
      )}
      {userMood.mood !== "" && userMood.location !== "" && (
        <>
          <h2 className="py-1 lg:text-[28px] text-center">
            Here’s some suggestions that might fit the vibe
          </h2>
          //TODO: add display
        </>
      )}
      {userMood.mood === "" && (
        <div className="lg:grid lg:grid-cols-[400px_1fr] w-full lg:min-h-full">
          <div className="lg:border-r lg:flex lg:flex-col lg:items-center h-full">
            <h2 className="py-1 lg:text-[28px] mt-5 text-center">
              How are you feeling?
            </h2>
            <div
              className="grid grid-cols-2 gap-y-[5rem] gap-x-[7rem] mb-10 mt-5 w-full
        max-w-xs lg:w-fit lg:h-full "
            >
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
          </div>
        </div>
      )}
    </div>
  );
}
