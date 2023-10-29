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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyDiary from "./components/MyDiary";

function App() {
  const [showCreate, setShowCreate] = useState(false);

  return (
    <BrowserRouter>
      <div className="flex flex-col bg-orange-50">
        {showCreate ? (
          <CreateModal toggleModal={setShowCreate}></CreateModal>
        ) : null}
        <NavBar>
          <a
            onClick={() => setShowCreate(true)}
            className="hover:cursor-pointer"
          >
            Create{" "}
          </a>
          <SignedIn>
            <NavLink
              name="My Diary"
              to="my-diary"
              children={undefined}
            ></NavLink>
            <NavLink name="" to="/">
              <SignOutButton />
            </NavLink>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal" />
          </SignedOut>
        </NavBar>
        <Routes>
          <Route path="/" element={<DiaryContainer />} />
          <Route path="/my-diary/" element={<MyDiary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
