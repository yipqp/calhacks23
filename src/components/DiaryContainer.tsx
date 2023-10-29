import React from "react";
import DiaryEntry from "./DiaryEntry";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

const DiaryContainer = () => {
  const entriesData = useQuery(api.entries.queryEntries);
  return (
    <div className="flex flex-col-reverse justify-center p-20 self-center gap-40 md:w-2/3 bg-orange-50">
      {entriesData?.map((entry, i) => {
        let url = entry.photoURL;
        if (url == null || url.length < 1) url = "";
        return (
          <DiaryEntry
            photoURL={url}
            title={entry.title}
            rating={entry.rating}
            caption={entry.caption}
            key={i}
          ></DiaryEntry>
        );
      })}
    </div>
  );
};

export default DiaryContainer;
