import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUsC from "./components/contact-us/ContactUsC";
import ContactUsB from "./components/contact-us/ContactUsB";
import ContactUsBoheimian from "./components/contact-us/ContactUsBoheimian";
import HeroCardC from "./components/hero-card/HeroCardC";
import FooterS1C from "./components/Footer/Classic/Footer-S1-C"
import FooterS2C from "./components/Footer/Classic/Footer-S2-C";
import FooterS3C from "./components/Footer/Classic/Footer-S3-C";
import FooterS1M from "./components/Footer/Modern/Footer-S1-M";
import FooterS2M from "./components/Footer/Modern/Footer-S2-M";
import FooterS3M from "./components/Footer/Modern/Footer-S3-M";
import FooterS1B from "./components/Footer/Boheimian/Footer-S1-B";
import FooterS2B from "./components/Footer/Boheimian/Footer-S2-B";
import FooterS3B from "./components/Footer/Boheimian/Footer-S3-B";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <div className={"page bg-red"}>
            <FooterS1B/>
            <FooterS2B/>
            <FooterS3B/>

            <FooterS1M/>
            <FooterS2M/>
            <FooterS3M/>

            <FooterS1C/>
            <FooterS2C/>

            <FooterS3C/>
          </div>
          <Route path="/" >
            <Route path="contact-us-c" element={<ContactUsC />} />
            <Route path="contact-us-b" element={<ContactUsB />} />
            <Route path="contact-us-boheimian" element={<ContactUsBoheimian />} />
            <Route path="hero-card-c" element={<HeroCardC />} />

            <Route path="footer" element={

            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
