import "./App.css";
import { useState } from "react";
import NavBar from "./components/NavBar";
import NavLink from "./components/NavLink";
import DiaryContainer from "./components/DiaryContainer";
import CreateModal from "./components/CreateModal";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";

function App() {
  const [showCreate, setShowCreate] = useState(false);
  return (
    <div className="flex flex-col bg-orange-50">
      {showCreate ? (
        <CreateModal action={() => setShowCreate(false)}></CreateModal>
      ) : null}
      <NavBar>
        <NavLink name="Create" action={() => setShowCreate(true)}></NavLink>
        <SignedIn>
          <NavLink name="Your Diary" action={() => {}}></NavLink>
          <SignOutButton />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal" />
        </SignedOut>
      </NavBar>
      <DiaryContainer></DiaryContainer>
    </div>
  );
}

export default App;
