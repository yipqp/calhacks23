import React from "react";

interface DiaryEntryProps {
  photoUrl: string;
  title: string;
  rating: number;
  caption: string;
}

const DiaryEntry = ({ photoUrl, title, rating, caption }: DiaryEntryProps) => {
  return (
    <div className="flex flex-col lg:flex-row border border-gray-200 rounded-lg">
      <img
        src={photoUrl}
        alt=""
        className=" aspect-square object-cover flex-1 h-96"
      />
      <div className="flex flex-col flex-1 gap-5 p-10">
        <h2 className="font-bold">{title}</h2>
        <div className="">{rating}</div>
        <p>{caption}</p>
      </div>
    </div>
  );
};

export default DiaryEntry;
