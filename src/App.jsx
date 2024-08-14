import "./App.css";
import HackathonPage from "./components/HackathonPage";
import { Routes, Route } from "react-router-dom";
import Main from "./MainPage";
import Registration from "./components/Registration";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:tab" element={<HackathonPage />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;
