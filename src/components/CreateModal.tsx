import React, { useState } from "react";

const CreateModal = ({ action }: { action: () => void }) => {
  const [entryData, setEntryData] = useState({
    upload: "",
    title: "",
    rating: "",
    caption: "",
  });

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-16 bg-slate-100">
      <form action="" className="flex gap-10 ">
        <div className="">
          <input
            type="file"
            value={entryData.upload}
            onChange={(e) => {
              setEntryData({ ...entryData, upload: e.target.value });
            }}
            className="w-full h-full bg-slate-200"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label className="flex flex-col gap-3">
            Title
            <input
              type="text"
              value={entryData.title}
              onChange={(e) => {
                setEntryData({ ...entryData, title: e.target.value });
              }}
            />
          </label>
          <label className="flex flex-col gap-3">
            Rating
            <input
              type="range"
              name=""
              id=""
              min={0}
              max={5}
              value={entryData.rating}
              onChange={(e) => {
                setEntryData({ ...entryData, rating: e.target.value });
              }}
            />
          </label>
          <label className="flex flex-col gap-3">
            Caption
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              value={entryData.caption}
              onChange={(e) => {
                setEntryData({ ...entryData, caption: e.target.value });
              }}
            ></textarea>
          </label>
          <div className="flex justify-between gap-5">
            <button
              className="border border-gray-500 rounded-md py-1 px-5 flex-1 hover:bg-neutral-800 hover:text-slate-50"
              onClick={action}
            >
              cancel
            </button>
            <button
              className="border border-gray-500 rounded-md py-1 px-5 flex-1 hover:bg-neutral-800 hover:text-slate-50"
              onClick={action}
            >
              save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateModal;
