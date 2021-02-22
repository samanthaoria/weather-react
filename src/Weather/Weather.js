import { BottomPage } from "../components/bottom-page/BottomPage";
import { CurrentHighLow } from "../components/current-high-low/CurrentHighLow";
import { CurrentItems } from "../components/current-items/CurrentItems";
import { PrecipitationWind } from "../components/precipitation-wind/PrecipitationWind";
import { WindHumidity } from "../components/wind-humidity/WindHumidity";
import { DataContainer } from "../components/data-container/DataContainer";
// import "./styles.css";

export const App = () => {
  return (
    <div className="App">
      <div className="container">
        <DataContainer />
        <div className="data-container">
          <h1 id="city"> Fortaleza </h1>
          <div className="degrees-currentdaytogether">
            <h2 className="light-blue italic"> </h2>
            <CurrentItems />
          </div>
          <ul className="wind-humidity">
            <div className="bold italic">
              <WindHumidity />
              <CurrentHighLow />
              <PrecipitationWind />
            </div>
          </ul>
          <BottomPage />
        </div>
      </div>
    </div>
  );
};
