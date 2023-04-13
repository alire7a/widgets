import logo from './logo.svg';
import './App.scss';
import Style3Cardview from "./components/CardViews/Classic/Style3-Cardview";
import Style1Cardview from "./components/CardViews/Classic/Style1-Cardview";
import Style2Cardview from "./components/CardViews/Classic/Style2-Cardview";
import CitiesS1C from "./components/Cities/Classic/Cities-S1-C";
import CitiesS2C from "./components/Cities/Classic/Cities-S2-C";
import CitiesS3C from "./components/Cities/Classic/Cities-S3-C";
import CitiesS1M from "./components/Cities/Modern/Cities-S1-M";
import CitiesS2M from "./components/Cities/Modern/Cities-S2-M";
import CitiesS3M from "./components/Cities/Modern/Cities-S3-M";
import CitiesS1B from "./components/Cities/Boheimian/Cities-S1-B";
import CitiesS2B from "./components/Cities/Boheimian/Cities-S2-B";
import CitiesS3B from "./components/Cities/Boheimian/Cities-S3-B";
import InstagramS1C from "./components/Instagram/Classic/Instagram-S1-C";
import InstagramS2C from "./components/Instagram/Classic/Instagram-S2-C";
import InstagramS3C from "./components/Instagram/Classic/Instagram-S3-C";
import InstagramS1M from "./components/Instagram/Modern/Instagram-S1-M";
import InstagramS2M from "./components/Instagram/Modern/Instagram-S2-M";
import InstagramS3M from "./components/Instagram/Modern/Instagram-S3-M";

function App() {
  return (
    <div className="App flex flex-col gap-20">

      {/*<Style1Cardview/>*/}
      {/*<Style2Cardview/>*/}
      {/*<Style3Cardview/>*/}

      <CitiesS1C/>
      <CitiesS2C/>
      <CitiesS3C/>
      {/**/}
        <CitiesS1M/>
        <CitiesS2M/>
        <CitiesS3M/>

        <CitiesS1B/>
        <CitiesS2B/>
        <CitiesS3B/>


        <InstagramS1C/>
        <InstagramS2C/>
        <InstagramS3C/>

        <InstagramS1M/>
        <InstagramS2M/>
        <InstagramS3M/>
    </div>


  );
}

export default App;

