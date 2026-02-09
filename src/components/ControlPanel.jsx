function ControlPanel({ mode, setMode, mist, setMist }) {

  return (
    <div className="control-panel">

      <h3>Control Mode</h3>

      {/* Mode Toggle */}
      <button 
        className={mode === "AUTO" ? "active-btn" : ""}
        onClick={() => setMode("AUTO")}
      >
        AUTO
      </button>

      <button 
        className={mode === "MANUAL" ? "active-btn" : ""}
        onClick={() => setMode("MANUAL")}
      >
        MANUAL
      </button>

      {/* Manual Controls */}
      {mode === "MANUAL" && (
        <div className="manual-controls">

          <button onClick={() => setMist("ON")}>
            Turn Mist ON
          </button>

          <button onClick={() => setMist("OFF")}>
            Turn Mist OFF
          </button>

        </div>
      )}

    </div>
  );
}

export default ControlPanel;
