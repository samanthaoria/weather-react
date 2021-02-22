import logo from "./logo.svg";
import "./App.css";

import { CurrentHighLow } from "./components/current-high-low/CurrentHighLow";
import { CurrentItems } from "./components/current-items/CurrentItems";
import { PrecipitationWind } from "./components/precipitation-wind/PrecipitationWind";
import { WindHumidity } from "./components/wind-humidity/WindHumidity";
import { DataContainer } from "./components/data-container/DataContainer";
import { BottomPage } from "./components/bottom-page/BottomPage";
// import "./styles.css";

export default function App() {
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
}

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
