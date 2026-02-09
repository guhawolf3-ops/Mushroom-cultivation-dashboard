import { useState, useEffect } from "react";
import "./App.css";
import StatusBar from "./components/StatusBar";
import HumidityBar from "./components/HumidityBar";
import HumidityChart from "./components/HumidityChart";
import ControlPanel from "./components/ControlPanel";
import ThresholdPanel from "./components/ThresholdPanel";



function App() {
  const [temperature, setTemperature] = useState(28);
  const [humidity, setHumidity] = useState(85);
  const [mist, setMist] = useState("OFF");
  const [mode, setMode] = useState("AUTO");
  const [threshold, setThreshold] = useState(85);

  useEffect(() => {
    const interval = setInterval(() => {
      const temp = Math.floor(Math.random() * 6) + 25; // 25–30
      const hum = Math.floor(Math.random() * 30) + 65; // 65–95

      setTemperature(temp);
      setHumidity(hum);

      if (hum < 85) {
        setMist("ON");
      } else {
        setMist("OFF");
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
  <div className="container">
    <h1>Intelligent Mushroom Cultivation System</h1>
    <p className="subtitle">
      Real-time monitoring and automatic misting control
    </p>

    <div className="cards">
      <div className="card">
        <span className="icon">🌡</span>
        <p>Temperature</p>
        <h2>{temperature} °C</h2>
        <small>Room air temperature</small>
      </div>

      <div className="card">
        <span className="icon">💧</span>
        <p>Humidity</p>
        <HumidityBar humidity={humidity} />
        <small>Moisture level in air</small>
      </div>

      <div className="card">
        <span className="icon">🚿</span>
        <p>Misting Status</p>
        <h2 className={mist === "ON" ? "on" : "off"}>
          {mist}
        </h2>
        <small>
          {mist === "ON"
            ? "Humidity low — misting activated"
            : "Humidity normal"}
        </small>
      </div>
    </div>
    <div>
      <StatusBar humidity={humidity}/>
      <HumidityChart humidity={humidity} />
      <ControlPanel 
       mode={mode} 
       setMode={setMode} 
       mist={mist} 
       setMist={setMist}
      />
      <ThresholdPanel 
      threshold={threshold}
      setThreshold={setThreshold}
      />
    </div>
  </div>
);
}

export default App;
