import "./App.css";
import HackathonPage from "./components/HackathonPage";
import { Routes, Route } from "react-router-dom";
import Main from "./MainPage";
import ContactForm from "./components/contact.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:tab" element={<HackathonPage />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </>
  );
}

export default App;
