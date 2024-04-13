"use client";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Button from "@mui/material/Button";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ReactStars from "react-stars";

import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";

export default function Home() {
  const [thumbsUpClicked, setThumbsUpClicked] = useState(false);
  const [thumbsDownClicked, setThumbsDownClicked] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [safetyRating, setSafetyRating] = useState(5);
  const [communicationRating, setCommunicationRating] = useState(4);
  const data = [
    { index: 0, title: "Adventurous" },
    { index: 1, title: "Good Listener" },
    { index: 2, title: "Caring" },
    { index: 3, title: "Helpful" },
  ];
  const handleButtonClick = (index) => {
    setSelectedButton(index === selectedButton ? null : index);
  };
  const handleThumbsUpClick = () => {
    setThumbsUpClicked(true);
    setThumbsDownClicked(false);
  };

  const handleThumbsDownClick = () => {
    setThumbsDownClicked(true);
    setThumbsUpClicked(false);
  };

  return (
    <div className="m-2 p-4 flex flex-col sm:items-center sm:justify-center  ">
      <div className="w-[300px] flex flex-col gap-2 mt-6 border-4 border-black border-l-rose-800 rounded-[1.75rem] border-b-rose-800 p-4 ">
        <CloseIcon className="my" />
        <header className="text-3xl font-extrabold ">Leave a Review</header>
        <div>
          <h2 className=" font-semibold text-xl mt-5">Safety</h2>
          <h7 className="text-slate-400  text-[15px] ">
            How safe did you feel with Trausti?
          </h7>
          <ReactStars
            count={5}
            size={30}
            color2={"#ffd700"}
            onChange={setSafetyRating}
            value={safetyRating}
          />
        </div>
        <div>
          <h2 className="mt-2 font-semibold text-xl">Communication</h2>
          <h7 className="text-slate-400 leading-[0.5] text-[12px] ">
            Lorem ipsum, dolor sit amet consectetur ?
          </h7>
          <ReactStars
            count={5}
            size={30}
            color2={"#ffd700"}
            onChange={setCommunicationRating}
            value={communicationRating}
          />
        </div>
        <div>
          <h2 className="font-semibold normal-case text-[17px]">
            Would you recommend Trausti?
          </h2>
          <Button onClick={handleThumbsDownClick}>
            <ThumbDownIcon color={thumbsDownClicked ? "success" : "disabled"} />
            <span className="normal-case ml-2">No</span>
          </Button>
          <Button onClick={handleThumbsUpClick}>
            <ThumbUpIcon color={thumbsUpClicked ? "success" : "disabled"} />
            <span
              className="normal-case ml-2"
              color={thumbsUpClicked ? "success" : "disabled"}
            >
              Yes
            </span>
          </Button>
        </div>
        <div>
          <h2 className="font-semibold text-xl">Praise</h2>
          <h7 className="text-slate-400 text-[12px] leading-[0.5] ">
            Lorem ipsum, dolor sit amet consectetur ?
          </h7>
          <div className="flex flex-wrap gap-1 mt-4">
            {data?.map((val) => {
              return (
                <Button
                  key={val.index}
                  className={`border-1  px-2 rounded-full text-black ${
                    selectedButton === val.index
                      ? "bg-green-500"
                      : "bg-gray-200"
                  }`}
                  onClick={() => handleButtonClick(val.index)}
                >
                  <span className="text-[12px] normal-case">{val.title}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
