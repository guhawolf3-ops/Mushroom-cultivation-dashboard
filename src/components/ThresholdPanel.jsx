function ThresholdPanel({ threshold, setThreshold }) {

  return (
    <div className="threshold-panel">

      <h3>Humidity Threshold Setting</h3>

      <input
        type="number"
        value={threshold}
        onChange={(e) => setThreshold(Number(e.target.value))}
      />

      <p>Current Threshold: {threshold}%</p>

    </div>
  );
}

export default ThresholdPanel;
