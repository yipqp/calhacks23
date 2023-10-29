import React from "react";
import { useUser } from "@clerk/clerk-react";

const MyDiary = () => {
  const { user } = useUser();
  return <span>Logged in as {user?.fullName}</span>;
};

export default MyDiary;
