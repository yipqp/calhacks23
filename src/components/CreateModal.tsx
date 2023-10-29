import React, { useEffect, useRef, useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

const CreateModal = ({ action }: { action: () => void }) => {
  interface EntryData {
    title: string;
    rating: number;
    caption: string;
    storageId: string;
  }

  const [entryData, setEntryData] = useState<EntryData>({
    title: "",
    rating: 0,
    caption: "",
    storageId: "",
  });

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const imageInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    imageInput.current!.value = "";
  }, [imageInput]);

  const addEntry = useMutation(api.entries.addEntry);
  const generateUploadUrl = useMutation(api.entries.generateUploadUrl);

  const handleUpload = async (e) => {
    e.preventDefault();
    const postUrl = await generateUploadUrl();
    const result = await fetch(postUrl, {
      method: "POST",
      headers: { "Content-Type": selectedImage!.type },
      body: selectedImage,
    });
    const { storageId } = await result.json();
    setSelectedImage(null);

    return storageId;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    action();
    const storageId = await handleUpload(e);
    await addEntry({ ...entryData, storageId: storageId });
    setEntryData({
      title: "",
      rating: 0,
      caption: "",
      storageId: "",
    });
  };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-16 bg-slate-100">
      <form action="#" className="flex gap-10 " onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          ref={imageInput}
          onChange={(e) => {
            setSelectedImage(e.target.files![0]);
          }}
          className="w-full h-full bg-slate-200"
        />
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
                setEntryData({
                  ...entryData,
                  rating: parseInt(e.target.value),
                });
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
              type="button"
            >
              cancel
            </button>
            <button
              className="border border-gray-500 rounded-md py-1 px-5 flex-1 hover:bg-neutral-800 hover:text-slate-50"
              type="submit"
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
