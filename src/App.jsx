import "./App.css";
import HackathonPage from "./components/HackathonPage";
import { Routes, Route } from "react-router-dom";
import Main from "./MainPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:tab" element={<HackathonPage />} />
       
      </Routes>
    </>
  );
}

export default App;
