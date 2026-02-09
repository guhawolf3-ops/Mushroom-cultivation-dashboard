function HumidityBar({ humidity }) {
let barColor = "";

if (humidity < 75) {
  barColor = "#f9a825"; // yellow
} 
else if (humidity <= 95) {
  barColor = "#4caf50"; // green
} 
else {
  barColor = "#c62828"; // red
}


  return (
    <div className="humidity-container">

      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ width: `${humidity}%`,backgroundColor:barColor}}
        ></div>
      </div>

      <p className="humidity-value">{humidity}%</p>

    </div>
  );
}

export default HumidityBar;
