const formatTime = time => {
  const hours = parseInt(time.split(":")[0]);
  const minutes = parseInt(time.split(":")[1]);
  const seconds = parseInt(time.split(":")[2]);
  if (hours > 1) {
    return `${hours}h ${minutes}m ${seconds}s`;
  } else if (seconds > 1) {
    return `${minutes}m ${seconds}s`;
  } else {
    return `${seconds}s`;
  }
};

module.exports = formatTime;
