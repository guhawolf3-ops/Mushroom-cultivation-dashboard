function AIPanel({
  dynamicThreshold,
  humidityTrend,
  predictedHumidity,
  aiReason,
}) {
  return (
    <div className="ai-panel">
      <h3>🤖 AI Automation Insights</h3>

      <p>Dynamic Threshold: {dynamicThreshold}</p>
      <p>Humidity Trend: {humidityTrend.toFixed(2)}</p>
      <p>Predicted Humidity: {predictedHumidity.toFixed(2)}</p>

      <p style={{ fontWeight: "bold", marginTop: "10px" }}>
        AI Decision: {aiReason}
      </p>
    </div>
  );
}

export default AIPanel;
