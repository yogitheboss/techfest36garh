import "./App.css";
import HackathonPage from "./Components/HackathonPage";
import { Routes, Route } from "react-router-dom";
import Main from "./MainPage";
import Registration from "../src/Components/Registration"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/hackathon" element={<HackathonPage />} />
        <Route  path="/registration" element={<Registration/>}/>
      </Routes>
    </>
  );
}

export default App;
