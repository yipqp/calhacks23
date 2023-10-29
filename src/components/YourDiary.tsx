import React from "react";
import { useUser } from "@clerk/clerk-react";

const YourDiary = () => {
  const { user } = useUser();
  return <span>Logged in as {user?.fullName}</span>;
};

export default YourDiary;
