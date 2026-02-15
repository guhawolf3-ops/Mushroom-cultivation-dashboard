function HumidityBar({ humidity }) {
  return (
    <div>
      <div
        style={{
          background: "#e5e7eb",
          borderRadius: "10px",
          height: "12px",
          marginTop: "10px",
        }}
      >
        <div
          style={{
            width: `${humidity}%`,
            background: "#22c55e",
            height: "12px",
            borderRadius: "10px",
          }}
        />
      </div>

      <p style={{ marginTop: "8px" }}>{humidity}%</p>
    </div>
  );
}

export default HumidityBar;
