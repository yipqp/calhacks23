import React, { useState } from "react";

const CreateModal = ({ action }: { action: () => void }) => {
  const [entryData, setEntryData] = useState({
    upload: "",
    title: "",
    rating: "",
    entry: "",
  });

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 bg-orange-50 rounded-2xl shadow-solid-primary
    border-2 border-black py-6 px shadow-[10px_10px_0px_0px_#0a0a0a]">
      <form action="" className="flex gap-9 ">
        <div className="">
          <input
            type="file"
            value={entryData.upload}
            onChange={(e) => {
              setEntryData({ ...entryData, upload: e.target.value });
            }}
            className="w-full h-full bg-white rounded-2xl"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label className="flex flex-col gap-3 font-inter text-base text-black">
            Title
            <input
              type="text"
              value={entryData.title}
              onChange={(e) => {
                setEntryData({ ...entryData, title: e.target.value });
              }}
            />
          </label>
          <label className="flex flex-col gap-3 font-inter text-base text-black ">
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
          <label className="flex flex-col gap-3 font-inter text-base text-black ">
            Entry
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              value={entryData.entry}
              onChange={(e) => {
                setEntryData({ ...entryData, entry: e.target.value });
              }}
            ></textarea>
          </label>
          <div className="flex justify-between gap-5">
            <button
              className="border border-green-900 rounded-md py-1 px-5 flex-1 hover:bg-black hover:text-slate-50"
              onClick={action}
            >
              Cancel
            </button>
            <button
              className="border border-green-900 rounded-md py-1 px-5 flex-1 hover:bg-black hover:text-slate-50"
              onClick={action}
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateModal;
