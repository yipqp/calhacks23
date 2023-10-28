import React from "react";
import DiaryEntry from "./DiaryEntry";

const DiaryContainer = () => {
  return (
    <div className="flex justify-center flex-col mt-40 self-center gap-40 w-2/3">
      <DiaryEntry
        photoUrl="src/assets/lasagna.jpg"
        title="lasagna"
        rating={5}
        caption="Wow, this lasagna was wonderful."
      ></DiaryEntry>
      <DiaryEntry
        photoUrl="src/assets/lasagna.jpg"
        title="lasagna"
        rating={5}
        caption="Wow, this lasagna was wonderful."
      ></DiaryEntry>
      <DiaryEntry
        photoUrl="src/assets/lasagna.jpg"
        title="lasagna"
        rating={5}
        caption="Wow, this lasagna was wonderful."
      ></DiaryEntry>
    </div>
  );
};

export default DiaryContainer;
