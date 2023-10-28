import "./App.css";
import { useState } from "react";
import NavBar from "./components/NavBar";
import NavLink from "./components/NavLink";
import DiaryContainer from "./components/DiaryContainer";
import CreateModal from "./components/CreateModal";

function App() {
  const [showCreate, setShowCreate] = useState(false);
  return (
    <div className="flex flex-col">
      {showCreate ? (
        <CreateModal action={() => setShowCreate(false)}></CreateModal>
      ) : null}
      <NavBar>
        <NavLink name="Create" action={() => setShowCreate(true)}></NavLink>
        <NavLink name="Your Diary" action={() => {}}></NavLink>
      </NavBar>
      <DiaryContainer></DiaryContainer>
    </div>
  );
}

export default App;
