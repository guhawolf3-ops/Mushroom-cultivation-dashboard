import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { useState, useEffect } from "react";

function HumidityChart({ humidity }) {

  const [data, setData] = useState([]);

  useEffect(() => {

    setData((prevData) => {

      const newEntry = {
        time: new Date().toLocaleTimeString(),
        humidity: humidity
      };

      return [...prevData.slice(-9), newEntry];

    });

  }, [humidity]);

  return (
    <div className="chart-container">
      <h3>Humidity Over Time</h3>

      <LineChart width={400} height={250} data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="time" />
        <YAxis domain={[50, 100]} />
        <Tooltip />

        <Line 
          type="monotone"
          dataKey="humidity"
          stroke="#4caf50"
          strokeWidth={3}
        />

      </LineChart>
    </div>
  );
}

export default HumidityChart;
