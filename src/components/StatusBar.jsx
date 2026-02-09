function StatusBar({ humidity }) {

  let status = "";
  let statusColor = "";

  if (humidity < 75) {
    status = "WARNING";
    statusColor = "warning";
  } 
  else if (humidity <= 95) {
    status = "NORMAL";
    statusColor = "normal";
  } 
  else {
    status = "HIGH HUMIDITY";
    statusColor = "high";
  }

  return (
    <div className={`status-bar ${statusColor}`}>
      System Status: {status}
    </div>
  );
}

export default StatusBar;
