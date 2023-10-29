import React from "react";
import { useUser, useAuth, SignIn } from "@clerk/clerk-react";
import { api } from "../../convex/_generated/api";
import { useQuery } from "convex/react";
import DiaryEntry from "./DiaryEntry";

const MyDiary = () => {
  const { user } = useUser();
  const { isSignedIn } = useAuth();

  const name = user?.fullName ? user.fullName : user?.username;
  const userEntries = useQuery(api.entries.getUserEntries);

  return (
    <div className="min-h-screen flex justify-center p-20">
      {!isSignedIn ? (
        <div className="m-auto">
          <SignIn />
        </div>
      ) : (
        <div className="flex flex-col gap-5 items-center">
          <h1 className="text-5xl">{name}'s diary</h1>
          <div className="flex">
            {userEntries?.map((entry, i) => {
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
        </div>
      )}
    </div>
  );
};

export default MyDiary;
