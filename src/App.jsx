import { useState, useEffect } from "react";
import "./App.css";

import AIPanel from "./components/AIPanel";
import HumidityBar from "./components/HumidityBar";
import HumidityChart from "./components/HumidityChart";

function App() {
  const [temperature, setTemperature] = useState(28);
  const [humidity, setHumidity] = useState(85);
  const [mist, setMist] = useState("OFF");

  const [dynamicThresholdState, setDynamicThresholdState] = useState(85);
  const [humidityTrendState, setHumidityTrendState] = useState(0);
  const [predictedHumidity, setPredictedHumidity] = useState(0);
  const [aiReason, setAiReason] = useState("Normal conditions");

  useEffect(() => {
    const interval = setInterval(() => {
      const temp = Math.floor(Math.random() * 6) + 25;
      const hum = Math.floor(Math.random() * 30) + 65;

      setTemperature(temp);
      setHumidity(hum);

      if (hum < 85) setMist("ON");
      else setMist("OFF");

      setPredictedHumidity(hum + (Math.random() * 10 - 5));
      setHumidityTrendState(Math.random() * 10 - 5);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-wrapper">

      <header className="dashboard-header">
        <div>
          <h1>Intelligent Mushroom Cultivation System</h1>
          <p>Real-time monitoring and predictive automation</p>
        </div>
      </header>

      {/* METRICS */}
      <section className="metrics-grid">

        <div className="card">
          <p>Temperature</p>
          <h2>{temperature} °C</h2>
          <small>Room air temperature</small>
        </div>

        <div className="card">
          <p>Humidity</p>
          <HumidityBar humidity={humidity} />
          <small>Moisture level in air</small>
        </div>

        <div className="card">
          <p>Misting Status</p>
          <h2 className={mist === "ON" ? "on" : "off"}>{mist}</h2>
          <small>
            {mist === "ON"
              ? "Humidity low — misting activated"
              : "Humidity normal"}
          </small>
        </div>

      </section>

      {/* MAIN CONTENT */}
      <section className="content-grid">

        <AIPanel
          dynamicThreshold={dynamicThresholdState}
          humidityTrend={humidityTrendState}
          predictedHumidity={predictedHumidity}
          aiReason={aiReason}
        />

        <div className="chart-box">
          <HumidityChart humidity={humidity} />
        </div>

      </section>

    </div>
  );
}

export default App;
