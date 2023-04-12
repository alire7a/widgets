import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUsC from "./components/contact-us/ContactUsC";
import ContactUsB from "./components/contact-us/ContactUsB";
import ContactUsBoheimian from "./components/contact-us/ContactUsBoheimian";
import HeroCardC from "./components/hero-card/HeroCardC";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route path="contact-us-c" element={<ContactUsC />} />
            <Route path="contact-us-b" element={<ContactUsB />} />
            <Route path="contact-us-boheimian" element={<ContactUsBoheimian />} />
            <Route path="hero-card-c" element={<HeroCardC />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
