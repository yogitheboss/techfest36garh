import "./App.css";
import HackathonPage from "./components/HackathonPage";
import { Routes, Route } from "react-router-dom";
import Main from "./MainPage";
// import Registration from "./components/Registration"
import RegistrationToggle from "./Components/RegistrationToggle";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/hackathon" element={<HackathonPage />} />
        <Route  path="/registration" element={<RegistrationToggle/>}/>
      
      </Routes>
    </>
  );
}

export default App;
