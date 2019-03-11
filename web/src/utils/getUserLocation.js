export function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    return false;
  }
}

const showPosition = position => {
  const lat = position.coords.latitude;
  const log = position.coords.longitude;
  console.log([[lat, log], [lat, log]]);
};
